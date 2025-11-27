import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      // ✅ Create order from backend
      const res = await fetch("http://localhost:6005/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 100 }), // ₹100
      });

      if (!res.ok) throw new Error("Backend error");

      const orderData = await res.json();

      if (!orderData.id) {
        alert("Order creation failed");
        return;
      }

      // ✅ Razorpay payment options
      const options = {
        key: "rzp_test_RZKcgEwKycMyd3", // your key_id
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Gshop",
        description: "Payment for your grocery order",
        order_id: orderData.id,
        handler: function (response) {
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Order ID:", response.razorpay_order_id);
          // ✅ Redirect to success page after payment
          navigate("/payment-success");
        },
        prefill: {
          name: "John Doe",
          email: "example@email.com",
          contact: "9876543210",
        },
        theme: { color: "#007bff" },
      };

      const razor = new window.Razorpay(options);
      razor.open();

    } catch (err) {
      console.error(err);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div
            className="card border-0 rounded-4"
            style={{ boxShadow: "0 4px 12px rgba(0,123,255,0.2)" }}
          >
            <div className="card-body p-5">
              <h3 className="text-center mb-4 fw-bold">🧾 Checkout</h3>
              <form onSubmit={handlePayment}>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Email"
                  required
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Phone Number"
                  required
                />
                <textarea
                  className="form-control mb-3"
                  placeholder="Address"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 fw-semibold"
                >
                  🚀 Pay ₹100
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
