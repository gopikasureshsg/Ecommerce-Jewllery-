import React from 'react';
import Jewel from '../assets/images/jewel1.jpg';
import Ring from '../assets/images/ring.jpg';
import Necklace from '../assets/images/neck.jpg';
import Chains from '../assets/images/chains.jpg';
import Moon from '../assets/images/moon.jpg';
import Short from '../assets/images/short.jpg';
import Long from '../assets/images/long.jpg';
import Luna from '../assets/images/luna.jpg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import JewelryIcons from './icons';
import './Header.css'; 
import ProductCarousel from './product';
import Testi from './testimonials';
import UserProfile from './userprofile';

const products = [
  { id: 1, name: "Elegant Ring", oldPrice: 600, newPrice: 500, imageUrl: Ring, rating: 4.5 },
  { id: 2, name: "Floral Necklace", oldPrice: 400, newPrice: 350, imageUrl: Necklace, rating: 4.2 },
  { id: 3, name: "Bracelet", oldPrice: 220, newPrice: 180, imageUrl: Chains, rating: 4.0 },
  { id: 4, name: "Chains", oldPrice: 1500, newPrice: 1200, imageUrl: Luna, rating: 4.8 },
  { id: 5, name: "Stud Earrings", oldPrice: 300, newPrice: 250, imageUrl: Short, rating: 4.1 },
  { id: 6, name: "Long Earrings", oldPrice: 750, newPrice: 650, imageUrl: Long, rating: 4.6 },
  { id: 7, name: "Moon Danglers", oldPrice: 1000, newPrice: 850, imageUrl: Moon, rating: 4.3 },
];

const ProductCard = ({ name, oldPrice, newPrice, imageUrl, rating }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
      <div className="product-card">
        <div className="sale-badge">SALE</div>
        <img src={imageUrl} alt={name} className="product-image" />
        <div className="product-details">
          <h5>{name}</h5>
          <div className="rating">⭐ {rating}</div>
          <div className="price-section">
            <p>
              <span className="old-price">Rs {oldPrice.toFixed(2)}</span>
              <span className="new-price">Rs {newPrice.toFixed(2)}</span>
            </p>
          </div>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};



const Hero = () => {
  return (
    <div className="hero-container">
   
      <div className="hero">
        <div className="hero-background" style={{ backgroundImage: `url(${Jewel})` }}></div>
        <div className="hero-overlay">
          <p className="hero-description">Handcrafted luxury for every occasion.</p>
          <div className="cta-buttons">
            <a href="/collect" className="cta-button">Shop Now</a>
            <a href="/collect" className="cta-button-outline">View Collections</a>
          </div>
        </div>
      </div>


      <div className="social-icons">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
      </div>

      <div className="container mt-3">
        <h3 className="new-arrivals-title text-center mt-5">✨ New Arrivals ✨</h3>
        <div className="row animate__animated animate__fadeInUp">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
              imageUrl={product.imageUrl}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
      <ProductCarousel />
      <JewelryIcons />
      <Testi />

     

    </div>
  );
};

export default Hero;

