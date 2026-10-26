import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Promotion = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const promotions = [
    { icon: "🍎", title: "Flat 20% Off on Fruits", desc: "Enjoy delicious farm-picked strawberries, mangoes and crisp apples.", code: "FRUIT20", tag: "Seasonal Deal" },
    { icon: "⚡", title: "Free 15-Min Delivery", desc: "Available on all grocery orders over ₹499. No hidden charges.", code: "FREEDEL", tag: "Express" },
    { icon: "🥦", title: "Veggie Combos Special", desc: "Buy mixed kitchen vegetable bundle and save ₹50 instantly.", code: "VEG50", tag: "Combo Pack" },
    { icon: "💳", title: "10% UPI Cashback", desc: "Pay with any UPI app (GPay/PhonePe/Paytm) & get instant cashback.", code: "UPISAVE", tag: "Payment Offer" },
    { icon: "🎁", title: "Invite Neighbours & Friends", desc: "Share your grocery link and earn ₹100 credit on their first order.", code: "REFER100", tag: "Referral" },
    { icon: "🥜", title: "25% Off Dry Fruits", desc: "Crunchy California almonds, hazelnuts and nuts at wholesale prices.", code: "NUTS25", tag: "Flash Sale" }
  ];

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="promotions-page" style={{ backgroundColor: "#f8fafc", minHeight: "85vh" }}>
      
      {/* Hero Header */}
      <section 
        className="text-white text-center py-5 mb-5" 
        style={{ background: "linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)" }}
      >
        <div className="container">
          <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill mb-2">
            🏷️ EXCLUSIVE OFFERS & DEALS
          </span>
          <h1 className="fw-bold display-5 mb-2">Grocery Discounts & Coupons</h1>
          <p className="text-white-50 mb-0">
            Apply these coupon codes at checkout to unlock instant discounts and free deliveries.
          </p>
        </div>
      </section>

      {/* Promotion Cards */}
      <div className="container pb-5">
        <div className="row g-4">
          {promotions.map((promo, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={idx}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white position-relative" style={{ transition: "all 0.3s ease" }}>
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fs-1">{promo.icon}</span>
                  <span className="badge bg-success-subtle text-success rounded-pill px-3 py-1 fw-bold">
                    {promo.tag}
                  </span>
                </div>

                <h5 className="fw-bold text-dark mb-2">{promo.title}</h5>
                <p className="text-muted small mb-4">{promo.desc}</p>

                <div className="mt-auto pt-2">
                  <div 
                    className="p-2 rounded-3 d-flex align-items-center justify-content-between"
                    style={{ backgroundColor: "#f1fdf7", border: "1px dashed #10b981", cursor: "pointer" }}
                    onClick={() => handleCopy(promo.code)}
                    title="Click to copy coupon code"
                  >
                    <span className="fw-bold font-monospace text-success ms-2">
                      {promo.code}
                    </span>
                    <button 
                      className="btn btn-sm btn-success rounded-pill px-3 py-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy(promo.code);
                      }}
                    >
                      {copiedCode === promo.code ? "Copied! ✓" : "Copy Code"}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="text-center mt-5">
          <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white text-center mx-auto" style={{ maxWidth: "700px" }}>
            <h3 className="fw-bold mb-2">Ready to save on fresh groceries?</h3>
            <p className="text-muted mb-4">Start adding your favorite fruits and vegetables now!</p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="/bestsale" className="btn btn-success btn-lg rounded-pill px-4 fw-bold">
                Start Shopping
              </Link>
              <Link to="/fruits" className="btn btn-outline-success btn-lg rounded-pill px-4 fw-bold">
                Browse Fruits
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Promotion;
