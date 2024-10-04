import React from 'react';
import './testimonials.css';
import emily from '../assets/images/emily.jpg';
import sarah from '../assets/images/sarah.jpg';
import jenni from '../assets/images/jenni.jpg';

const Testi = () => {
  const testimonials = [
    {
      name: 'Sarah Thompson',
      text: 'Absolutely in love with my Orna piece! The attention to detail is incredible.',
      rating: 5,
      image: sarah,
    },
    {
      name: 'Emily Davis',
      text: 'The craftsmanship is stunning. Each works of ORNA is definitely true work of art!',
      rating: 4.5,
      image: emily,
    },
    {
      name: 'Jennifer Moore',
      text: 'The design process was seamless and enjoyable. I can’t wait for my next piece!',
      rating: 5,
      image: jenni,
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="container">
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="testimonial-card">
                <img src={testimonial.image} alt={testimonial.name} className="customer-image" />
                <h5>{testimonial.name}</h5>
                <p>"{testimonial.text}"</p>
                <div className="rating">⭐ {testimonial.rating}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testi;
