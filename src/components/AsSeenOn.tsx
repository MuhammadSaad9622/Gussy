import React from 'react';
import { streamingPlatforms } from '../data/streamingPlatforms';

const AsSeenOn: React.FC = () => {
  return (
    <section className="py-12 border-t border-b">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-10">As seen on</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {streamingPlatforms.map((platform) => (
            <div key={platform.id} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={platform.logo} 
                alt={platform.name}
                className="h-8 md:h-10 object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;