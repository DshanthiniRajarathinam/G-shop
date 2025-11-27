import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #a8edea, #fed6e3)",
        overflow: "hidden",
        animation: "fadeIn 1s ease-in-out",
      }}
    >
      {/* ✅ Success Circle with Animation */}
      <div
        style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          background: "linear-gradient(145deg, #00c853, #b2ff59)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 25px rgba(0, 200, 83, 0.6)",
          animation: "pop 0.6s ease-out",
        }}
      >
        <i
          className="bi bi-check2-circle"
          style={{
            fontSize: "80px",
            color: "white",
            textShadow: "0 0 10px rgba(255,255,255,0.8)",
          }}
        ></i>
      </div>

      {/* ✅ Animated Heading */}
      <h1
        className="fw-bold mt-4"
        style={{
          fontSize: "2.5rem",
          color: "#0d6efd",
          letterSpacing: "1px",
          animation: "slideDown 1s ease-in-out",
        }}
      >
        Payment Successful 🎉
      </h1>

      {/* ✅ Subtitle */}
      <p
        style={{
          color: "#333",
          fontSize: "1.1rem",
          maxWidth: "500px",
          marginTop: "10px",
          animation: "fadeIn 1.5s ease-in-out",
        }}
      >
        Thank you for shopping with <strong>GShop</strong>. Your order has been
        placed successfully and will be delivered soon.
      </p>

      {/* ✅ Back Button */}
      <button
        onClick={() => navigate("/")}
        className="btn fw-semibold mt-4"
        style={{
          background: "linear-gradient(90deg, #007bff, #00c6ff)",
          color: "white",
          padding: "10px 35px",
          borderRadius: "30px",
          border: "none",
          boxShadow: "0 4px 15px rgba(0, 123, 255, 0.3)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.target.style.boxShadow = "0 6px 25px rgba(0, 123, 255, 0.5)")
        }
        onMouseLeave={(e) =>
          (e.target.style.boxShadow = "0 4px 15px rgba(0, 123, 255, 0.3)")
        }
      >
        🏠 Back to Home
      </button>

      {/* ✅ Small Note */}
      <p className="mt-4 text-muted" style={{ fontSize: "0.9rem" }}>
        A confirmation email has been sent to your registered email address.
      </p>

      {/* ✅ CSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.98); }
            to { opacity: 1; transform: scale(1); }
          }

          @keyframes pop {
            0% { transform: scale(0); opacity: 0; }
            80% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); }
          }

          @keyframes slideDown {
            from { transform: translateY(-30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default PaymentSuccess;
