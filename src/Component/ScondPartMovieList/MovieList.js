import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return movies && movies.length > 0 ? (
    <div className="overflow-x-auto bg-gradient-to-r from-gray-900 via-black to-gray-900 py-8">
      <div className="flex gap-6 px-8">
        {movies.map((movie, index) => {
          const { id, original_title, poster_path } = movie;
          return (
            <div
              key={id}
              className="group flex-shrink-0 w-96 h-48 rounded-lg bg-gray-800 shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <MovieCard index={index} title={original_title} posterPath={poster_path} />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="text-center text-gray-500 text-xl mt-10">No Movies Found.</div>
  );
};

export default MovieList;
