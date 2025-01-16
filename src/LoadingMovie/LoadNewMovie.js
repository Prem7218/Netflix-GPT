import React, { useEffect, useState } from "react";
import { useFetchLoading } from "../Custom_Hooks/useFetchLoading";
// import LoadedMovieData from "./LoadedMovieCard";

const LoadNewMovie = () => {
  const [loadMovie, setLoadMovies] = useState(null);
  const loadData = useFetchLoading(loadMovie);
  const [currentIndex, setCurrentIndex] = useState(0); // Keeps track of the current category to load
  const allloadingData = [
    "trending",
    "tv/ariving_today",
    "tv/on_the_air",
    "tv/popular",
    "tv/top_rated",
  ];

  useEffect(() => {
    console.log("currIndex: ", currentIndex, " \n Movie: ", loadData);
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (currentIndex < allloadingData.length) {
          // Set the category to fetch based on currentIndex
          setLoadMovies(allloadingData[currentIndex]);
          setCurrentIndex(currentIndex + 1); // Move to the next category after data fetch
        } else {
          // Reset currentIndex after all categories are loaded
          setCurrentIndex(0);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex]); // Dependency only on currentIndex

  return (
    <div className="px-8 mt-8 mb-28">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Trending Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loadData.length > 0 ? (
          loadData.map((movie) => {
            const { id, original_title, poster_path } = movie;
            return (
              console.log("")
              // <LoadedMovieData
              //   key={id}
              //   id={id}
              //   original_title={original_title}
              //   poster_path={poster_path}
              // />
            );
          })
        ) : (
          <div className="w-full text-center text-gray-500 py-12">
            Movie Not Found.
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadNewMovie;
