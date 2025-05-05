import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importing local images
import image1 from '../Assets/HOMEPAGE/1.png';
import image2 from '../Assets/HOMEPAGE/2.png';
import image3 from '../Assets/HOMEPAGE/3.png';
import image4 from '../Assets/HOMEPAGE/4.png';

interface FashionItem {
  id: number;
  title: string;
  image: string;
  source: string;
  platform: string;
}

interface FashionCarouselProps {
  title?: string;
  items?: FashionItem[];
}

export default function FashionCarousel({
  title = "More Items Worn By Gina Kirschenheiter",
  items: propItems,
}: FashionCarouselProps) {
  const defaultItems: FashionItem[] = [
    {
      id: 1,
      title: "Gina Kirschenheiter's Black Floral Long Sleeve Mini Dress",
      image: image1,
      source: "Real Housewives of Orange County",
      platform: "Instagram Fashion"
    },
    {
      id: 2,
      title: "Leva Bonaparte's Tan And White Printed Halter Dress",
      image: image2,
      source: "Southern Charm",
      platform: "Instagram Fashion"
    },
    {
      id: 3,
      title: "Brynn Whitfield's White Satin Lace Trim Dress",
      image: image3,
      source: "Real Housewives of New York",
      platform: "Instagram Fashion"
    },
    {
      id: 4,
      title: "Leva Bonaparte's White Cable Knit Varsity Sweater",
      image: image4,
      source: "Southern Charm",
      platform: "Instagram Fashion"
    },
    // {
    //   id: 5,
    //   title: "Item 5 Example",
    //   image: image1,
    //   source: "Another Source",
    //   platform: "Instagram Fashion"
    // },
    // {
    //   id: 6,
    //   title: "Item 6 Example",
    //   image: image2,
    //   source: "Another Source",
    //   platform: "Instagram Fashion"
    // },
    // {
    //   id: 7,
    //   title: "Item 7 Example",
    //   image: image3,
    //   source: "Another Source",
    //   platform: "Instagram Fashion"
    // },
    // {
    //   id: 8,
    //   title: "Item 8 Example",
    //   image: image4.src,
    //   source: "Another Source",
    //   platform: "Instagram Fashion"
    // },
    // {
    //   id: 9,
    //   title: "Item 9 Example",
    //   image: image1.src,
    //   source: "Another Source",
    //   platform: "Instagram Fashion"
    // },
    // {
    //   id: 10,
    //   title: "Item 10 Example",
    //   image: image2.src,
    //   source: "Another Source",
    //   platform: "Instagram Fashion"
    // },
    // {
    //   id: 11,
    //   title: "Item 11 Example",
    //   image: image3.src,
    //   source: "Another Source",
    //   platform: "Instagram Fashion"
    // },
    // {
    //   id: 12,
    //   title: "Item 12 Example",
    //   image: image4.src,
    //   source: "Another Source",
    //   platform: "Instagram Fashion"
    // },
    // {
    //   id: 13,
    //   title: "Item 13 Example",
    //   image: image1.src,
    //   source: "Another Source",
    //   platform: "Instagram Fashion"
    // },
    // {
    //   id: 14,
    //   title: "Item 14 Example",
    //   image: image2.src,
    //   source: "Another Source",
    //   platform: "Instagram Fashion"
    // },
    // {
    //   id: 15,
    //   title: "Item 15 Example",
    //   image: image3.src,
    //   source: "Another Source",
    //   platform: "Instagram Fashion"
    // },
    // {
    //   id: 16,
    //   title: "Item 16 Example",
    //   image: image4.src,
    //   source: "Another Source",
    //   platform: "Instagram Fashion"
    // }
  ];

  const items = propItems || defaultItems;
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev >= items.length - itemsPerPage ? 0 : prev + itemsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? items.length - itemsPerPage : prev - itemsPerPage
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
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-medium text-sm">{item.title}</h3>
                <div className="text-sm text-gray-600">
                  {item.source} <span className="italic">{item.platform}</span>
                </div>
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
            <button className="text-sm underline">View All</button>
          </div>
        </div>
      </div>
    </section>
  );
}
