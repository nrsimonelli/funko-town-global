import React from 'react';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Hero = () => {
  return (
    <div className='root min-h-screen text-gray-light bg-primary-darker flex justify-between'>
      <Nav />
      <div className='hero-root flex justify-center items-center flex-grow'>
        <div className='container w-full b'>
          <div className='hero-title text-3xl sm:text-5xl lg:text-6xl'>
            Hero
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
