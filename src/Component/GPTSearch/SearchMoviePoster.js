import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../../utils/url';
import { Shimmer } from "../GPTSearch/utils/Shimmer";
import "../../App.css"

const SearchMoviePoster = () => {
  // Get movies from Redux store
  const searchMovies = useSelector(state => state.movies.nowSearchMovie); // Movie names
  const gptSearchMovies = useSelector(state => state.movies.nowGptSearchMovie); // Movie details

  // Loading state
  if (!searchMovies || !gptSearchMovies) {
    return <Shimmer />;
  }

  return (
    <div className="absolute top-[30%] z-30 container mx-auto px-4">
      {/* Display Search Movie Names */}
      <div className="text-center mb-4 bg-white rounded-lg">
        {searchMovies.length > 0 && (
          <div className="text-xl font-semibold text-blue-500 mb-6">
            <div className="flex flex-wrap justify-center gap-6 overflow-x-auto">
              {searchMovies.map((movieName, index) => (
                <div key={index} className="text-lg text-red-600 whitespace-nowrap">
                  {movieName.slice(0,25)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Display Movie Posters */}
      <div className="scrol h-[460px] overflow-y-auto">
        {gptSearchMovies.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {gptSearchMovies.map((movie, index) =>
              // Filter movies to exclude those without a valid poster_path
              movie
                .filter((movieselect) => movieselect?.poster_path)
                .map((movieselect) => (
                  <div
                    key={movieselect.id}
                    className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                    onClick={() => console.log(`${movieselect.original_title} clicked!`)}
                    aria-label={`Movie Poster: ${movieselect.original_title}`}
                  >
                    <img
                      src={IMG_CDN_URL + movieselect.poster_path}
                      alt={movieselect.original_title}
                      className="w-40 h-56 md:w-48 md:h-72 rounded-xl shadow-lg border-2 border-gray-300 transform hover:scale-110"
                    />
                    <div className="mt-2 text-center text-sm font-semibold text-gray-800 bg-white rounded-lg p-2">
                      {movieselect.original_title}
                    </div>
                  </div>
                ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMoviePoster;
