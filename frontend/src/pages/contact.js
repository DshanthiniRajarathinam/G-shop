import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">📞 Contact Us</h2>
        <p className="text-muted">
          We'd love to hear from you! Please fill out the form or reach us via the details below.
        </p>
      </div>

      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="card contact-card border-0">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-4 text-primary">Send us a Message</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Type your message..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-lg-5">
          <div className="card contact-card border-0 h-100">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-4 text-primary">Get in Touch</h5>

              <div className="mb-4">
                <h6 className="fw-semibold">🏠 Address</h6>
                <p className="text-muted mb-0">123 Grocery Street, Chennai, India</p>
              </div>

              <div className="mb-4">
                <h6 className="fw-semibold">📧 Email</h6>
                <p className="text-muted mb-0">support@gshop.com</p>
              </div>

              <div>
                <h6 className="fw-semibold">📱 Phone</h6>
                <p className="text-muted mb-0">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Style */}
      <style>{`
        .contact-card {
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
          transition: all 0.3s ease-in-out;
        }
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 18px rgba(0, 123, 255, 0.4);
        }
      `}</style>
    </div>
  );
};

export default Contact;
