import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Carousel from './ui/Carousel';
import { topPicks } from '../data/topPicks';

const TopPicks: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % topPicks.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + topPicks.length) % topPicks.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Top Picks</h2>
        
        <div className="relative">
          <Carousel 
            items={topPicks} 
            activeIndex={activeIndex}
            renderItem={(item) => (
              <div className="flex flex-col items-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-[500px] object-cover object-top"
                />
                <p className="mt-3 text-sm text-gray-600">{item.caption}</p>
              </div>
            )}
            visibleSlides={4}
          />
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 -ml-4"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 -mr-4"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {topPicks.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-black' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-right mt-4">
          <a href="#" className="text-sm underline">View All</a>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;