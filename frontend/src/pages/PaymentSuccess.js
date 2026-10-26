import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center px-3"
      style={{
        minHeight: "85vh",
        background: "linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%)",
        overflow: "hidden",
        animation: "fadeIn 0.8s ease-in-out",
      }}
    >
      {/* Success Circle with Animation */}
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #10b981, #059669)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)",
          animation: "pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <i
          className="bi bi-check2"
          style={{
            fontSize: "65px",
            color: "white",
            fontWeight: "bold",
          }}
        ></i>
      </div>

      {/* Animated Heading */}
      <h1
        className="fw-bold mt-4"
        style={{
          fontSize: "2.3rem",
          color: "#065f46",
          letterSpacing: "-0.5px",
          animation: "slideDown 0.8s ease-in-out",
        }}
      >
        Order Placed Successfully! 🎉
      </h1>

      {/* Subtitle */}
      <p
        className="text-secondary"
        style={{
          fontSize: "1.05rem",
          maxWidth: "520px",
          marginTop: "10px",
          lineHeight: "1.6",
        }}
      >
        Thank you for shopping with <strong>G-Shop</strong>. Our packaging team is packing your fresh produce now.
      </p>

      {/* 15-Min Delivery Badge */}
      <div 
        className="bg-white px-4 py-2 rounded-pill shadow-sm d-flex align-items-center gap-2 my-2 border border-success-subtle"
      >
        <span className="fs-5">⚡</span>
        <span className="fw-bold text-success small">Estimated Delivery: 15 Minutes</span>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="btn btn-success fw-bold mt-4 rounded-pill px-5 py-3 shadow"
        style={{
          background: "linear-gradient(135deg, #10b981, #047857)",
          border: "none",
          transition: "all 0.3s ease",
        }}
      >
        🏠 Back to Home & Explore More
      </button>

      {/* Small Note */}
      <p className="mt-4 text-muted small">
        Order confirmation and live GPS delivery link sent to your registered contact.
      </p>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
          }

          @keyframes pop {
            0% { transform: scale(0); opacity: 0; }
            80% { transform: scale(1.15); opacity: 1; }
            100% { transform: scale(1); }
          }

          @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default PaymentSuccess;
