import React from 'react';
import MovieCard from './MovieCard';
import "../../App.css";
import DiffMovieList from './DiffMovieList';

const MovieList = ({ movies }) => {
  const categories = [
    { title: "# Now Playing: ", movieList: movies?.movNow },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-8">
      {categories.map(({ title, movieList }, categoryIndex) => {
        // Check if the movie list for the current category exists and is not empty
        if (!movieList || movieList.length === 0) return null;

        return (
          <div key={categoryIndex} className="mb-8">
            {/* Category Title */}
            <h1 className="mt-5 mb-5 w-[16.64%] p-2 text-center font-bold text-[1.8rem] hover:bg-red-700 rounded-md text-white bg-gray-400 ml-12">
              {title}
            </h1>
            {/* Horizontal Scrollable Container */}
            <div className="scrol flex gap-6 px-8">
              {movieList.map((movie, index) => {
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
        );
      })}
      <>
        <DiffMovieList movies={movies}/>
      </>
    </div>
  );
};

export default MovieList;
