import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondData = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  return (
    <div className='bg-black'>
      <MovieList movies={movies} />
    </div>
  )
}

export default SecondData;