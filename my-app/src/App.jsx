import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Hero from './components/Header';
import Last from './components/footer';
import All from './components/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cont from './components/contact';
import ProductShowcase from './components/collection';
import ProductDetail from './components/view';
import Log from './components/login';
import Sign from './components/signup';
import { CartProvider } from './components/CartContext'; 
import CartPage from './components/CartPage';
import UserProfile from './components/userprofile';


function App() {
  return (
    <CartProvider> 
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />  
          <Route path="/about" element={<All />} /> 
          <Route path="/contact" element={<Cont />} />  
          <Route path="/collect" element={<ProductShowcase />} />
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/log" element={<Log />} /> 
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/signup" element={<Sign />} /> 
          <Route path="/product/:id" element={<ProductDetail />} />
  
        </Routes>
        <Last />
      </Router>
    </CartProvider>
  );
}

export default App;
