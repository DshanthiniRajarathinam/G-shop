import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
  const services = [
    { 
      icon: "⚡", 
      title: "15-Minute Express Delivery", 
      desc: "Our localized dark-stores and dedicated electric bike fleet deliver within 15 minutes across the city." 
    },
    { 
      icon: "🌱", 
      title: "100% Farm-Direct Sourcing", 
      desc: "Fresh vegetables and fruits harvested at dawn from local certified farms, eliminating intermediaries." 
    },
    { 
      icon: "❄️", 
      title: "Cold-Chain Freshness", 
      desc: "Temperature-monitored storage keeps your produce crisp, juicy and packed with natural vitamins." 
    },
    { 
      icon: "🔒", 
      title: "Safe & Contactless Packaging", 
      desc: "Food-grade sanitized packaging with zero direct touch from harvest to your kitchen doorstep." 
    },
    { 
      icon: "💳", 
      title: "Seamless Razorpay & UPI", 
      desc: "Pay securely with any UPI app, debit/credit cards, net banking with instant payment confirmations." 
    },
    { 
      icon: "🔄", 
      title: "Instant Refund Guarantee", 
      desc: "Not 100% satisfied with an item? Get an instant replacement or refund with zero questions asked." 
    }
  ];

  return (
    <div className="services-page" style={{ backgroundColor: "#f8fafc", minHeight: "85vh" }}>
      
      {/* Banner */}
      <section 
        className="text-white text-center py-5 mb-5" 
        style={{ background: "linear-gradient(135deg, #065f46 0%, #047857 50%, #10b981 100%)" }}
      >
        <div className="container">
          <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill mb-2">
            ⭐ WHY SHOP WITH G-SHOP
          </span>
          <h1 className="fw-bold display-5 mb-2">Our Premium Grocery Services</h1>
          <p className="text-white-50 mb-0">
            Engineered to bring the freshest groceries to your home with the speed of thought.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="container pb-5">
        <div className="row g-4">
          {services.map((srv, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={idx}>
              <div 
                className="card h-100 border-0 shadow-sm rounded-4 p-4 bg-white"
                style={{ transition: "all 0.3s ease" }}
              >
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px", backgroundColor: "#ecfdf5", fontSize: "1.8rem" }}
                >
                  {srv.icon}
                </div>
                <h5 className="fw-bold text-dark mb-2">{srv.title}</h5>
                <p className="text-muted small mb-0 lh-base">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-5">
          <Link to="/bestsale" className="btn btn-success btn-lg rounded-pill px-4 me-3 fw-bold">
            Start Shopping Groceries
          </Link>
          <Link to="/contact" className="btn btn-outline-success btn-lg rounded-pill px-4 fw-bold">
            Contact Support
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Service;
