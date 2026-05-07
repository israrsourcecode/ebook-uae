import React from 'react';
import marqueeGreen from '../../assets/images/marquee-green.webp';
import marqueeWhite from '../../assets/images/marquee-white.webp';

const Brands = () => {
  const brand1 = [marqueeGreen, marqueeGreen, marqueeGreen, marqueeGreen, marqueeGreen];
  const brand2 = [marqueeWhite, marqueeWhite, marqueeWhite, marqueeWhite, marqueeWhite];

  return (
    <section className="brand-section">
      {/* Green Belt - Tilted one way */}
      <div className="marquee-belt white-belt">
        <div className="marquee-track">
          {[...brand1, ...brand1].map((logo, index) => (
            <div className="brand-item" key={`green-${index}`}>
              <img src={logo} alt="brand logo" />
            </div>
          ))}
        </div>
      </div>

      {/* White Belt - Tilted the other way */}
      <div className="marquee-belt green-belt">
        <div className="marquee-track reverse">
          {[...brand2, ...brand2].map((logo, index) => (
            <div className="brand-item" key={`white-${index}`}>
              <img src={logo} alt="brand logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;