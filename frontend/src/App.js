import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';
import Register from './pages/register';
import Login from './pages/login';
import Bestsale from './pages/bestsale';
import Promotion from './pages/promotion';
import Service from './pages/service';
import UserProfile from './pages/profile';
import ResetPassword from './pages/resetpassword';
import CartPage from './pages/cart';
import Contact from './pages/contact';
import Checkout from './pages/checkout';
import PaymentSuccess from './pages/PaymentSuccess'; 
import ProtectedRoute from './components/ProtectedRoute';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />

          {/* Protected Routes (Requires Login / Register via Clerk) */}
          <Route 
            path="/bestsale" 
            element={
              <ProtectedRoute>
                <Bestsale />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/products" 
            element={
              <ProtectedRoute>
                <Bestsale />
              </ProtectedRoute>
            } 
          />
          <Route path="/fruits" element={<Navigate to="/bestsale?category=Fruits" replace />} />
          <Route path="/vegetables" element={<Navigate to="/bestsale?category=Vegetables" replace />} />
          <Route path="/dryfruits" element={<Navigate to="/bestsale?category=Dry Fruits" replace />} />
          <Route path="/beverages" element={<Navigate to="/bestsale?category=Cold Beverages" replace />} />
          <Route path="/flours" element={<Navigate to="/bestsale?category=Flours" replace />} />
          <Route path="/flour" element={<Navigate to="/bestsale?category=Flours" replace />} />
          <Route path="/chocolates" element={<Navigate to="/bestsale?category=Chocolates" replace />} />
          <Route path="/chocolate" element={<Navigate to="/bestsale?category=Chocolates" replace />} />
          <Route path="/snacks" element={<Navigate to="/bestsale?category=Snacks" replace />} />
          <Route path="/snack" element={<Navigate to="/bestsale?category=Snacks" replace />} />
          <Route path="/spices" element={<Navigate to="/bestsale?category=Spices" replace />} />
          <Route path="/spice" element={<Navigate to="/bestsale?category=Spices" replace />} />
          <Route 
            path="/cart" 
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/checkout" 
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/payment-success" 
            element={
              <ProtectedRoute>
                <PaymentSuccess />
              </ProtectedRoute>
            } 
          /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;