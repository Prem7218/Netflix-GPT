import React, { useEffect, useState } from "react";
import LoadedMovieData from "./LoadedMovieCard";
import { lastOne, loadings, options1, proxy, tmdb } from "../utils/url";

const LoadNewMovie = () => {
  const [loadMovie, setLoadMovies] = useState(null);
  const [dataAdd, setDataAdd] = useState([]); // Stores all loaded movies
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current category index
  const [isLoading, setIsLoading] = useState(false); // Prevents multiple fetches at the same time

  const allloadingData = [
    "trending",
    "tv/on_the_air",
    "tv/popular",
    "tv/top_rated",
  ];

  // Fetches data based on the category
  const fetchData = async () => {
    if (isLoading) return; // Prevent multiple simultaneous fetches
    setIsLoading(true);

    try {
      let url = `${proxy + tmdb}${loadMovie}` + lastOne;
      
      if(loadMovie === "trending") {
        url = proxy + tmdb + "trending" + loadings;
      }

      const resp = await fetch(url, options1);
      const data = await resp.json();

      // Update the state with new movies
      if (data?.results) {
        setDataAdd((prevData) => [...prevData, ...data.results]);
      }
    } catch (e) {
      console.error("Error fetching data: ", e);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        if (currentIndex < allloadingData.length && !isLoading) {
          setLoadMovies(allloadingData[currentIndex]); // Set the next category to load
          setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next category
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex, isLoading]);

  useEffect(() => {
    // Trigger data fetch whenever `loadMovie` is updated
    if(loadMovie) {
      fetchData();
    }
  }, [loadMovie]);

  return (
    <div className="px-8 mt-8 mb-28">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Trending Movies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataAdd.length > 0 ? (
          dataAdd.map((movie, index) => {
            const { id, original_name, original_title, poster_path } = movie;
            return (
              <LoadedMovieData
                key={index}
                id={id}
                original_title={original_title}
                original_name={original_name}
                poster_path={poster_path}
              />
            );
          })
        ) : 
        <>
          {isLoading && (
            <div className="flex flex-row text-center text-gray-500 py-4">
              Loading more movies...
            </div>
          )}
        </>
        }
      </div>
    </div>
  );
};

export default LoadNewMovie;
