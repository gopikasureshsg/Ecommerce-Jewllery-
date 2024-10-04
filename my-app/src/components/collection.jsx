import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './collection.css';
import { Link } from 'react-router-dom';

const ProductShowcase = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/getProducts/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">Error fetching products: {error.message}</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5"><b>Our Exclusive Products</b></h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <img 
                src={product.images.length > 0 ? `http://127.0.0.1:8000${product.images[0].image}` : "https://via.placeholder.com/300"} 
                alt={product.name} 
                className="card-img-top" 
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <h6 className="price">₹{product.price.toFixed(2)}</h6>
              </div>
              <div className="card-footer">
                <Link to={`/product/${product.id}`} className="btn btn-primary btn-product">VIEW MORE</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;



