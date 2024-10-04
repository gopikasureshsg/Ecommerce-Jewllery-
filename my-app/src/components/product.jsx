import React from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
import image from '../assets/images/necklaceimage.jpg';
import Ringimage from '../assets/images/ringimage.jpg';
import Earingimage from '../assets/images/earrimage.jpg';

import './product.css';

const ProductCarousel = () => {
  return (
    <Carousel interval={2000} pause={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={Ringimage} alt="First slide" />
        <Carousel.Caption>
          <h3>Exclusive Ring</h3>
          <p>A beautiful blend of modern and classic design.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="Second slide" />
        <Carousel.Caption>
          <h3>Elegant Necklace</h3>
          <p>Handcrafted with the finest materials.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Earingimage} alt="Third slide" />
        <Carousel.Caption>
          <h3>Timeless Earrings</h3>
          <p>Perfect for every occasion.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
