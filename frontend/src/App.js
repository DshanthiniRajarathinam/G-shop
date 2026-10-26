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
import FruitsPage from './pages/fruitspage';
import VegetablesPage from './pages/vegetablespage';
import PaymentSuccess from './pages/PaymentSuccess'; 
import ProtectedRoute from './components/ProtectedRoute';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
            path="/fruits" 
            element={
              <ProtectedRoute>
                <FruitsPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/vegetables" 
            element={
              <ProtectedRoute>
                <VegetablesPage />
              </ProtectedRoute>
            } 
          />
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