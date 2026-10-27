import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const getItemKey = (item) => {
  if (item.cartKey) return item.cartKey;
  if (item.id && item.unit) return `${item.id}_${item.unit}`;
  return String(item.id);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const payloadKey = getItemKey(action.payload);
      const existing = state.cartItems.find(item => getItemKey(item) === payloadKey);
      
      if (existing) {
        existing.quantity += (action.payload.quantity || 1);
      } else {
        state.cartItems.push({
          ...action.payload,
          cartKey: payloadKey,
          quantity: action.payload.quantity || 1
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    deleteFromCart(state, action) {
      const targetKey = String(action.payload);
      state.cartItems = state.cartItems.filter(item => getItemKey(item) !== targetKey && String(item.id) !== targetKey);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    updateQuantity(state, action) {
      const { id, type } = action.payload;
      const targetKey = String(id);
      const item = state.cartItems.find(item => getItemKey(item) === targetKey || String(item.id) === targetKey);
      if (item) {
        if (type === "increment") {
          item.quantity += 1;
        } else if (type === "decrement" && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart(state) {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, deleteFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
