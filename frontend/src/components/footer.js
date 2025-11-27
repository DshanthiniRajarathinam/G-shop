import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">

          {/* GSHOP Brand */}
          <div className="col">
            <h3 className="text-uppercase">Gshop</h3>
            <p>Best Groceries app ever. Pick your desired groceries from the menu.</p>
          </div>

          {/* Support Section */}
          <div className="col">
            <h5 className="text-uppercase mb-3">Support</h5>
            <ul className="list-unstyled">
              <li>Account</li>
              <li>Support Center</li>
              <li>Feedback</li>
              <li>Accessibility</li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="col">
            <h5 className="text-uppercase mb-3">Useful Links</h5>
            <ul className="list-unstyled">
              <li>Payment & Tax</li>
              <li>Term of Service</li>
              <li>Privacy Policy</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Our Menu Section */}
          <div className="col">
            <h5 className="text-uppercase mb-3">Our Menu</h5>
            <ul className="list-unstyled">
              <li>Top Selling</li>
              <li>Categories</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
