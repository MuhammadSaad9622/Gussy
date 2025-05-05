import React from 'react';
import OutfitCard from './OutfitCard';
import { Link } from 'react-router-dom';

interface Outfit {
  id: number;
  title: string;
  image: string;
  description: string;
  source: string;
}

interface OutfitsGridProps {
  outfits: Outfit[];
  title: string;
  showViewMore?: boolean;
}

const OutfitsGrid: React.FC<OutfitsGridProps> = ({ 
  outfits, 
  title,
  showViewMore = false
}) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold text-center mb-8">{title}</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {outfits.map((outfit) => (
          <OutfitCard 
            key={outfit.id}
            title={outfit.title}
            image={outfit.image}
            description={outfit.description}
            source={outfit.source}
          />
        ))}
      </div>
      
      {showViewMore && (
        <div className="flex justify-center mt-8">
          <Link 
            to="/outfits" 
            className="py-2 px-6 bg-amber-100 text-amber-800 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors"
          >
            See More Outfits
          </Link>
        </div>
      )}
    </div>
  );
};

export default OutfitsGrid;