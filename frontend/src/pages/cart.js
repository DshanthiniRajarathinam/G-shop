import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteFromCart, updateQuantity } from '../redux/cartSlice';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price);
    return sum + numericPrice * item.quantity;
  }, 0);

  const handleQuantityChange = (id, type) => {
    dispatch(updateQuantity({ id, type }));
  };

  const handleRemove = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1 d-flex flex-column">
       

        {cartItems.length === 0 ? (
          <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
              alt="Empty Cart"
              style={{ width: "150px", opacity: 0.8 }}
              className="mb-3"
            />
            <h3 className="fw-bold">
              Your Cart is Empty 🛒
            </h3>
            <p className="text-secondary">
              Looks like you haven’t added anything yet.
            </p>
            <button
              className="btn btn-primary mt-3 px-4"
              onClick={() => navigate('/bestsale')}
            >
              Shop Now
            </button>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table table-bordered align-middle text-center">
                <thead className="table-dark">
                  <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Price (₹)</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          alt={item.title}
                          style={{ height: '60px', objectFit: 'contain' }}
                        />
                      </td>
                      <td>{item.title || item.name}</td>
                      <td>₹{item.price}/Kg</td>
                      <td>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                          <button
                            className="btn btn-sm btn-secondary"
                            onClick={() => handleQuantityChange(item.id, "decrement")}
                            disabled={item.quantity <= 1}
                          >
                            −
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="btn btn-sm btn-secondary"
                            onClick={() => handleQuantityChange(item.id, "increment")}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-end mt-4">
              <h4>Total: ₹{total.toFixed(2)}</h4>
              <button
                className="btn btn-success mt-2"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* ✅ Sticky Footer */}
    </div>
  );
};

export default CartPage;
