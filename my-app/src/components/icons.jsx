import React from 'react';
import './JewelryIcons.css'; // Import the external CSS file
import quality from '../assets/images/quality.jpg';
import hand from '../assets/images/handmade.jpg';
import design from '../assets/images/design.jpg';
import skin from '../assets/images/skin.jpg';
import light from '../assets/images/light.jpg';

const JewelryIcons = () => {
  const badges = [
    { id: 1, imgSrc: quality , title: 'DESIGNED IN', subtitle: 'JAIPUR' },
    { id: 2, imgSrc: hand, title: 'HANDCRAFTED', subtitle: 'JEWELLERY' },
    { id: 3, imgSrc: design, title: 'SKIN SAFE', subtitle: 'JEWELLERY' },
    { id: 4, imgSrc: skin, title: 'LIGHT WEIGHT', subtitle: 'MATERIAL' },
    { id: 5, imgSrc: light, title: 'EXCLUSIVE DESIGNER', subtitle: 'COLLECTION' }
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {badges.map(badge => (
          <div className="col-lg-2 col-md-3 col-sm-6 text-center mb-4" key={badge.id}>
            <div className="badge-container">
              <div className="badge-content">
                <img src={badge.imgSrc} alt={badge.subtitle} className="badge-icon" />
                <p>{badge.title}</p>
                <h6>{badge.subtitle}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelryIcons;
