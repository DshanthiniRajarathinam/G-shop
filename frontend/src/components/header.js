import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const totalCartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "";

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (!category || category === "All") {
      navigate('/bestsale');
    } else if (category === "promotion") {
      navigate('/promotion');
    } else {
      navigate(`/bestsale?category=${encodeURIComponent(category)}`);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchTerm.trim()) {
      params.set("query", searchTerm.trim());
    }
    if (currentCategory && currentCategory !== "All") {
      params.set("category", currentCategory);
    }
    const qs = params.toString();
    navigate(qs ? `/bestsale?${qs}` : '/bestsale');
  };

  return (
    <>
      {/* Top Running Announcement Screen Bar */}
      <div className="top-notice-bar" title="Hover to pause">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            
            {/* Running Text Track 1 */}
            <div className="marquee-group">
              <span className="badge-live">⚡ EXPRESS</span>
              <span className="fw-bold">Fast 15-Minute Grocery Delivery to your doorstep!</span>
              <span className="marquee-divider">|</span>
              <span className="fw-semibold">🌿 100% Organic & Farm Fresh Guarantee</span>
              <span className="marquee-divider">|</span>
              <span className="badge-live">⚡ EXPRESS</span>
              <span className="fw-bold">Fast 15-Minute Grocery Delivery to your doorstep!</span>
              <span className="marquee-divider">|</span>
              <span className="fw-semibold">🌿 100% Organic & Farm Fresh Guarantee</span>
              <span className="marquee-divider">|</span>
              <span className="badge-live">⚡ EXPRESS</span>
              <span className="fw-bold">Fast 15-Minute Grocery Delivery to your doorstep!</span>
              <span className="marquee-divider">|</span>
              <span className="fw-semibold">🌿 100% Organic & Farm Fresh Guarantee</span>
              <span className="marquee-divider">|</span>
            </div>

            {/* Running Text Track 2 (Duplicate for Seamless Infinite Loop) */}
            <div className="marquee-group" aria-hidden="true">
              <span className="badge-live">⚡ EXPRESS</span>
              <span className="fw-bold">Fast 15-Minute Grocery Delivery to your doorstep!</span>
              <span className="marquee-divider">|</span>
              <span className="fw-semibold">🌿 100% Organic & Farm Fresh Guarantee</span>
              <span className="marquee-divider">|</span>
              <span className="badge-live">⚡ EXPRESS</span>
              <span className="fw-bold">Fast 15-Minute Grocery Delivery to your doorstep!</span>
              <span className="marquee-divider">|</span>
              <span className="fw-semibold">🌿 100% Organic & Farm Fresh Guarantee</span>
              <span className="marquee-divider">|</span>
              <span className="badge-live">⚡ EXPRESS</span>
              <span className="fw-bold">Fast 15-Minute Grocery Delivery to your doorstep!</span>
              <span className="marquee-divider">|</span>
              <span className="fw-semibold">🌿 100% Organic & Farm Fresh Guarantee</span>
              <span className="marquee-divider">|</span>
            </div>

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
              <form onSubmit={handleSearch} className="grocery-search-wrapper">
                <select 
                  className="grocery-search-select d-none d-sm-block" 
                  value={currentCategory} 
                  onChange={handleCategoryChange}
                  aria-label="Select Category"
                >
                  <option value="">All Categories</option>
                  <option value="Fruits">🍎 Fruits</option>
                  <option value="Vegetables">🥬 Vegetables</option>
                  <option value="Dry Fruits">🥜 Nuts & Dry Fruits</option>
                  <option value="Cold Beverages">🥤 Cold Beverages</option>
                  <option value="Flours">🌾 Flours & Grains</option>
                  <option value="Chocolates">🍫 Chocolates & Sweets</option>
                  <option value="Snacks">🍿 Snacks & Munchies</option>
                  <option value="Spices">🌶️ Spices & Masalas</option>
                  <option value="promotion">🎁 Promotions</option>
                </select>

                <div className="grocery-search-input-wrap">
                  <i className="bi bi-search grocery-search-icon"></i>
                  <input
                    type="text"
                    className="grocery-search-input"
                    placeholder="Search ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      className="grocery-search-clear-btn"
                      onClick={() => setSearchTerm('')}
                      title="Clear search"
                    >
                      ✕
                    </button>
                  )}
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
                  <i className="bi bi-person-circle fs-5 text-success"></i>
                  <span>Login</span>
                </Link>
              </SignedOut>

              <SignedIn>
                <div className="d-flex align-items-center ms-1" title="Account & Profile">
                  <UserButton afterSignOutUrl="/login">
                    <UserButton.MenuItems>
                      <UserButton.Link
                        label="My Profile"
                        labelIcon={<i className="bi bi-person-circle text-success fs-6"></i>}
                        href="/profile"
                      />
                    </UserButton.MenuItems>
                  </UserButton>
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
