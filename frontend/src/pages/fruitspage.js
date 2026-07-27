import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

//  Import only fruits images
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

  const fruits = [
    { id: 1, image: img9, title: "Strawberry", description: "Fresh strawberries, sweet and antioxidant-packed.", price: 150 },
    { id: 2, image: img10, title: "Pineapple", description: "Tropical pineapple, juicy and vitamin-rich.", price: 40 },
    { id: 3, image: img11, title: "Grapes", description: "Sweet, seedless grapes. Perfect for summer!", price: 90 },
    { id: 4, image: img12, title: "Banana", description: "Rich in energy and fiber. Ideal for daily snack.", price: 80 },
    { id: 5, image: img13, title: "Apple", description: "Crisp apples, juicy and fiber-rich.", price: 100 },
    { id: 6, image: img14, title: "Orange", description: "Zesty oranges, loaded with vitamin C.", price: 60 },
    { id: 7, image: img15, title: "Pomegranate", description: "Ruby pomegranates, antioxidant-rich gems.", price: 150 },
    { id: 8, image: img16, title: "Mango", description: "Luscious mangoes, sweet and tropical.", price: 80 }
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🍎 Fruits Collection</h2>
      <div className="row g-4">
        {fruits.map((item) => (
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

export default FruitsPage;
