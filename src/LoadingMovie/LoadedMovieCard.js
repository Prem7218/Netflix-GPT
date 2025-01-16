import React, { useState } from 'react';
import { IMG_CDN_URL } from '../utils/url';
import { useMovieBackground } from '../Custom_Hooks/useMovieBackground';

const LoadedMovieData = ({ id, poster_path, original_title }) => {

    const trailerId = useMovieBackground(id);
    const [hoveredMovieId, setHoveredMovieId] = useState(null);
    const handleMouseEnter = () => setHoveredMovieId(id); 
    const handleMouseLeave = () => setHoveredMovieId(null); 

  return (
    <div
      className="group inline-block w-88 h-64 rounded-lg bg-gray-800 shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Movie Poster or Trailer (conditionally rendered based on hover) */}
      {hoveredMovieId === id ? (
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1`}
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <img 
          src={IMG_CDN_URL + poster_path} 
          alt={original_title} 
          className="w-full h-full object-cover"
        />
      )}

      {/* Movie Title */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
        {original_title}
      </div>
    </div>
  );
};

export default LoadedMovieData;