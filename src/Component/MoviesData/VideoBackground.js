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

// import React, { useEffect, useRef } from "react";
// import { useMovieBackground } from "../../Custom_Hooks/useMovieBackground";
// const VideoBackground = ({ id, onEnded }) => {
  
//   const trailerKey = useMovieBackground(id);
//   const iframeRef = useRef(null);

//   useEffect(() => {
//     if (iframeRef.current && trailerKey) {
//       iframeRef.current.src = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=0&playsinline=1&rel=0`;
//     }
//   }, [trailerKey]);

//   // Call onEnded when video ends (simulated for autoplay trailers)
//   useEffect(() => {
//     if (!trailerKey) return;

//     // Simulate video duration (e.g., 120 seconds per trailer)
//     const timer = setTimeout(() => {
//       if (onEnded) onEnded();
//     }, 120000);

//     return () => clearTimeout(timer); // Cleanup on unmount or trailerKey change
//   }, [trailerKey, onEnded]);

//   if(!trailerKey) return null;

//   return (
//     <iframe
//       ref={iframeRef}
//       className="w-screen aspect-video"
//       src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
//       title="YouTube video player"
//       referrerPolicy="strict-origin-when-cross-origin"
//       allow="autoplay; encrypted-media"   
//     ></iframe>
//   );
// };

// export default VideoBackground;


// Super Update:
import React, { useEffect, useRef } from "react";
import { useMovieBackground } from "../../Custom_Hooks/useMovieBackground";
import { YOUTUBE_URL } from "../../utils/url";

const VideoBackground = ({ id, onEnded }) => {
  const trailerKey = useMovieBackground(id); // Fetch trailer key from custom hook
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!trailerKey) return;

    const initializeYouTubePlayer = () => {
      if (playerRef.current) return; // Prevent re-initialization
      playerRef.current = new window.YT.Player(iframeRef.current, {
        videoId: trailerKey,
        playerVars: {
          autoplay: 1,
          controls: 0,
          playsinline: 1,
          rel: 0,
          mute: 0, // Play with sound
        },
        events: {
          onReady: (event) => event.target.playVideo(), // Start video automatically
          onStateChange: (event) => {
            // Trigger onEnded when the video ends
            if (event.data === window.YT.PlayerState.ENDED && onEnded) {
              onEnded();
            }
          },
        },
      });
    };

    // Load YouTube Iframe API script if not already loaded
    if (!window.YT || !window.YT.Player) {
      const script = document.createElement("script");
      script.src = `${YOUTUBE_URL}`;
      document.body.appendChild(script);

      window.onYouTubeIframeAPIReady = initializeYouTubePlayer;
    } else {
      initializeYouTubePlayer();
    }

    return () => {
      // Cleanup player instance
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [trailerKey, onEnded]);

  if (!trailerKey) return null;

  return (
    <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
      <div
        ref={iframeRef}
        className="absolute top-0 left-0 w-full h-full"
        id={`youtube-player-${id}`} // Unique ID for each iframe
      ></div>
    </div>
  );
};

export default VideoBackground;
