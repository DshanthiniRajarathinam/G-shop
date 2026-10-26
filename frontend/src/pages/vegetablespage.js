import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

// Vegetables images
import img17 from '../assests/brinjal-removebg-preview.png';
import img18 from '../assests/Drumstick-removebg-preview.png';
import img19 from '../assests/pumpkin-removebg-preview.png';
import img20 from '../assests/card1.jpg';
import img21 from '../assests/potato.jpg';
import img22 from '../assests/carrot.jpg';
import img23 from '../assests/beetroot.png';
import img24 from '../assests/onion.jpg';

const VegetablesPage = () => {
  const dispatch = useDispatch();
  const [toastMessage, setToastMessage] = useState(null);

  const vegetables = [
    { id: 9, image: img17, title: "Brinjal", description: "Tender brinjal, rich, fresh, and flavorful.", price: 30, oldPrice: 40, discount: "25% OFF", rating: 4.6 },
    { id: 10, image: img18, title: "Drumstick", description: "Nutritious drumsticks, crisp and health-boosting.", price: 35, oldPrice: 45, discount: "22% OFF", rating: 4.8 },
    { id: 11, image: img19, title: "Pumpkin", description: "Sweet pumpkin, soft, vibrant, nutrient-filled.", price: 40, oldPrice: 50, discount: "20% OFF", rating: 4.5 },
    { id: 12, image: img20, title: "Tomato", description: "Juicy red tomatoes freshly harvested.", price: 25, oldPrice: 35, discount: "28% OFF", rating: 4.8 },
    { id: 13, image: img21, title: "Potato", description: "Starchy potatoes, versatile and filling.", price: 30, oldPrice: 38, discount: "21% OFF", rating: 4.7 },
    { id: 14, image: img22, title: "Carrot", description: "Crunchy carrots, sweet and vitamin-rich.", price: 40, oldPrice: 50, discount: "20% OFF", rating: 4.9 },
    { id: 15, image: img23, title: "Beetroot", description: "Earthy beetroots, iron and fiber-rich.", price: 25, oldPrice: 35, discount: "28% OFF", rating: 4.6 },
    { id: 16, image: img24, title: "Onion", description: "Pungent onions, flavor-packed and healthy.", price: 5, oldPrice: 10, discount: "50% OFF", rating: 4.5 }
  ];

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setToastMessage(`${item.title} added to your cart!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="vegetables-page" style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      
      {/* Toast Notification */}
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

      {/* Header Banner */}
      <section 
        className="text-white py-5 mb-5" 
        style={{ background: "linear-gradient(135deg, #065f46 0%, #047857 50%, #10b981 100%)" }}
      >
        <div className="container text-center">
          <span className="badge bg-white text-success fw-bold px-3 py-1 rounded-pill mb-2">
            🥬 100% FARM-DIRECT HARVEST
          </span>
          <h1 className="fw-bold display-6 mb-2">Fresh Farm Vegetables</h1>
          <p className="text-white-50 mb-0">
            Handpicked green vegetables, roots and staples harvested at sunrise and delivered in 15 mins.
          </p>
        </div>
      </section>

      {/* Vegetables Grid */}
      <div className="container pb-5">
        <div className="row g-4">
          {vegetables.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
              <div className="grocery-product-card">
                
                <span className="product-badge-discount">{item.discount}</span>
                <span className="product-badge-fresh">
                  <i className="bi bi-patch-check-fill me-1"></i>Organic
                </span>

                <div className="product-img-container">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="product-card-body">
                  <span className="product-category-tag">Fresh Vegetables</span>
                  <h5 className="product-title">{item.title}</h5>
                  <p className="product-desc">{item.description}</p>

                  <div className="product-rating">
                    <i className="bi bi-star-fill text-warning"></i>
                    <span>{item.rating}</span>
                    <span className="text-muted small">/ 5.0</span>
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
                    <i className="bi bi-cart-plus-fill"></i>
                    <span>Add to Cart</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default VegetablesPage;
