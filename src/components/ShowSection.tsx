import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LoveIslandCarouselProps {
  title?: string;
  items: Array<{
    id: number;
    name: string;
    look?: string;
    outfit?: string;
    image: string;
  }>;
}

export default function LoveIslandCarousel({ 
  title = "More Items From Love Island", 
  items 
}: LoveIslandCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    setCurrentSlide((prev) => 
      prev >= items.length - itemsPerPage ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? items.length - itemsPerPage : prev - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index * itemsPerPage);
  };

  const visibleItems = items.slice(currentSlide, currentSlide + itemsPerPage);
  const totalDots = Math.ceil(items.length / itemsPerPage);
  const currentDot = Math.floor(currentSlide / itemsPerPage);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-8">{title}</h2>
        
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {visibleItems.map((item) => (
              <div key={item.id} className="group">
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-3">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <h3 className="font-medium text-sm">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.look || item.outfit}</p>
              </div>
            ))}
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalDots }).map((_, idx) => (
              <button 
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-2 h-2 rounded-full ${currentDot === idx ? 'bg-black' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          <div className="text-right mt-4">
            <a href="#" className="text-sm underline">View All</a>
          </div>
        </div>
      </div>
    </section>
  );
}