import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

// Fruits images
import img9 from '../assests/images-removebg-preview.png';
import img10 from '../assests/pineapple-removebg-preview.png';
import img11 from '../assests/grapes-removebg-preview.png';
import img12 from '../assests/banana.png';
import img13 from '../assests/apple.jpg';
import img14 from '../assests/orange.jpg';
import img15 from '../assests/pomegranate.jpg';
import img16 from '../assests/mango.jpg';

const FruitsPage = () => {
  const dispatch = useDispatch();
  const [toastMessage, setToastMessage] = useState(null);

  const fruits = [
    { id: 1, image: img9, title: "Strawberry", description: "Fresh strawberries, sweet and antioxidant-packed.", price: 150, oldPrice: 190, discount: "20% OFF", rating: 4.9 },
    { id: 2, image: img10, title: "Pineapple", description: "Tropical pineapple, juicy and vitamin-rich.", price: 40, oldPrice: 55, discount: "27% OFF", rating: 4.8 },
    { id: 3, image: img11, title: "Grapes", description: "Sweet, seedless grapes. Perfect for summer!", price: 90, oldPrice: 110, discount: "18% OFF", rating: 4.7 },
    { id: 4, image: img12, title: "Banana", description: "Rich in energy and fiber. Ideal for daily snack.", price: 80, oldPrice: 95, discount: "15% OFF", rating: 4.9 },
    { id: 5, image: img13, title: "Apple", description: "Crisp apples, juicy and fiber-rich.", price: 100, oldPrice: 130, discount: "23% OFF", rating: 4.8 },
    { id: 6, image: img14, title: "Orange", description: "Zesty oranges, loaded with vitamin C.", price: 60, oldPrice: 75, discount: "20% OFF", rating: 4.7 },
    { id: 7, image: img15, title: "Pomegranate", description: "Ruby pomegranates, antioxidant-rich gems.", price: 150, oldPrice: 180, discount: "16% OFF", rating: 5.0 },
    { id: 8, image: img16, title: "Mango", description: "Luscious mangoes, sweet and tropical.", price: 80, oldPrice: 100, discount: "20% OFF", rating: 4.9 }
  ];

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setToastMessage(`${item.title} added to your cart!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="fruits-page" style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      
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
        style={{ background: "linear-gradient(135deg, #b91c1c 0%, #ef4444 50%, #f97316 100%)" }}
      >
        <div className="container text-center">
          <span className="badge bg-white text-danger fw-bold px-3 py-1 rounded-pill mb-2">
            🍎 100% FRESH & NATURALLY SWEET
          </span>
          <h1 className="fw-bold display-6 mb-2">Farm-Fresh Fruits</h1>
          <p className="text-white-50 mb-0">
            Hand-picked seasonal fruits filled with natural sweetness and essential nutrients.
          </p>
        </div>
      </section>

      {/* Fruits Grid */}
      <div className="container pb-5">
        <div className="row g-4">
          {fruits.map((item) => (
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
                  <span className="product-category-tag">Fresh Fruits</span>
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

export default FruitsPage;
