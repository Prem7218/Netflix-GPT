import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../utils/url";
import "../../App.css";
import { useMovieBackground } from "../../Custom_Hooks/useMovieBackground";
import { demoDatas } from "./utils/DemoData";

const SearchMoviePoster = () => {
  // Get movies from Redux store
  const searchMovies = useSelector((state) => state.movies.nowSearchMovie); // Movie names
  const gptSearchMovie = useSelector((state) => state.movies.nowGptSearchMovie); // Movie details
  const gptSearchMovies= gptSearchMovie ? gptSearchMovie : demoDatas; 
  const [movieId, setMovieId] = useState(null);
  const movieTrailerId = useMovieBackground(movieId);
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [activeTab, setActiveTab] = useState("details");

  useEffect(() => {
    console.log("MovI: ", movieId);
  }, [movieId, movieTrailerId]);
  
  // Loading state
  if (!searchMovies || !gptSearchMovies) {
    return null;
  }

  const genreMapper = () => ["Action", "Drama", "Thriller"];

  const handleModelBox = (movie, movieId) => {
    setMovieId(movieId);
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="absolute top-[32%] z-30 container mx-auto px-4">
        {/* Display Movie Posters */}
        <div className="scrol h-[422px] overflow-y-auto">
          {!gptSearchMovies.length  ? (
            ""
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {gptSearchMovies.map((movie, index) =>
                movie
                  .filter((movieselect) => movieselect?.poster_path)
                  .map((movieselect) => (
                    <div
                      key={movieselect?.id}
                      className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
                      onClick={() => handleModelBox(movieselect, movieselect?.id)}
                      aria-label={`Movie Poster: ${movieselect?.original_title}`}
                    >
                      <img
                        src={IMG_CDN_URL + movieselect?.poster_path}
                        alt={movieselect?.original_title}
                        className="w-36 h-52 md:w-36 md:h-52 lg:w-48 lg:h-60 rounded-xl shadow-lg border-2 border-gray-300 transform hover:scale-110"
                      />
                      <div className="mt-2 text-center text-sm font-semibold text-gray-800 bg-white rounded-lg p-2">
                        {movieselect?.original_title.slice(0,10)}
                      </div>
                    </div>
                  ))
              )}
            </div>
          )}
        </div>

        {/* Modal */}
        {isModalOpen && selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 relative overflow-hidden">
            {/* Backdrop Image */}
            <div className="relative h-48 md:h-64">
              <img
                src={IMG_CDN_URL + selectedMovie.backdrop_path}
                alt={selectedMovie.original_title}
                className="object-cover w-full h-full"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              >
                ✕
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-between border-b">
              <button
                className={`flex-1 py-3 text-center ${
                  activeTab === "details"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-600 hover:text-blue-500"
                }`}
                onClick={() => setActiveTab("details")}
              >
                Details
              </button>
              <button
                className={`flex-1 py-3 text-center ${
                  activeTab === "trailer"
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : "text-gray-600 hover:text-blue-500"
                }`}
                onClick={() => setActiveTab("trailer")}
              >
                Trailer
              </button>
            </div>

            {/* Tab Content */}
            <div className="transition-transform duration-300 transform flex w-full">
              
            {/* Details Tab */}
            {activeTab === "details" && (
              <div className="p-6">
              {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedMovie.original_title || selectedMovie.title}
                </h2>
                {/* Language and Release Date */}
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                  <span className="mr-4">
                    <strong>Language:</strong> {selectedMovie.original_language.toUpperCase()}
                  </span>
                  <span>
                    <strong>Release Date:</strong> {selectedMovie.release_date}
                  </span>
                </div>
        
                {/* Genres */}
                <div className="mb-4">
                  <strong>Genres:</strong>{" "}
                  {genreMapper().join(", ")}
                </div>
        
                {/* Popularity and Rating */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <div className="flex items-center mr-6">
                    <span className="text-yellow-500 text-lg font-bold mr-1">★</span>
                    <span>{selectedMovie.vote_average}/10</span> 
                    <span className="ml-2 text-xs">({selectedMovie.vote_count} votes)</span>
                  </div>
                  <div>
                    <strong>Popularity:</strong> {Math.round(selectedMovie.popularity)}
                  </div>
                </div>
        
                {/* Overview */}
                <p className="text-sm text-gray-700 mb-6">
                  {selectedMovie.overview.length > 200
                    ? `${selectedMovie.overview.slice(0, 200)}...`
                    : selectedMovie.overview}
                </p>
        
                {/* Action Buttons */}
                <div className="flex justify-center gap-4">
                  <button
                    // onClick={() => setMovieId(selectedMovie?.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                  >
                    Watch Trailer
                  </button>
                  <button
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400"
                  >
                    More Information
                  </button>
                </div>
              </div>
              )}

              {/* Trailer Tab */}
              {activeTab === "trailer" && (
                <div className="w-full p-6 flex justify-center items-center bg-black">
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${movieTrailerId}?autoplay=1`}
                    title="Movie Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default SearchMoviePoster;
