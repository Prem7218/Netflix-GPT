import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondData = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className='bg-black'>
      <MovieList movies=
        {
          {
            movNow : movies?.nowPlayingMovies, 
            movPop : movies?.nowPlayingPopMovie,
            movTop : movies?.nowPlayingTopMovie,
            movUpc : movies?.nowPlayingUpcMovie,
          }
        } 
      />
    </div>
  )
}

export default SecondData;