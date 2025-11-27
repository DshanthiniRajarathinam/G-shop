import React from 'react';
import almondImg from '../assests/almond-removebg-preview.png';
import vegetableImg from '../assests/fruitbas-removebg-preview.png';
import beverageImg from '../assests/soft-drinks-removebg-preview.png';
import deliveryImg from '../assests/delivery-removebg-preview.png';
import slide1 from '../assests/slideone.jpg';
import slide2 from '../assests/secondsilde2.jpg';
import slide3 from '../assests/slidethird.jpg';

const Home = () => {
  return (
    <div className="container-fluid px-0">

      {/* Carousel */}
      <section className="mb-5">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src={slide3} className="d-block w-100" alt="Slide 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Product Cards */}
      <section className="container mb-5">
        <div className="row g-4 text-center">
          {[{
            img: almondImg, title: "Almond",
            desc: "Crunchy, nutritious almonds perfect for snacking or cooking."
          }, {
            img: vegetableImg, title: "Vegetables",
            desc: "Farm-fresh veggies straight to your kitchen. Crisp and colorful."
          }, {
            img: beverageImg, title: "Beverages",
            desc: "Stay cool with our wide range of refreshing drinks."
          }].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Section */}
      <section className="container mb-5 p-4 bg-light rounded shadow">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img src={deliveryImg} alt="Delivery" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">🚚 FAST DELIVERY</h2>
            <p className="lead">Fast, reliable, and contactless delivery to your doorstep. Enjoy quality groceries with real-time tracking.</p>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
