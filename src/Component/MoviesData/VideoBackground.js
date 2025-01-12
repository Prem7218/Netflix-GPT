// import React, { useEffect, useRef } from 'react';
// import { useMovieBackground } from '../../Custom_Hooks/useMovieBackground';

// const VideoBackground = ({ id, onEnded }) => {
//   const trailerKey = useMovieBackground(id);
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     if (iframeRef.current && trailerKey) {
//       iframeRef.current.src = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`;
//     }
//   }, [trailerKey]);

//   useEffect(() => {
//     if (!trailerKey) return;

//     // Simulate video ending after 30 seconds
//     const timer = setTimeout(() => {
//       if (onEnded) onEnded();
//     }, 30000);

//     return () => clearTimeout(timer);
//   }, [trailerKey, onEnded]);

//   if (!trailerKey) return null;

//   return (
//     <iframe
//       ref={iframeRef}
//       className="w-screen aspect-video"
//       src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
//       title="YouTube video player"
//       referrerPolicy="strict-origin-when-cross-origin"  
//     ></iframe>
//   );
// };

// export default VideoBackground;



// Updated Version:

import React, { useEffect, useRef } from "react";
import { useMovieBackground } from "../../Custom_Hooks/useMovieBackground";
const VideoBackground = ({ id, onEnded }) => {
  
  const trailerKey = useMovieBackground(id);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current && trailerKey) {
      iframeRef.current.src = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=0&playsinline=1&rel=0`;
    }
  }, [trailerKey]);

  // Call onEnded when video ends (simulated for autoplay trailers)
  useEffect(() => {
    if (!trailerKey) return;

    // Simulate video duration (e.g., 120 seconds per trailer)
    const timer = setTimeout(() => {
      if (onEnded) onEnded();
    }, 120000);

    return () => clearTimeout(timer); // Cleanup on unmount or trailerKey change
  }, [trailerKey, onEnded]);

  if(!trailerKey) return null;

  return (
    <iframe
      ref={iframeRef}
      className="w-screen aspect-video"
      src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
      title="YouTube video player"
      referrerPolicy="strict-origin-when-cross-origin"
      allow="autoplay; encrypted-media"   
    ></iframe>
  );
};

export default VideoBackground;
