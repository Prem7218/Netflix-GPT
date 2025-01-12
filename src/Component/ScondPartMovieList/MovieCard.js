import React from 'react';
import { IMG_CDN_URL } from '../../utils/url';
import { useDispatch } from 'react-redux';
import { addNextClickViewIndex } from '../../utils/Slices/useMoviesSlice';

const MovieCard = ({ index, title, posterPath }) => {
  const dispatch = useDispatch();

    const handleNextMovieTrailer = (movieIndex) => {
        dispatch(addNextClickViewIndex(movieIndex));
    }

  return (
    <div className="relative flex h-full">
      <img
        alt={title}
        src={IMG_CDN_URL + posterPath}
        className="w-1/3 h-full object-cover rounded-l-lg"
      />
      <div className="flex-grow bg-gray-900 p-4 flex flex-col justify-center">
        <h2 className="text-white text-xl font-bold truncate">{title}</h2>
        <p className="text-gray-400 text-sm mt-2">
          An amazing movie you'll love. Watch the trailer now!
        </p>
        <button 
            onClick={() => handleNextMovieTrailer(index)}
            className="mt-4 py-2 px-4 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition">
          Choose As Next Trailer
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
