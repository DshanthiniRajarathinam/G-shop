import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3500);
    }
  };

  return (
    <footer className="grocery-footer pt-5 mt-5">
      
      {/* Trust Badges Strip */}
      <div className="container pb-4 border-bottom border-secondary border-opacity-25 mb-5">
        <div className="row g-4 text-center text-md-start">
          <div className="col-6 col-md-3">
            <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
              <span className="fs-1 text-success">🚚</span>
              <div>
                <h6 className="fw-bold text-white mb-0">15-Min Delivery</h6>
                <small className="text-secondary">Fastest in your city</small>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
              <span className="fs-1 text-success">🌱</span>
              <div>
                <h6 className="fw-bold text-white mb-0">100% Organic</h6>
                <small className="text-secondary">Handpicked from farms</small>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
              <span className="fs-1 text-success">🛡️</span>
              <div>
                <h6 className="fw-bold text-white mb-0">Safe & Hygienic</h6>
                <small className="text-secondary">Pesticide-free certified</small>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
              <span className="fs-1 text-success">💬</span>
              <div>
                <h6 className="fw-bold text-white mb-0">Instant Support</h6>
                <small className="text-secondary">7 AM - 11 PM Everyday</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="container pb-5">
        <div className="row gy-4">

          {/* Brand Info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div 
                className="rounded-3 d-flex align-items-center justify-content-center text-white"
                style={{ width: "38px", height: "38px", backgroundColor: "#10b981", fontSize: "1.2rem" }}
              >
                🛒
              </div>
              <h3 className="fw-bold text-white mb-0">G-Shop</h3>
            </div>
            <p className="text-secondary small lh-base mb-4" style={{ maxWidth: "330px" }}>
              Your neighborhood online grocery supermarket. Delivering farm-fresh vegetables, seasonal fruits, organic nuts and pantry essentials to your door in 15 minutes.
            </p>
            <div className="d-flex align-items-center gap-2">
              <a href="#facebook" className="footer-social-icon" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#instagram" className="footer-social-icon" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#twitter" className="footer-social-icon" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#whatsapp" className="footer-social-icon" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="col-lg-2 col-6">
            <h6 className="text-white fw-bold text-uppercase mb-3 small tracking-wider">Categories</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/bestsale?category=Fruits" className="footer-link">🍎 Fresh Fruits</Link></li>
              <li><Link to="/bestsale?category=Vegetables" className="footer-link">🥬 Farm Vegetables</Link></li>
              <li><Link to="/bestsale?category=Dry Fruits" className="footer-link">🥜 Nuts & Dry Fruits</Link></li>
              <li><Link to="/bestsale?category=Cold Beverages" className="footer-link">🥤 Cold Beverages</Link></li>
              <li><Link to="/bestsale?category=Flours" className="footer-link">🌾 Flours & Grains</Link></li>
              <li><Link to="/bestsale?category=Chocolates" className="footer-link">🍫 Chocolates & Sweets</Link></li>
              <li><Link to="/bestsale?category=Snacks" className="footer-link">🍿 Snacks & Munchies</Link></li>
              <li><Link to="/bestsale?category=Spices" className="footer-link">🌶️ Spices & Masalas</Link></li>
              <li><Link to="/promotion" className="footer-link">🏷️ Daily Combos</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="col-lg-2 col-6">
            <h6 className="text-white fw-bold text-uppercase mb-3 small tracking-wider">Customer Care</h6>
            <ul className="list-unstyled mb-0">
              <li><Link to="/contact" className="footer-link">Help & FAQs</Link></li>
              <li><Link to="/service" className="footer-link">How it Works</Link></li>
              <li><Link to="/cart" className="footer-link">Track Orders</Link></li>
              <li><Link to="/profile" className="footer-link">My Account</Link></li>
              <li><Link to="/promotion" className="footer-link">Discount Coupons</Link></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="col-lg-4 col-md-6">
            <h6 className="text-white fw-bold text-uppercase mb-3 small tracking-wider">Fresh Grocery Deals</h6>
            <p className="text-secondary small mb-3">
              Subscribe to get weekly fresh harvest alerts, coupon discounts and secret deals!
            </p>
            {subscribed ? (
              <div className="alert alert-success py-2 px-3 small rounded-pill">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="d-flex gap-2">
                <input
                  type="email"
                  className="form-control rounded-pill bg-dark border-secondary text-white py-2 px-3 small"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-success rounded-pill px-4 fw-semibold text-nowrap">
                  Subscribe
                </button>
              </form>
            )}
            <div className="mt-3">
              <small className="text-secondary" style={{ fontSize: "0.75rem" }}>
                🔒 We respect your privacy. No spam guaranteed.
              </small>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-3 border-top border-secondary border-opacity-25" style={{ backgroundColor: "#061510" }}>
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-2 small text-secondary">
          <div>
            © {new Date().getFullYear()} G-Shop Groceries Inc. All rights reserved.
          </div>
          <div className="d-flex align-items-center gap-3">
            <span>Payment Partners:</span>
            <span className="badge bg-light text-dark fw-bold">Razorpay</span>
            <span className="badge bg-light text-dark fw-bold">UPI</span>
            <span className="badge bg-light text-dark fw-bold">Visa / Master</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
