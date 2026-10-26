import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <div className="contact-page py-5" style={{ backgroundColor: "#f8fafc", minHeight: "85vh" }}>
      <div className="container">
        
        {/* Heading */}
        <div className="text-center mb-5">
          <span className="section-tag">24/7 SUPPORT</span>
          <h2 className="section-title mb-2">We'd Love to Hear From You</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "550px" }}>
            Have a question about your grocery delivery, seasonal harvest or an ongoing offer? 
            Our friendly grocery team is here to assist you anytime.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          
          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
              <h4 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                <i className="bi bi-chat-square-dots-fill text-success"></i>
                <span>Send Us a Message</span>
              </h4>

              {submitted && (
                <div className="alert alert-success rounded-4 d-flex align-items-center gap-2 mb-4" role="alert">
                  <i className="bi bi-check-circle-fill fs-5"></i>
                  <div>Thank you! Your message has been received. Our grocery support team will reply within 2 hours.</div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold small text-muted">Your Name</label>
                  <input
                    type="text"
                    className="form-control bg-light py-2 rounded-3"
                    id="name"
                    placeholder="e.g. Anita Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold small text-muted">Email Address</label>
                  <input
                    type="email"
                    className="form-control bg-light py-2 rounded-3"
                    id="email"
                    placeholder="anita@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold small text-muted">Message or Query</label>
                  <textarea
                    className="form-control bg-light py-2 rounded-3"
                    id="message"
                    rows="4"
                    placeholder="Tell us what you need help with..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-success btn-lg w-100 rounded-pill fw-bold shadow-sm">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details & Dark Store Hubs */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white h-100">
              <h4 className="fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt-fill text-success"></i>
                <span>Customer Care Hub</span>
              </h4>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-success flex-shrink-0"
                  style={{ width: "45px", height: "45px", backgroundColor: "#ecfdf5" }}
                >
                  <i className="bi bi-building fs-5"></i>
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1">Central Fulfillment Hub</h6>
                  <p className="text-muted small mb-0">123 Grocery Lane, Anna Nagar, Chennai, Tamil Nadu 600040</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-success flex-shrink-0"
                  style={{ width: "45px", height: "45px", backgroundColor: "#ecfdf5" }}
                >
                  <i className="bi bi-envelope-fill fs-5"></i>
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1">Email Support</h6>
                  <p className="text-muted small mb-0">support@gshop.com</p>
                  <p className="text-muted small mb-0">orders@gshop.com</p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div 
                  className="rounded-circle d-flex align-items-center justify-content-center text-success flex-shrink-0"
                  style={{ width: "45px", height: "45px", backgroundColor: "#ecfdf5" }}
                >
                  <i className="bi bi-telephone-fill fs-5"></i>
                </div>
                <div>
                  <h6 className="fw-bold text-dark mb-1">Delivery Hotline</h6>
                  <p className="text-muted small mb-0">+91 98765 43210 (Toll Free)</p>
                  <span className="badge bg-success-subtle text-success small mt-1">
                    ⚡ Available 6:00 AM – 11:30 PM
                  </span>
                </div>
              </div>

              <div className="mt-auto p-3 rounded-3 bg-light">
                <div className="fw-bold text-dark small mb-1">15-Minute Delivery Areas</div>
                <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                  Serving Anna Nagar, T. Nagar, Adyar, Velachery, Kilpauk, and 15+ central zones.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
