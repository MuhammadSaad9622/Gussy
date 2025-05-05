import React from 'react';
import Img from '../Assets/hero.png'; // Make sure this is a valid image path

const Hero: React.FC = () => {
  return (
    <div
      className="relative min-h-screen bg-black text-white pt-16 bg-cover bg-center"
      style={{
        backgroundImage: `url(${Img})`,
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center h-screen relative z-10">
        
        <p className="text-xl md:text-3xl  mb-8 font-bold tracking-wide text-center" style={{marginTop:'450px'}}>
          Your VIP Access to Celebrity Style
        </p>
        <button className="bg-[#c9924e] hover:bg-[#B38F2D] text-black px-10 py-3 rounded-full font-medium transition-all duration-300">
          See More Outfits
        </button>
      </div>
    </div>
  );
};

export default Hero;
