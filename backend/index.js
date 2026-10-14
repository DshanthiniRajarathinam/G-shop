const express = require("express");
require("dotenv").config();
const multer = require("multer");
const cors = require("cors");
const bcrypt = require("bcrypt");
const Razorpay = require("razorpay");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.PORT || 6005;

app.use(cors());
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

app.post("/api/voice-search", upload.single("audio"), async (req, res) => {
  try {
    const apiKey = process.env.ASSEMBLYAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "Voice search is not configured." });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Audio file is required." });
    }

    const uploadResponse = await fetch("https://api.assemblyai.com/v2/upload", {
      method: "POST",
      headers: {
        authorization: apiKey,
        "content-type": req.file.mimetype || "application/octet-stream",
      },
      body: req.file.buffer,
    });

    const uploadData = await uploadResponse.json();

    if (!uploadResponse.ok) {
      console.error("Audio upload failed:", uploadData);
      return res.status(502).json({ error: "Audio upload failed." });
    }

    const transcriptResponse = await fetch(
      "https://api.assemblyai.com/v2/transcript",
      {
        method: "POST",
        headers: {
          authorization: apiKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({ audio_url: uploadData.upload_url }),
      }
    );

    const transcriptData = await transcriptResponse.json();

    if (!transcriptResponse.ok) {
      console.error("Transcription request failed:", transcriptData);
      return res.status(502).json({ error: "Transcription request failed." });
    }

    for (let i = 0; i < 30; i++) {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const resultResponse = await fetch(
        `https://api.assemblyai.com/v2/transcript/${transcriptData.id}`,
        { headers: { authorization: apiKey } }
      );

      const result = await resultResponse.json();

      if (!resultResponse.ok) {
        return res.status(502).json({ error: "Could not get transcription." });
      }

      if (result.status === "completed") {
        return res.json({ text: result.text || "" });
      }

      if (result.status === "error") {
        return res.status(422).json({ error: "Audio transcription failed." });
      }
    }

    return res.status(504).json({ error: "Transcription timed out. Try again." });
  } catch (error) {
    console.error("Voice search error:", error.message);
    return res.status(500).json({ error: "Voice search failed." });
  }
});


// ✅ MongoDB Connection
const uri = process.env.MONGODB_URI;


const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
});

// ✅ Razorpay Setup
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Root Test API
app.get("/", (req, res) => {
  res.send("✅ GShop Backend Running Successfully on Port 6005");
});

async function run() {
  try {
    await client.connect();
    const db = client.db("test");
    const collection = db.collection("menu");

    console.log("✅ MongoDB Connected Successfully");

    // ✅ User Registration
    app.post("/upload", async (req, res) => {
      const { name, email, password } = req.body;
      if (!name || !email || !password)
        return res.status(400).json({ error: "All fields are required" });

      try {
        const existingUser = await collection.findOne({ email });
        if (existingUser) {
          return res.status(409).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await collection.insertOne({
          name,
          email,
          password: hashedPassword,
        });

        res.status(201).json({
          message: "User registered successfully",
          id: result.insertedId,
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
      }
    });

    // ✅ User Login
    app.post("/login", async (req, res) => {
      const { email, password } = req.body;
      if (!email || !password)
        return res
          .status(400)
          .json({ message: "Email and password are required" });

      try {
        const user = await collection.findOne({ email });
        if (!user)
          return res.status(401).json({ message: "Invalid email or password" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(401).json({ message: "Invalid email or password" });

        const { password: pwd, ...userWithoutPassword } = user;
        res.status(200).json({
          message: "Login successful",
          user: userWithoutPassword,
        });
      } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Server error" });
      }
    });

    // ✅ Reset Password
    app.put("/reset-password", async (req, res) => {
      const { email, newPassword } = req.body;

      if (!email || !newPassword) {
        return res
          .status(400)
          .json({ message: "Email and new password are required." });
      }

      const user = await collection.findOne({ email });
      if (!user) return res.status(404).json({ message: "User not found." });

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await collection.updateOne(
        { email },
        { $set: { password: hashedPassword } }
      );

      res.json({ message: "Password reset successful" });
    });

    // ✅ Create Razorpay Order
    app.post("/api/create-order", async (req, res) => {
      try {
        const { amount } = req.body;

        if (!amount)
          return res
            .status(400)
            .json({ success: false, message: "Amount required" });

        const options = {
          amount: amount * 100, // Convert ₹ to paise
          currency: "INR",
          receipt: "receipt_" + Date.now(),
        };

        const order = await razorpay.orders.create(options);

        res.json({
          id: order.id,
          amount: order.amount,
          currency: order.currency,
        });
      } catch (err) {
        console.error("Order Error:", err);
        res.status(500).json({ success: false, message: "Server error" });
      }
    });

    console.log("✅ All APIs Ready (Auth + Payment)");
  } catch (error) {
    console.error("❌ Error connecting:", error);
  }
}

run().catch(console.dir);

// ✅ Server Listen
app.listen(port, () =>
  console.log(`🚀 Server running on http://localhost:${port}`)
);
