import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

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

  const vegetables = [
    { id: 9, image: img17, title: "Brinjal", description: "Tender brinjal, rich, fresh, and flavorful.", price: 30 },
    { id: 10, image: img18, title: "Drumstick", description: "Nutritious drumsticks, crisp and health-boosting.", price: 35 },
    { id: 11, image: img19, title: "Pumpkin", description: "Sweet pumpkin, soft, vibrant, nutrient-filled.", price: 40 },
    { id: 12, image: img20, title: "Tomato", description: "Juicy red tomatoes freshly harvested.", price: 25 },
    { id: 13, image: img21, title: "Potato", description: "Starchy potatoes, versatile and filling.", price: 30 },
    { id: 14, image: img22, title: "Carrot", description: "Crunchy carrots, sweet and vitamin-rich.", price: 40 },
    { id: 15, image: img23, title: "Beetroot", description: "Earthy beetroots, iron and fiber-rich.", price: 25 },
    { id: 16, image: img24, title: "Onion", description: "Pungent onions, flavor-packed and healthy.", price: 5 }
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🥬 Vegetables Collection</h2>
      <div className="row g-4">
        {vegetables.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <div
              className="card h-100 shadow-sm border-0"
              style={{ transition: "all 0.3s ease", cursor: "pointer" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 123, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
              }}
            >
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ height: "180px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text small flex-grow-1">{item.description}</p>
                <p className="text-muted fw-semibold mb-2">₹{item.price}/Kg</p>
                <button
                  className="btn btn-sm btn-primary mt-auto"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VegetablesPage;
