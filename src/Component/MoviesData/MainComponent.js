import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoData from './VideoData';

const MainComponent = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!movies) return null;

  const currentMovie = movies[currentIndex];
  const { original_title, overview, id } = currentMovie;

  // Auto-switch to the next movie trailer
  const handleNextMovie = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <VideoBackground id={id} onEnded={handleNextMovie} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black">
        <VideoData title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainComponent;


// Updated Version:

// import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
// import VideoBackground from "./VideoBackground";
// import VideoData from "./VideoData";
// const MainComponent = () => {
//     const movies = useSelector((store) => store.movies?.nowPlayingMovies);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     if(!movies) return;

//   const currentMovie = movies[currentIndex];
//   const { original_title, overview, id } = currentMovie;

//   Auto-switch to the next movie trailer
//   const handleNextMovie = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
//   };

//   return (
//     <div>
//         <VideoData title={original_title} overview={overview} />
//         <VideoBackground id={id} onEnded={handleNextMovie} />
//     </div>
//   )
// }

// export default MainComponent;