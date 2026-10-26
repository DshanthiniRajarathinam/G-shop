import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const totalCartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (category) {
      navigate(`/${category}`);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/bestsale?query=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/bestsale');
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-notice-bar d-none d-md-block">
        <div className="container-fluid px-lg-5 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <span className="badge-live">⚡ EXPRESS</span>
            <span>Fast 15-Minute Grocery Delivery to your doorstep!</span>
            <span className="text-white-50">|</span>
            <span className="text-white-50">100% Organic & Farm Fresh Guarantee</span>
          </div>
          <div className="d-flex align-items-center gap-4">
            <span className="d-flex align-items-center gap-1">
              <i className="bi bi-geo-alt-fill text-warning"></i>
              <span>Deliver to: <strong>Chennai, 600001</strong></span>
            </span>
            <span className="d-flex align-items-center gap-1">
              <i className="bi bi-telephone-fill"></i>
              <span>+91 98765 43210</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Grocery Navbar */}
      <header className="grocery-navbar py-2 px-3 px-lg-4 shadow-sm">
        <div className="container-fluid px-lg-4">
          <div className="row align-items-center gy-2">
            
            {/* Brand Logo */}
            <div className="col-auto d-flex align-items-center">
              <Link to="/" className="grocery-logo">
                <div className="grocery-logo-icon">
                  <i className="bi bi-basket2-fill"></i>
                </div>
                <div>
                  <div className="grocery-logo-text">G-Shop</div>
                  <div className="grocery-logo-sub">Fresh Groceries</div>
                </div>
              </Link>
            </div>

            {/* Quick Delivery Pill (Desktop) */}
            <div className="col-auto d-none d-xl-flex">
              <div className="delivery-location-pill">
                <i className="bi bi-clock-history text-success"></i>
                <span>15 Mins Delivery</span>
              </div>
            </div>

            {/* Grocery Search Bar */}
            <div className="col-12 col-md flex-grow-1 order-3 order-md-2">
              <form onSubmit={handleSearch} className="grocery-search-wrapper d-flex align-items-center">
                <select 
                  className="grocery-search-select d-none d-sm-block" 
                  defaultValue="" 
                  onChange={handleCategoryChange}
                  aria-label="Select Category"
                >
                  <option value="">All Categories</option>
                  <option value="fruits">🍎 Fruits</option>
                  <option value="vegetables">🥬 Vegetables</option>
                  <option value="bestsale">⭐ All Products</option>
                  <option value="promotion">🎁 Promotions</option>
                </select>
                <div className="d-flex align-items-center flex-grow-1 position-relative">
                  <i className="bi bi-search text-muted ms-3"></i>
                  <input
                    type="text"
                    className="form-control grocery-search-input"
                    placeholder="Search fresh vegetables, fruits, dry fruits..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button type="submit" className="grocery-search-btn">
                  <span>Search</span>
                </button>
              </form>
            </div>

            {/* Navigation & Cart Actions */}
            <div className="col-auto order-2 order-md-3 ms-auto d-flex align-items-center gap-2 gap-lg-3">
              <nav className="d-none d-lg-flex align-items-center gap-1">
                <Link to="/" className="nav-link-grocery">Home</Link>
                <Link to="/bestsale" className="nav-link-grocery">Products</Link>
                <Link to="/promotion" className="nav-link-grocery">Deals</Link>
                <Link to="/service" className="nav-link-grocery">Services</Link>
                <Link to="/contact" className="nav-link-grocery">Contact</Link>
              </nav>

              {/* Clerk Authentication Links */}
              <SignedOut>
                <Link 
                  to="/login" 
                  className="nav-link-grocery d-flex align-items-center gap-1"
                  title="Login with Clerk"
                >
                  <i className="bi bi-box-arrow-in-right fs-5 text-success"></i>
                  <span>Login</span>
                </Link>
              </SignedOut>

              <SignedIn>
                <div className="d-flex align-items-center gap-2">
                  <Link 
                    to="/profile" 
                    className="nav-link-grocery d-flex align-items-center gap-1"
                    title="My Profile"
                  >
                    <i className="bi bi-person-circle fs-5 text-success"></i>
                    <span className="d-none d-xl-inline">Profile</span>
                  </Link>
                  <UserButton afterSignOutUrl="/login" />
                </div>
              </SignedIn>

              {/* Animated Cart Button with Badge */}
              <Link to="/cart" className="cart-icon-btn">
                <i className="bi bi-cart3 fs-5"></i>
                <span className="d-none d-sm-inline">Cart</span>
                {totalCartCount > 0 && (
                  <span className="cart-badge-count">{totalCartCount}</span>
                )}
              </Link>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
