import React from 'react';
import './contact.css'; 
const Cont = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row">
         
          <div className="col-md-6 contact-info">
            <h3>Get In Touch</h3>
            <p>Feel free to reach out to us for any inquiries or support. We're here to help!</p>
            <ul className="list-unstyled">
              <li><i className="fas fa-map-marker-alt"></i>Address: 123 Jewelry Lane, New York, NY, 10001567 Market St, San Francisco, CA</li>
              <li><i className="fas fa-phone-alt"></i>Phone Number: +91 94955 96443</li>
              <li><i className="fas fa-envelope"></i>E-Mail: <a href="mailto:mailto@orna.com">mailto@orna.com</a></li>
            </ul>

            
          </div>

     
          <div className="col-md-6">
            <div className="card contact-form-card">
              <div className="card-body">
                <h3>Send a Message</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>

   
        <div className="row mt-5">
          <div className="col-12">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="300"
                  src="https://maps.google.com/maps?q=london%20eye&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title="Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cont;

