import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { deleteFromCart, updateQuantity } from '../redux/cartSlice';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price);
    return sum + numericPrice * (item.quantity || 1);
  }, 0);

  const handleQuantityChange = (id, type) => {
    dispatch(updateQuantity({ id, type }));
  };

  const handleRemove = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <div className="cart-page py-5" style={{ backgroundColor: "#f8fafc", minHeight: "85vh" }}>
      <div className="container">

        {/* Page Header */}
        <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
          <div>
            <span className="section-tag">MY BASKET</span>
            <h2 className="fw-bold mb-0">Your Grocery Cart ({cartItems.length} items)</h2>
          </div>
          <Link to="/bestsale" className="text-success fw-semibold text-decoration-none d-flex align-items-center gap-1">
            <i className="bi bi-arrow-left"></i>
            <span>Add More Groceries</span>
          </Link>
        </div>

        {cartItems.length === 0 ? (
          /* Empty State */
          <div className="card border-0 shadow-sm rounded-4 p-5 text-center my-4 bg-white">
            <div className="mb-4">
              <div 
                className="mx-auto rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "120px", height: "120px", backgroundColor: "#ecfdf5", color: "#10b981", fontSize: "3.5rem" }}
              >
                🛒
              </div>
            </div>
            <h3 className="fw-bold text-dark mb-2">Your Grocery Basket is Empty</h3>
            <p className="text-muted mx-auto" style={{ maxWidth: "420px" }}>
              Looks like you haven't added any fresh fruits, vegetables or essentials yet. 
              Fill it up with healthy, nutritious produce!
            </p>
            <div className="mt-3">
              <button
                className="btn btn-success btn-lg rounded-pill px-5 py-2 fw-bold shadow-sm"
                onClick={() => navigate('/bestsale')}
              >
                Start Shopping Now
              </button>
            </div>
          </div>
        ) : (
          /* Cart Content Layout */
          <div className="row g-4">
            
            {/* Left: Cart Items List */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white p-3 p-md-4">
                <div className="table-responsive">
                  <table className="table align-middle text-start mb-0">
                    <thead className="text-muted small text-uppercase" style={{ borderBottom: "2px solid #f1f5f9" }}>
                      <tr>
                        <th style={{ width: "45%" }}>Product</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">Subtotal</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id} style={{ borderBottom: "1px solid #f8fafc" }}>
                          
                          {/* Product Info */}
                          <td>
                            <div className="d-flex align-items-center gap-3 py-2">
                              <div 
                                className="rounded-3 p-1 d-flex align-items-center justify-content-center"
                                style={{ width: "65px", height: "65px", backgroundColor: "#f8fafc", border: "1px solid #e2e8f0" }}
                              >
                                <img
                                  src={item.image}
                                  alt={item.title || item.name}
                                  style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                                />
                              </div>
                              <div>
                                <h6 className="fw-bold mb-1 text-dark">{item.title || item.name}</h6>
                                <span className="badge bg-success-subtle text-success rounded-pill small" style={{ fontSize: "0.7rem" }}>
                                  Fresh Harvest
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Unit Price */}
                          <td className="text-center fw-semibold text-secondary">
                            ₹{item.price}/Kg
                          </td>

                          {/* Quantity Controls */}
                          <td className="text-center">
                            <div className="d-inline-flex align-items-center gap-2 bg-light p-1 rounded-pill border">
                              <button
                                className="grocery-qty-btn"
                                onClick={() => handleQuantityChange(item.id, "decrement")}
                                disabled={item.quantity <= 1}
                                title="Decrease"
                              >
                                −
                              </button>
                              <span className="fw-bold px-2">{item.quantity}</span>
                              <button
                                className="grocery-qty-btn"
                                onClick={() => handleQuantityChange(item.id, "increment")}
                                title="Increase"
                              >
                                +
                              </button>
                            </div>
                          </td>

                          {/* Subtotal */}
                          <td className="text-center fw-bold text-success">
                            ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}
                          </td>

                          {/* Remove */}
                          <td className="text-end">
                            <button
                              className="btn btn-sm btn-outline-danger rounded-circle p-2"
                              onClick={() => handleRemove(item.id)}
                              title="Remove item"
                            >
                              <i className="bi bi-trash3-fill"></i>
                            </button>
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Delivery Guarantee Strip */}
                <div className="mt-4 p-3 rounded-3 bg-light d-flex align-items-center gap-3">
                  <div className="fs-3 text-success">🚚</div>
                  <div>
                    <div className="fw-bold text-dark small">Fast Contactless Delivery Available</div>
                    <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                      Orders placed now are scheduled for 15-minute express doorstep arrival.
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Bill Details & Checkout */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 bg-white p-4">
                
                <h5 className="fw-bold mb-3 text-dark d-flex align-items-center gap-2">
                  <i className="bi bi-receipt text-success"></i>
                  <span>Bill Summary</span>
                </h5>

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Item Subtotal</span>
                  <span className="fw-semibold">₹{total.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Delivery Partner Fee</span>
                  <span className="text-success fw-semibold">
                    <del className="text-muted small me-1">₹30</del> FREE
                  </span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Freshness & Eco Bag</span>
                  <span className="text-success fw-semibold">FREE</span>
                </div>

                <hr className="my-3 text-muted" />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="fw-bold fs-5 text-dark">To Pay</span>
                  <span className="fw-bold fs-4 text-success">₹{total.toFixed(2)}</span>
                </div>

                <button
                  className="btn btn-success btn-lg w-100 rounded-pill fw-bold py-3 shadow-sm d-flex align-items-center justify-content-center gap-2"
                  onClick={() => navigate('/checkout')}
                >
                  <span>Proceed to Checkout</span>
                  <i className="bi bi-arrow-right"></i>
                </button>

                <div className="text-center mt-3">
                  <span className="text-muted small d-inline-flex align-items-center gap-1">
                    <i className="bi bi-shield-lock-fill text-success"></i>
                    100% Secure Checkout via Razorpay
                  </span>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default CartPage;
