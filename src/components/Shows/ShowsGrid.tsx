import React, { useState } from 'react';
import ShowCard from './ShowCard';

interface Show {
  id: number;
  title: string;
  image: string;
  network?: string;
}

interface ShowsGridProps {
  shows: Show[];
  title?: string;
}

const ShowsGrid: React.FC<ShowsGridProps> = ({ shows, title }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(shows.length / itemsPerPage);
  
  const startIndex = currentPage * itemsPerPage;
  const visibleShows = shows.slice(startIndex, startIndex + itemsPerPage);
  
  return (
    <div>
      {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        {visibleShows.map((show) => (
          <ShowCard 
            key={show.id}
            title={show.title}
            image={show.image}
            network={show.network}
          />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentPage ? 'bg-black' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowsGrid;