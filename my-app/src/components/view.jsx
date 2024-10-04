import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from './CartContext'; 
import './view .css';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const { addToCart } = useCart(); 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/getProduct/${id}/`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                setError(error);
                setLoading(false);
            });
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            
            addToCart({ ...product, quantity });
           
            navigate('/cart'); 
        }
    };

    if (loading) {
        return <div>Loading product...</div>;
    }

    if (error) {
        return <div>Error fetching product: {error.message}</div>;
    }

    return (
        <div className="container product-detail mt-5">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <img src={`http://127.0.0.1:8000${product.images[0].image}`} alt={product.name} className="product-image" />
                </div>
                <div className="col-lg-6 col-md-12">
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-price">₹{product.price.toFixed(2)}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="quantity-selector">
                        <label htmlFor="quantity">Quantity:</label>
                        <input 
                            type="number" 
                            id="quantity" 
                            name="quantity" 
                            min="1" 
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))} 
                        />
                    </div>
                    <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;









