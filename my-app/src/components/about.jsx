import React from 'react';
import premium from '../assets/images/premium.jpg';
import orna from '../assets/images/orna.jpg';
import journey from '../assets/images/journey.jpg';
import JewelryIcons from './icons'; 
import './about.css'; 


const All = () => {
  return (
    <div>
      
      <section className="main-header" style={{ backgroundImage: `url(${orna})` }}>
        <div className="header-content">
          <h5><b>
            Celebrating the one-of-a-kind spirit of women. Orna designs each piece with exquisite attention to detail,
            reflecting her distinct and timeless beauty that brings life to her uniqueness.
          </b></h5>
        </div>
      </section>

     
      <JewelryIcons /> 

     
      <section className="orna-journey">
        <h2><b>ORNA Journey</b></h2>
        <div className="container">
          
        
          <div className="journey-content">
            <div className="content-block">
              <h3>Inspired Design</h3>
              <p><b>
                Your passion, your precision, your laughter, and your love. Every aspect of your uniqueness is crafted into a truly
                exceptional design in an exclusive, original style that’s destined to become your heirloom.
              </b></p>
            </div>
            <div className="content-block">
              <img src={premium} alt="Design Image" />
            </div>
          </div>

          {/* Second Block */}
          <div className="journey-content">
            <div className="content-block">
              <img src={journey} alt="Craft Image" />
            </div>
            <div className="content-block">
              <h3>Crafted to Perfection</h3>
              <p><b>
                Your design is brought to life through precise jewelers in the hands of our highly skilled master artisans,
                through intricate techniques and painstaking attention to detail and finish.
              </b></p>
            </div>
          </div>

         
          <div className="journey-content">
            <div className="content-block">
              <h3>Timeless Elegance</h3>
              <p><b>
                Every piece reflects an unwavering commitment to timeless elegance, blending modernity with tradition to create unique jewelry that stands the test of time.
              </b></p>
            </div>
            <div className="content-block">
              <img src={premium} alt="Timeless Elegance Image" />
            </div>
          </div>

         
          <div className="journey-content">
            <div className="content-block">
              <img src={journey} alt="Legacy Craft Image" />
            </div>
            <div className="content-block">
              <h3>A Legacy of Craftsmanship</h3>
              <p><b>
                At Orna, every piece is more than just jewelry—it is a legacy of craftsmanship that is passed down from generation to generation.
              </b></p>
            </div>
          </div>
          

        </div>
      </section>
    </div>
  );
};

export default All;

