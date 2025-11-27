import React from 'react';
import { Link } from 'react-router-dom';

const Promotion = () => {
  const promotions = [
    { icon: "🔥", title: "20% Off on Fresh Fruits", desc: "Get the juiciest apples, bananas, and more at a discounted price.", code: "FRUIT20" },
    { icon: "📦", title: "Free Delivery", desc: "On all orders over ₹499. Save on shipping costs now!", code: "Auto Applied" },
    { icon: "🥦", title: "Veggie Combos", desc: "Buy mixed vegetables combo and save ₹50 instantly.", code: "VEG50" },
    { icon: "💳", title: "Pay with UPI", desc: "Pay using UPI and get 10% cashback up to ₹100.", code: "PAYUPI" },
    { icon: "🎁", title: "Invite & Earn", desc: "Refer friends and earn ₹100 grocery credits on each sign-up.", code: "No Code Needed" },
    { icon: "⏳", title: "Flash Sale: Today Only", desc: "Flat 25% off on all snacks and beverages. Hurry!", code: "SNACK25" }
  ];

  // Inline card style
  const cardStyle = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
    cursor: "pointer"
  };

  const handleHover = (e, enter) => {
    if (enter) {
      e.currentTarget.style.transform = "translateY(-6px)";
      e.currentTarget.style.boxShadow = "0 1rem 1.5rem rgba(0,0,0,0.15)";
      e.currentTarget.style.backgroundColor = "#f1fdf7";
    } else {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 .125rem .25rem rgba(0,0,0,.075)";
      e.currentTarget.style.backgroundColor = "white";
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-success text-white text-center py-5">
        <h1 className="fw-bold">🎉 Special Grocery Promotions</h1>
        <p className="lead">Don’t miss out on our latest discounts and deals!</p>
      </div>

      {/* Cards */}
      <div className="container py-5">
        <div className="row g-4">
          {promotions.map((promo, idx) => (
            <div className="col-md-4" key={idx}>
              <div
                className="card p-4 border-0 shadow-sm text-center h-100"
                style={cardStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                <h5 className="text-success fw-bold">{promo.icon} {promo.title}</h5>
                <p>{promo.desc}</p>
                <span className="badge bg-success-subtle text-success px-3 py-2 mt-2">
                  {promo.code === "Auto Applied" || promo.code === "No Code Needed"
                    ? promo.code
                    : <>Use Code: <strong>{promo.code}</strong></>}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <Link to="/bestsale" className="btn btn-success btn-lg px-4">Start Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
