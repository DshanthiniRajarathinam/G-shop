import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

import img9 from '../assests/images-removebg-preview.png';
import img10 from '../assests/pineapple-removebg-preview.png';
import img11 from '../assests/grapes-removebg-preview.png';
import img12 from '../assests/banana.png';
import img13 from '../assests/apple.jpg';
import img14 from '../assests/orange.jpg';
import img15 from '../assests/pomegranate.jpg';
import img16 from '../assests/mango.jpg';
import img17 from '../assests/brinjal-removebg-preview.png';
import img18 from '../assests/Drumstick-removebg-preview.png';
import img19 from '../assests/pumpkin-removebg-preview.png';
import img20 from '../assests/card1.jpg';
import img21 from '../assests/potato.jpg';
import img22 from '../assests/carrot.jpg';
import img23 from '../assests/beetroot.png';
import img24 from '../assests/onion.jpg';

const Bestsale = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("query") || "";

  const [searchTerm, setSearchTerm] = useState(queryParam);
  const [activeCategory, setActiveCategory] = useState("All");
  const [recording, setRecording] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    if (queryParam) {
      setSearchTerm(queryParam);
    }
  }, [queryParam]);

  const sections = {
    Fruits: [
      { id: 1, image: img9, title: "Strawberry", description: "Fresh strawberries, sweet and antioxidant-packed.", price: 150, rating: 4.9, oldPrice: 190, discount: "20% OFF" },
      { id: 2, image: img10, title: "Pineapple", description: "Tropical pineapple, juicy and vitamin-rich.", price: 40, rating: 4.8, oldPrice: 55, discount: "27% OFF" },
      { id: 3, image: img11, title: "Grapes", description: "Sweet, seedless grapes. Perfect for summer!", price: 90, rating: 4.7, oldPrice: 110, discount: "18% OFF" },
      { id: 4, image: img12, title: "Banana", description: "Rich in energy and fiber. Ideal for daily snack.", price: 80, rating: 4.9, oldPrice: 95, discount: "15% OFF" },
      { id: 5, image: img13, title: "Apple", description: "Crisp apples, juicy and fiber-rich.", price: 100, rating: 4.8, oldPrice: 130, discount: "23% OFF" },
      { id: 6, image: img14, title: "Orange", description: "Zesty oranges, loaded with vitamin C.", price: 60, rating: 4.7, oldPrice: 75, discount: "20% OFF" },
      { id: 7, image: img15, title: "Pomegranate", description: "Ruby pomegranates, antioxidant-rich gems.", price: 150, rating: 5.0, oldPrice: 180, discount: "16% OFF" },
      { id: 8, image: img16, title: "Mango", description: "Luscious mangoes, sweet and tropical.", price: 80, rating: 4.9, oldPrice: 100, discount: "20% OFF" }
    ],
    Vegetables: [
      { id: 9, image: img17, title: "Brinjal", description: "Tender brinjal, rich, fresh, and flavorful.", price: 30, rating: 4.6, oldPrice: 40, discount: "25% OFF" },
      { id: 10, image: img18, title: "Drumstick", description: "Nutritious drumsticks, crisp and health-boosting.", price: 35, rating: 4.8, oldPrice: 45, discount: "22% OFF" },
      { id: 11, image: img19, title: "Pumpkin", description: "Sweet pumpkin, soft, vibrant, nutrient-filled.", price: 40, rating: 4.5, oldPrice: 50, discount: "20% OFF" },
      { id: 12, image: img20, title: "Tomato", description: "Juicy red tomatoes freshly harvested.", price: 25, rating: 4.8, oldPrice: 35, discount: "28% OFF" },
      { id: 13, image: img21, title: "Potato", description: "Starchy potatoes, versatile and filling.", price: 30, rating: 4.7, oldPrice: 38, discount: "21% OFF" },
      { id: 14, image: img22, title: "Carrot", description: "Crunchy carrots, sweet and vitamin-rich.", price: 40, rating: 4.9, oldPrice: 50, discount: "20% OFF" },
      { id: 15, image: img23, title: "Beetroot", description: "Earthy beetroots, iron and fiber-rich.", price: 25, rating: 4.6, oldPrice: 35, discount: "28% OFF" },
      { id: 16, image: img24, title: "Onion", description: "Pungent onions, flavor-packed and healthy.", price: 5, rating: 4.5, oldPrice: 10, discount: "50% OFF" }
    ],
  };

  const allProducts = Object.values(sections).flat();

  // Filter based on search term and active tab
  const getFilteredItems = () => {
    let list = allProducts;
    if (activeCategory === "Fruits") {
      list = sections.Fruits;
    } else if (activeCategory === "Vegetables") {
      list = sections.Vegetables;
    }

    if (!searchTerm.trim()) {
      return list;
    }

    return list.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setToastMessage(`${item.title} added to your basket!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // --- Voice search with AssemblyAI (Backend Integration Preserved 100%) ---
  const startRecording = async () => {
    setRecording(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      let chunks = [];

      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);

      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        const file = new File([blob], "voice.webm", { type: "audio/webm" });
        await sendToAssemblyAI(file);
        setRecording(false);
      };

      mediaRecorder.start();
      // Stop after 5 seconds
      setTimeout(() => mediaRecorder.stop(), 5000);
    } catch (err) {
      console.error("Microphone access error:", err);
      alert("Microphone permission denied or not supported.");
      setRecording(false);
    }
  };

  const sendToAssemblyAI = async (file) => {
    try {
      const formData = new FormData();
      formData.append("audio", file);

      const response = await fetch(
        "https://g-shop-backend-atpy.onrender.com/api/voice-search",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Voice search failed");
      }

      setSearchTerm(data.text || "");
    } catch (error) {
      console.error("Voice search error:", error);
      alert("Voice search failed. Please try again.");
    } finally {
      setRecording(false);
    }
  };

  const itemsToDisplay = getFilteredItems();

  return (
    <div className="bestsale-page" style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="grocery-toast-fixed">
          <div className="toast-success-icon">
            <i className="bi bi-cart-check-fill"></i>
          </div>
          <div className="flex-grow-1">
            <div className="fw-bold text-success small">BASKET UPDATED</div>
            <div className="small text-dark">{toastMessage}</div>
          </div>
          <Link to="/cart" className="btn btn-sm btn-outline-success rounded-pill px-3 py-1">
            View Cart
          </Link>
        </div>
      )}

      {/* Hero Header Banner */}
      <section className="bg-success text-white py-4 py-lg-5 mb-4 position-relative" style={{ background: "linear-gradient(135deg, #065f46 0%, #10b981 100%)" }}>
        <div className="container text-center">
          <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill mb-2">
            🌱 100% FARM FRESH MARKETPLACE
          </span>
          <h1 className="fw-bold display-6 mb-2">Farm-Fresh Fruits & Vegetables</h1>
          <p className="text-white-50 mb-0 max-w-lg mx-auto">
            Directly from trusted local farms. Clean, hygienic, and delivered in 15 minutes.
          </p>
        </div>
      </section>

      {/* Search & Voice Filter Bar */}
      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 p-2">
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-search text-muted ms-3 fs-5"></i>
                <input
                  type="text"
                  className="form-control border-0 shadow-none fs-6"
                  placeholder="Search for tomatoes, apples, bananas, carrots..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    className="btn btn-sm btn-light rounded-circle text-muted"
                    onClick={() => setSearchTerm("")}
                    title="Clear search"
                  >
                    ✕
                  </button>
                )}
                <button
                  className={`btn rounded-pill px-3 py-2 d-flex align-items-center gap-2 ${
                    recording ? "btn-danger" : "btn-outline-success"
                  }`}
                  onClick={startRecording}
                  title="Voice Search"
                >
                  <span className={recording ? "spinner-grow spinner-grow-sm" : ""}></span>
                  <i className="bi bi-mic-fill"></i>
                  <span className="d-none d-sm-inline">
                    {recording ? "Listening..." : "Voice Search"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Filter Category Pills */}
        <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">
          {["All", "Fruits", "Vegetables"].map((cat) => (
            <button
              key={cat}
              className={`btn rounded-pill px-4 py-2 fw-semibold ${
                activeCategory === cat
                  ? "btn-success shadow-sm"
                  : "btn-outline-secondary bg-white border-0 shadow-sm"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === "Fruits" ? "🍎 " : cat === "Vegetables" ? "🥬 " : "🧺 "}
              {cat} ({cat === "All" ? allProducts.length : sections[cat].length})
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container pb-5">
        {itemsToDisplay.length === 0 ? (
          <div className="text-center py-5">
            <div className="fs-1 mb-3">🔍</div>
            <h4 className="fw-bold text-dark">No Groceries Found</h4>
            <p className="text-muted">
              We couldn't find anything matching "<strong>{searchTerm}</strong>".
            </p>
            <button
              className="btn btn-outline-success rounded-pill px-4"
              onClick={() => setSearchTerm("")}
            >
              Clear Search Filter
            </button>
          </div>
        ) : (
          <div className="row g-4">
            {itemsToDisplay.map((item) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
                <div className="grocery-product-card">
                  
                  {item.discount && (
                    <span className="product-badge-discount">{item.discount}</span>
                  )}
                  <span className="product-badge-fresh">
                    <i className="bi bi-patch-check-fill me-1"></i>Fresh
                  </span>

                  <div className="product-img-container">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="product-card-body">
                    <span className="product-category-tag">
                      {item.id <= 8 ? "Fruits" : "Vegetables"}
                    </span>
                    <h5 className="product-title">{item.title}</h5>
                    <p className="product-desc">{item.description}</p>

                    <div className="product-rating">
                      <i className="bi bi-star-fill text-warning"></i>
                      <span>{item.rating || "4.8"}</span>
                      <span className="text-muted small">(Freshly Harvested)</span>
                    </div>

                    <div className="product-price-row">
                      <span className="product-price-current">₹{item.price}</span>
                      {item.oldPrice && (
                        <del className="text-muted small">₹{item.oldPrice}</del>
                      )}
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
        )}
      </div>

    </div>
  );
};

export default Bestsale;
