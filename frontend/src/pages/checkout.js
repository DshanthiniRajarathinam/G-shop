import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "example@email.com",
    phone: "9876543210",
    address: "123 Green Valley, Chennai",
    notes: ""
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const total = cartItems.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price);
    return sum + numericPrice * (item.quantity || 1);
  }, 0);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Create order from backend (Exact backend endpoint preserved)
      const res = await fetch("https://g-shop-backend-atpy.onrender.com/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 100 }), // ₹100
      });

      if (!res.ok) throw new Error("Backend error");

      const orderData = await res.json();

      if (!orderData.id) {
        alert("Order creation failed");
        setLoading(false);
        return;
      }

      // ✅ Razorpay payment options
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Gshop",
        description: "Payment for your grocery order",
        order_id: orderData.id,
        handler: function (response) {
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Order ID:", response.razorpay_order_id);
          navigate("/payment-success");
        },
        prefill: {
          name: formData.name || "John Doe",
          email: formData.email || "example@email.com",
          contact: formData.phone || "9876543210",
        },
        theme: { color: "#10b981" },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.error(err);
      alert("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page py-5" style={{ backgroundColor: "#f8fafc", minHeight: "85vh" }}>
      <div className="container">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-4">
          <Link to="/cart" className="text-success text-decoration-none fw-semibold d-inline-flex align-items-center gap-1">
            <i className="bi bi-arrow-left"></i> Return to Cart
          </Link>
        </div>

        <div className="row g-4 justify-content-center">
          
          {/* Left Form: Delivery Address */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <div className="d-flex align-items-center gap-2 mb-4">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center bg-success-subtle text-success fw-bold"
                  style={{ width: "42px", height: "42px" }}
                >
                  <i className="bi bi-geo-alt-fill fs-5"></i>
                </div>
                <div>
                  <h4 className="fw-bold mb-0 text-dark">Delivery Address</h4>
                  <small className="text-muted">Enter where you'd like your groceries delivered</small>
                </div>
              </div>

              <form onSubmit={handlePayment}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small text-muted">Full Name</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-person text-muted"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control bg-light border-start-0 py-2"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold small text-muted">Phone Number</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-telephone text-muted"></i>
                      </span>
                      <input
                        type="tel"
                        className="form-control bg-light border-start-0 py-2"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold small text-muted">Email Address</label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-envelope text-muted"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control bg-light border-start-0 py-2"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-semibold small text-muted">Complete Street Address</label>
                    <textarea
                      className="form-control bg-light py-2"
                      rows="3"
                      placeholder="House/Flat No, Apartment Name, Street Area"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg w-100 rounded-pill py-3 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm"></span>
                        <span>Initializing Razorpay...</span>
                      </>
                    ) : (
                      <>
                        <i className="bi bi-lock-fill"></i>
                        <span>Pay Securely ₹100</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

            </div>
          </div>

          {/* Right Summary: Order Details */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
              <h5 className="fw-bold mb-3 text-dark d-flex align-items-center gap-2">
                <i className="bi bi-bag-check-fill text-success"></i>
                <span>Order Summary</span>
              </h5>

              {cartItems.length > 0 ? (
                <div className="mb-3" style={{ maxHeight: "220px", overflowY: "auto" }}>
                  {cartItems.map((item) => (
                    <div key={item.cartKey || item.id} className="d-flex align-items-center justify-content-between py-2 border-bottom">
                      <div className="d-flex align-items-center gap-2">
                        <img 
                          src={item.image} 
                          alt={item.title || item.name} 
                          style={{ width: "38px", height: "38px", objectFit: "contain" }} 
                        />
                        <div>
                          <div className="fw-semibold small text-dark">{item.title || item.name}</div>
                          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                            Qty: {item.quantity} {item.unit ? `• Pack: ${item.unit}` : ''}
                          </div>
                        </div>
                      </div>
                      <span className="fw-bold text-success small">
                        ₹{(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted small mb-3">Sample Grocery Package</p>
              )}

              <div className="p-3 rounded-3 bg-light mb-3">
                <div className="d-flex justify-content-between small text-muted mb-1">
                  <span>Cart Items Value</span>
                  <span>₹{total > 0 ? total.toFixed(2) : "100.00"}</span>
                </div>
                <div className="d-flex justify-content-between small text-success mb-1">
                  <span>15-Minute Express Delivery</span>
                  <span>FREE</span>
                </div>
                <hr className="my-2" />
                <div className="d-flex justify-content-between fw-bold text-dark">
                  <span>Payable Amount</span>
                  <span className="text-success fs-5">₹100.00</span>
                </div>
              </div>

              {/* Security & Guarantees */}
              <div className="d-flex flex-column gap-2 text-muted small pt-2">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-shield-check text-success"></i>
                  <span>256-bit SSL encrypted Razorpay transaction</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-truck text-success"></i>
                  <span>Guaranteed delivery within 15 minutes</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-arrow-repeat text-success"></i>
                  <span>No-questions-asked refund policy</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
