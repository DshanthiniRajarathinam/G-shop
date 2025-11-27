import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (category) {
      navigate(`/${category}`);  // go to /fruits, /vegetables, etc.
    }
  };

  return (
    <header className="navbar navbar-expand-lg bg-light px-4 py-3 shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">

        {/* Logo */}
        <div className="d-flex align-items-center mb-2 mb-lg-0">
          <span className="fs-3 me-2">🛒</span>
          <span className="fw-bold fs-4 text-primary">G-Shop</span>
        </div>

        {/* Search Bar */}
        <div className="d-flex align-items-center gap-2 mb-2 mb-lg-0">
          <select className="form-select" defaultValue="" onChange={handleCategoryChange}>
            <option value="" disabled>Select a category</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="nuts">Nuts</option>
            <option value="essentials">Kitchen Essentials</option>
            <option value="snacks">Snacks</option>
            <option value="beverages">Beverages</option>
          </select>
          <input type="text" className="form-control" placeholder="Search in Products" />
          <button className="btn btn-primary">Search</button>
        </div>

        {/* Navigation Links */}
        <div className="d-flex align-items-center gap-3 flex-wrap text-center">
          <Link to="/" className="text-decoration-none text-dark">Home</Link>
          <Link to="/bestsale" className="text-decoration-none text-dark">Products</Link>
          <Link to="/service" className="text-decoration-none text-dark">Service</Link>
          <Link to="/promotion" className="text-decoration-none text-dark">Promotions</Link>
          <Link to="/login" className="text-decoration-none text-dark">Login</Link>
          <Link to="/cart" className="text-decoration-none text-dark">Cart</Link>
          <Link to="/profile" className="text-dark fs-5">
            <i className="bi bi-person-circle"></i>
          </Link>
          <span className="text-muted small">📞 +91 9876543210</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
