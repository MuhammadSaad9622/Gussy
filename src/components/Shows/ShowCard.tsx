import React from 'react';

interface ShowCardProps {
  title: string;
  image: string;
  network?: string;
}

const ShowCard: React.FC<ShowCardProps> = ({ title, image, network }) => {
  return (
    <div className="rounded overflow-hidden relative h-36 group cursor-pointer">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
      />
      
      {network && (
        <div className="absolute bottom-2 right-2 bg-pink-500 text-white text-xs py-0.5 px-1.5 rounded">
          {network}
        </div>
      )}
    </div>
  );
};

export default ShowCard;