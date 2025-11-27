import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
  const cardStyle = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
    cursor: "pointer"
  };

  const handleHover = (e, enter) => {
    if (enter) {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "0 0.75rem 1.25rem rgba(0,0,0,0.15)";
      e.currentTarget.style.backgroundColor = "#f1fdf7";
    } else {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 .125rem .25rem rgba(0,0,0,.075)";
      e.currentTarget.style.backgroundColor = "white";
    }
  };

  const services = [
    { icon: "🛒", title: "Wide Product Range", desc: "From fresh produce to daily essentials – everything in one place." },
    { icon: "🚚", title: "Same-Day Delivery", desc: "Order before 5 PM and receive your groceries the very same day." },
    { icon: "📦", title: "Subscription Plans", desc: "Auto-deliver your essentials every week or month with no hassle." },
    { icon: "💳", title: "Multiple Payment Options", desc: "Pay securely via UPI, cards, net banking, or cash on delivery." },
    { icon: "🌱", title: "Freshness Guarantee", desc: "Every item is hand-picked for quality and freshness before delivery." }
  ];

  return (
    <div>
      <div className="bg-success text-white text-center py-5">
        <h1 className="fw-bold">Our Grocery Services</h1>
      </div>

      <div className="container my-4">
        <p className="lead text-center">
          Enjoy fast, fresh, and reliable grocery delivery at your fingertips. We make your shopping experience smooth, simple, and satisfying!
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {services.map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <div
                className="card h-100 border-0 shadow-sm text-center p-3"
                style={cardStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                <div className="card-body">
                  <h5 className="card-title">{item.icon} {item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/bestsale" className="btn btn-success me-3">Start Shopping</Link>
          <Link to="/contact" className="btn btn-success me-3">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
