import React from 'react';
import './foot.css'; 
const Last = () => {
  return (
    <footer className="footer pt-5">
      <div className="container">
        <div className="row">
          
          <div className="col-md-4">
            <h5 className="footer-title">ORNA</h5>
            <p>123 Jewelry Lane, New York, NY, 10001</p>
            <p>567 Market St, San Francisco, CA</p>
            <p>Email: support@orna.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>

          <div className="col-md-4">
            <h5 className="footer-title">Help & Information</h5>
            <ul className="list-unstyled">
              <li><a href="#">Help</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Order Tracking</a></li>
            </ul>
          </div>

          
          <div className="col-md-4">
            <h5 className="footer-title">About Orna</h5>
            <ul className="list-unstyled">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Last;


