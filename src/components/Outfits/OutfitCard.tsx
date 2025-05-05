import React from 'react';

interface OutfitCardProps {
  title: string;
  image: string;
  description: string;
  source: string;
}

const OutfitCard: React.FC<OutfitCardProps> = ({ 
  title, 
  image, 
  description,
  source
}) => {
  return (
    <div className="outfit-card">
      <div className="overflow-hidden mb-2">
        <img 
          src={image} 
          alt={title} 
          className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300" 
        />
      </div>
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-xs text-gray-700 mb-1">{description}</p>
      <p className="text-xs text-gray-500">{source}</p>
    </div>
  );
};

export default OutfitCard;