import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useUser } from '@clerk/clerk-react';
import { addToCart } from '../redux/cartSlice';

// Asset imports
import almondImg from '../assests/almond-removebg-preview.png';
import vegetableImg from '../assests/fruitbas-removebg-preview.png';
import beverageImg from '../assests/soft-drinks-removebg-preview.png';
import flourIcon from '../assests/atta-flour.png';
import chocoIcon from '../assests/dark-chocolate.jpg';
import snackIcon from '../assests/potato-chips.jpg';
import spiceIcon from '../assests/turmeric.png';
import deliveryImg from '../assests/delivery-removebg-preview.png';
import slide1 from '../assests/s22.jpg';
import slide2 from '../assests/s33.jpg';
import slide3 from '../assests/s44.jpg';

// Featured product images
import strawberryImg from '../assests/images-removebg-preview.png';
import pineappleImg from '../assests/pineapple-removebg-preview.png';
import bananaImg from '../assests/banana.png';
import tomatoImg from '../assests/card1.jpg';
import carrotImg from '../assests/carrot.jpg';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const [toastMessage, setToastMessage] = useState(null);
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  const handleAddToCart = (item) => {
    if (!isSignedIn) {
      navigate('/login');
      return;
    }
    dispatch(addToCart(item));
    setToastMessage(`${item.title} added to your grocery basket!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2500);
  };

  // Featured groceries for home page
  const featuredGroceries = [
    {
      id: 1,
      title: "Fresh Strawberry",
      category: "Fruits",
      price: 150,
      oldPrice: 190,
      discount: "20% OFF",
      rating: 4.9,
      reviews: 142,
      description: "Hand-picked, sweet and ruby red strawberries packed with vitamins.",
      image: strawberryImg
    },
    {
      id: 2,
      title: "Sweet Pineapple",
      category: "Fruits",
      price: 40,
      oldPrice: 55,
      discount: "25% OFF",
      rating: 4.8,
      reviews: 98,
      description: "Juicy and tropical, rich in bromelain and vitamin C.",
      image: pineappleImg
    },
    {
      id: 4,
      title: "Fresh Banana",
      category: "Fruits",
      price: 80,
      oldPrice: 95,
      discount: "15% OFF",
      rating: 4.9,
      reviews: 310,
      description: "Naturally ripened, energizing and fiber-rich daily snack.",
      image: bananaImg
    },
    {
      id: 12,
      title: "Farm Tomato",
      category: "Vegetables",
      price: 25,
      oldPrice: 35,
      discount: "28% OFF",
      rating: 4.7,
      reviews: 215,
      description: "Crisp and juicy farm tomatoes, freshly harvested every morning.",
      image: tomatoImg
    },
    {
      id: 14,
      title: "Crunchy Carrot",
      category: "Vegetables",
      price: 40,
      oldPrice: 50,
      discount: "20% OFF",
      rating: 4.9,
      reviews: 180,
      description: "Sweet, crunchy and antioxidant-loaded mountain carrots.",
      image: carrotImg
    },
    {
      id: 17,
      title: "California Almonds",
      category: "Dry Fruits",
      price: 180,
      oldPrice: 220,
      discount: "18% OFF",
      rating: 5.0,
      reviews: 420,
      description: "Crunchy premium almonds, perfect for daily energy and vitality.",
      image: almondImg
    },
    {
      id: 25,
      title: "Chilled Cola Can",
      category: "Beverages",
      price: 40,
      oldPrice: 50,
      discount: "20% OFF",
      rating: 4.8,
      reviews: 265,
      description: "Classic refreshing fizzy cola, served ice cold with crisp carbonation.",
      image: beverageImg
    }
  ];

  return (
    <div className="home-grocery-page">

      {/* Floating Add To Cart Notification Toast */}
      {toastMessage && (
        <div className="grocery-toast-fixed">
          <div className="toast-success-icon">
            <i className="bi bi-cart-check-fill"></i>
          </div>
          <div className="flex-grow-1">
            <div className="fw-bold text-success small">SUCCESS!</div>
            <div className="small text-dark">{toastMessage}</div>
          </div>
          <Link to="/cart" className="btn btn-sm btn-outline-success rounded-pill px-3 py-1">
            View Cart
          </Link>
        </div>
      )}

      {/* Unauthenticated Guest Notice */}
      {!isSignedIn && (
        <div className="container-fluid px-lg-5 pt-3">
          <div className="alert bg-success-subtle border-success-subtle rounded-4 p-3 d-flex flex-wrap align-items-center justify-content-between gap-3 shadow-sm mb-0">
            <div className="d-flex align-items-center gap-3">
              <span className="fs-2">🧺</span>
              <div>
                <strong className="text-success fs-6">Welcome to G-Shop Groceries!</strong>
                <div className="small text-muted">
                  Please <strong>Register or Sign In</strong> to explore full product catalogs, fresh vegetables & fruits, and add items to your cart.
                </div>
              </div>
            </div>
            <div className="d-flex gap-2">
              <Link to="/login" className="btn btn-success rounded-pill px-4 fw-bold btn-sm shadow-sm">
                <i className="bi bi-box-arrow-in-right me-1"></i> Sign In
              </Link>
              <Link to="/register" className="btn btn-outline-success rounded-pill px-4 fw-bold btn-sm">
                Register Free
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          HERO CAROUSEL SECTION
         ========================================================================= */}
      <section className="container-fluid px-lg-5 pt-3 mb-5">
        <div className="hero-carousel-container">
          <div id="groceryHeroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4500">
            
            {/* Carousel Indicators */}
            <div className="carousel-indicators hero-carousel-indicators mb-4">
              <button type="button" data-bs-target="#groceryHeroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#groceryHeroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#groceryHeroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">

              {/* SLIDE 1: Express Fresh Harvest */}
              <div className="carousel-item active">
                <div 
                  className="hero-carousel-slide" 
                  style={{ backgroundImage: `url(${slide1})` }}
                >
                  <div className="hero-overlay"></div>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-8 hero-content">
                        <div className="hero-badge">
                          <i className="bi bi-patch-check-fill"></i> 100% FARM FRESH & ORGANIC
                        </div>
                        <h1 className="hero-title">
                          Fresh Groceries Delivered in <br />
                          <span className="hero-highlight">15 Minutes</span>
                        </h1>
                        <p className="hero-subtitle">
                          Crisp vegetables, luscious fruits, daily essentials & organic dry fruits 
                          harvested directly from local growers and brought straight to your doorstep.
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                          <Link to="/bestsale" className="hero-cta-btn">
                            <i className="bi bi-basket2-fill"></i>
                            <span>Shop Fresh Produce</span>
                          </Link>
                          <Link to="/promotion" className="hero-secondary-btn">
                            <i className="bi bi-tag-fill text-warning"></i>
                            <span>View Hot Deals</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Badge */}
                  <div className="hero-floating-card d-none d-lg-flex">
                    <div className="fs-3 text-warning">⭐</div>
                    <div>
                      <div className="fw-bold text-dark small">4.9/5 Rating</div>
                      <div className="text-muted" style={{ fontSize: "0.75rem" }}>Over 50,000+ Happy Kitchens</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLIDE 2: Seasonal Juicy Fruits */}
              <div className="carousel-item">
                <div 
                  className="hero-carousel-slide" 
                  style={{ backgroundImage: `url(${slide2})` }}
                >
                  <div className="hero-overlay"></div>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-8 hero-content">
                        <div className="hero-badge">
                          <i className="bi bi-fire"></i> SUMMER HARVEST SPECIAL
                        </div>
                        <h1 className="hero-title">
                          Up to <span className="hero-highlight">50% OFF</span> on <br />
                          Juicy Seasonal Fruits
                        </h1>
                        <p className="hero-subtitle">
                          Sun-ripened mangoes, crisp ruby apples, sweet seedless grapes and antioxidant-rich 
                          strawberries carefully checked for guaranteed sweetness.
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                          <Link to="/bestsale?category=Fruits" className="hero-cta-btn">
                            <i className="bi bi-apple"></i>
                            <span>Explore Fruits</span>
                          </Link>
                          <Link to="/bestsale" className="hero-secondary-btn">
                            <span>Browse All</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Freshness Badge */}
                  <div className="hero-floating-card d-none d-lg-flex">
                    <div className="fs-3 text-success">🌿</div>
                    <div>
                      <div className="fw-bold text-dark small">100% Pesticide Free</div>
                      <div className="text-muted" style={{ fontSize: "0.75rem" }}>Farm-to-fork purity tested</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLIDE 3: Crisp Farm Vegetables & Kitchen Staples */}
              <div className="carousel-item">
                <div 
                  className="hero-carousel-slide" 
                  style={{ backgroundImage: `url(${slide3})` }}
                >
                  <div className="hero-overlay"></div>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-8 hero-content">
                        <div className="hero-badge">
                          <i className="bi bi-bag-heart-fill"></i> HEALTHY KITCHEN STAPLES
                        </div>
                        <h1 className="hero-title">
                          Crisp Vegetables & <br />
                          <span className="hero-highlight">Nutrient Dry Fruits</span>
                        </h1>
                        <p className="hero-subtitle">
                          Daily cooking made joyful with top quality onions, potatoes, drumsticks, 
                          crispy carrots and wholesome premium California almonds.
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                          <Link to="/bestsale?category=Vegetables" className="hero-cta-btn">
                            <i className="bi bi-flower1"></i>
                            <span>Shop Vegetables</span>
                          </Link>
                          <Link to="/bestsale" className="hero-secondary-btn">
                            <span>View All Items</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Delivery Speed Badge */}
                  <div className="hero-floating-card d-none d-lg-flex">
                    <div className="fs-3 text-primary">⚡</div>
                    <div>
                      <div className="fw-bold text-dark small">15-Min Express</div>
                      <div className="text-muted" style={{ fontSize: "0.75rem" }}>Live GPS order tracking</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Carousel Controls */}
            <button className="carousel-control-prev hero-carousel-control" type="button" data-bs-target="#groceryHeroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next hero-carousel-control" type="button" data-bs-target="#groceryHeroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY VALUE HIGHLIGHTS BAR
         ========================================================================= */}
      <section className="container mb-5">
        <div className="row g-3 g-md-4">
          <div className="col-6 col-lg-3">
            <div className="feature-badge-card">
              <div className="feature-icon-wrapper icon-green">
                <i className="bi bi-lightning-charge-fill"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-1">15 Mins Delivery</h6>
                <p className="text-muted small mb-0">Fastest doorstep drop</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="feature-badge-card">
              <div className="feature-icon-wrapper icon-orange">
                <i className="bi bi-shield-check"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-1">100% Organic</h6>
                <p className="text-muted small mb-0">Hand-picked fresh daily</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="feature-badge-card">
              <div className="feature-icon-wrapper icon-amber">
                <i className="bi bi-currency-rupee"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-1">Best Prices</h6>
                <p className="text-muted small mb-0">Direct farmer rates</p>
              </div>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="feature-badge-card">
              <div className="feature-icon-wrapper icon-blue">
                <i className="bi bi-arrow-repeat"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-1">Easy Returns</h6>
                <p className="text-muted small mb-0">Instant refund guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SHOP BY POPULAR CATEGORIES
         ========================================================================= */}
      <section className="container mb-5">
        <div className="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-2">
          <div>
            <span className="section-tag">FRESH & ORGANIC</span>
            <h2 className="section-title mb-0">Explore by Category</h2>
          </div>
          <Link to="/bestsale" className="text-success fw-bold text-decoration-none d-flex align-items-center gap-1">
            <span>View All Categories</span>
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

        <div className="row g-4">
          <div className="col-6 col-md-3">
            <Link to="/bestsale?category=Fruits" className="category-card">
              <div className="category-icon-bubble" style={{ backgroundColor: "#fef2f2" }}>
                <img src={strawberryImg} alt="Fresh Fruits" />
              </div>
              <h5 className="category-title">Fresh Fruits</h5>
              <span className="category-subtitle">Apples, Berries & Citrus</span>
            </Link>
          </div>

          <div className="col-6 col-md-3">
            <Link to="/bestsale?category=Vegetables" className="category-card">
              <div className="category-icon-bubble" style={{ backgroundColor: "#f0fdf4" }}>
                <img src={vegetableImg} alt="Vegetables" />
              </div>
              <h5 className="category-title">Fresh Vegetables</h5>
              <span className="category-subtitle">Tomatoes, Greens & Root</span>
            </Link>
          </div>

          <div className="col-6 col-md-3">
            <Link to="/bestsale?category=Dry Fruits" className="category-card">
              <div className="category-icon-bubble" style={{ backgroundColor: "#fffbeb" }}>
                <img src={almondImg} alt="Nuts & Dry Fruits" />
              </div>
              <h5 className="category-title">Nuts & Dry Fruits</h5>
              <span className="category-subtitle">Almonds, Cashews & Seeds</span>
            </Link>
          </div>

          <div className="col-6 col-md-3">
            <Link to="/bestsale?category=Cold Beverages" className="category-card">
              <div className="category-icon-bubble" style={{ backgroundColor: "#eff6ff" }}>
                <img src={beverageImg} alt="Beverages" />
              </div>
              <h5 className="category-title">Cold Beverages</h5>
              <span className="category-subtitle">Juices, Sodas & Water</span>
            </Link>
          </div>

          <div className="col-6 col-md-3">
            <Link to="/bestsale?category=Flours" className="category-card">
              <div className="category-icon-bubble" style={{ backgroundColor: "#fefce8" }}>
                <img src={flourIcon} alt="Flours & Grains" />
              </div>
              <h5 className="category-title">Flours & Grains</h5>
              <span className="category-subtitle">Atta, Besan & Ragi</span>
            </Link>
          </div>

          <div className="col-6 col-md-3">
            <Link to="/bestsale?category=Chocolates" className="category-card">
              <div className="category-icon-bubble" style={{ backgroundColor: "#faf5ff" }}>
                <img src={chocoIcon} alt="Chocolates & Sweets" />
              </div>
              <h5 className="category-title">Chocolates</h5>
              <span className="category-subtitle">Dark, Milk & Truffles</span>
            </Link>
          </div>

          <div className="col-6 col-md-3">
            <Link to="/bestsale?category=Snacks" className="category-card">
              <div className="category-icon-bubble" style={{ backgroundColor: "#fff7ed" }}>
                <img src={snackIcon} alt="Snacks & Munchies" />
              </div>
              <h5 className="category-title">Snacks & Munchies</h5>
              <span className="category-subtitle">Chips, Makhana & Namkeen</span>
            </Link>
          </div>

          <div className="col-6 col-md-3">
            <Link to="/bestsale?category=Spices" className="category-card">
              <div className="category-icon-bubble" style={{ backgroundColor: "#fff1f2" }}>
                <img src={spiceIcon} alt="Spices & Masalas" />
              </div>
              <h5 className="category-title">Spices & Masalas</h5>
              <span className="category-subtitle">Turmeric, Chilli & Garam Masala</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED BEST SELLERS WITH DIRECT ADD TO CART
         ========================================================================= */}
      <section className="container mb-5">
        <div className="d-flex justify-content-between align-items-end mb-4 flex-wrap gap-2">
          <div>
            <span className="section-tag">POPULAR CHOICES</span>
            <h2 className="section-title mb-0">Today's Fresh Picks</h2>
          </div>
          <Link to="/bestsale" className="btn btn-outline-success rounded-pill px-4 fw-semibold">
            See All Products
          </Link>
        </div>

        <div className="row g-4">
          {featuredGroceries.map((item) => (
            <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
              <div className="grocery-product-card">
                
                {/* Discount Badge */}
                <span className="product-badge-discount">{item.discount}</span>
                <span className="product-badge-fresh">
                  <i className="bi bi-check2-circle me-1"></i>Organic
                </span>

                {/* Product Image */}
                <div className="product-img-container">
                  <img src={item.image} alt={item.title} />
                </div>

                {/* Product Content */}
                <div className="product-card-body">
                  <span className="product-category-tag">{item.category}</span>
                  <h4 className="product-title">{item.title}</h4>
                  <p className="product-desc">{item.description}</p>

                  <div className="product-rating">
                    <i className="bi bi-star-fill text-warning"></i>
                    <span>{item.rating}</span>
                    <span className="text-muted small">({item.reviews} reviews)</span>
                  </div>

                  <div className="product-price-row">
                    <span className="product-price-current">₹{item.price}</span>
                    <del className="text-muted small">₹{item.oldPrice}</del>
                    <span className="product-price-unit">/ Kg</span>
                  </div>

                  <button
                    className="product-add-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    <i className={`bi ${isSignedIn ? "bi-cart-plus-fill" : "bi-lock-fill"}`}></i>
                    <span>{isSignedIn ? "Add to Cart" : "Login to Add"}</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          COUPON VOUCHER STRIP
         ========================================================================= */}
      <section className="container mb-5">
        <div className="coupon-ticket">
          <div className="row align-items-center g-3">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-3">
                <div className="fs-1 text-success">🎁</div>
                <div>
                  <h4 className="fw-bold mb-1">Get ₹50 Instant Discount on Your First Order!</h4>
                  <p className="text-muted mb-0 small">
                    Use this exclusive code at checkout on grocery orders over ₹299.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div 
                className="coupon-code-pill"
                onClick={() => handleCopyCode("FRESH50")}
                title="Click to copy"
              >
                <span>CODE: FRESH50</span>
                <i className={copiedCoupon ? "bi bi-check-circle-fill text-success" : "bi bi-copy"}></i>
                {copiedCoupon && <span className="text-success small fw-bold">Copied!</span>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EXPRESS DELIVERY BANNER
         ========================================================================= */}
      <section className="container mb-5">
        <div className="delivery-promo-banner">
          <div className="row align-items-center">
            
            <div className="col-md-6 mb-4 mb-md-0 text-center">
              <img 
                src={deliveryImg} 
                alt="Express Delivery" 
                className="img-fluid delivery-float-img" 
              />
            </div>

            <div className="col-md-6">
              <span className="badge bg-warning text-dark fw-bold px-3 py-2 rounded-pill mb-3">
                ⚡ LIGHTNING FAST
              </span>
              <h2 className="display-6 fw-bold mb-3">
                Superfast Doorstep Grocery Delivery
              </h2>
              <p className="lead fs-6 text-white-50 mb-4">
                No more waiting in long supermarket queues or carrying heavy grocery bags. 
                Our electric delivery fleet arrives at your home within 15 minutes with cold-chain freshness.
              </p>

              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-shield-fill-check text-warning fs-5"></i>
                    <span className="small">100% Freshness Guarantee</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-box2-heart-fill text-warning fs-5"></i>
                    <span className="small">Zero Contact Hygienic Pack</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-geo-alt-fill text-warning fs-5"></i>
                    <span className="small">Live GPS Tracking</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-credit-card-fill text-warning fs-5"></i>
                    <span className="small">Razorpay & UPI Protected</span>
                  </div>
                </div>
              </div>

              <Link to="/bestsale" className="btn btn-warning text-dark fw-bold rounded-pill px-4 py-2 shadow">
                Order Groceries Now <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          HAPPY CUSTOMER TESTIMONIALS
         ========================================================================= */}
      <section className="container mb-5">
        <div className="text-center mb-5">
          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="section-title">Loved by 50,000+ Home Chefs</h2>
          <p className="text-muted">See what everyday shoppers say about their experience with G-Shop.</p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 p-4 border-0 shadow-sm rounded-4" style={{ backgroundColor: "#ffffff" }}>
              <div className="text-warning mb-2 fs-5">★★★★★</div>
              <p className="text-muted small fst-italic mb-3">
                "The vegetables arrived crisper than what I find at my local market! Delivered in just 14 minutes. G-Shop is now my daily morning routine."
              </p>
              <div className="d-flex align-items-center gap-3 mt-auto">
                <div className="rounded-circle bg-success-subtle text-success fw-bold p-3 fs-5">
                  PS
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Priya Sharma</h6>
                  <span className="text-muted" style={{ fontSize: "0.75rem" }}>Verified Shopper, Chennai</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 p-4 border-0 shadow-sm rounded-4" style={{ backgroundColor: "#ffffff" }}>
              <div className="text-warning mb-2 fs-5">★★★★★</div>
              <p className="text-muted small fst-italic mb-3">
                "The strawberries and pineapples were exceptionally sweet and fresh. Highly impressed by the hygienic packaging and lightning speed!"
              </p>
              <div className="d-flex align-items-center gap-3 mt-auto">
                <div className="rounded-circle bg-warning-subtle text-warning-emphasis fw-bold p-3 fs-5">
                  RK
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Rahul Kumar</h6>
                  <span className="text-muted" style={{ fontSize: "0.75rem" }}>Verified Shopper, Bangalore</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 p-4 border-0 shadow-sm rounded-4" style={{ backgroundColor: "#ffffff" }}>
              <div className="text-warning mb-2 fs-5">★★★★★</div>
              <p className="text-muted small fst-italic mb-3">
                "Voice search feature on the website is incredible! I just spoke what vegetables I wanted and placed my order seamlessly. Amazing tech!"
              </p>
              <div className="d-flex align-items-center gap-3 mt-auto">
                <div className="rounded-circle bg-info-subtle text-info-emphasis fw-bold p-3 fs-5">
                  AR
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Ananya Roy</h6>
                  <span className="text-muted" style={{ fontSize: "0.75rem" }}>Verified Shopper, Mumbai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
