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

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bestsale" element={<Bestsale />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/service" element={<Service />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/fruits" element={<FruitsPage />} />
          <Route path="/vegetables" element={<VegetablesPage />} />
          <Route path="/payment-success" element={<PaymentSuccess />} /> 
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;