const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const Razorpay = require("razorpay");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = 6005;

app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
const uri = "mongodb+srv://dshanthini:dsha2006@cluster0.nitvbb2.mongodb.net/?appName=Cluster0";


const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
});

// ✅ Razorpay Setup
const razorpay = new Razorpay({
  key_id: "rzp_test_RZKcgEwKycMyd3", // Razorpay test key
  key_secret: "rrTEZiPs6IU1s8Tmt72Z6YqI", // Razorpay test secret
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
