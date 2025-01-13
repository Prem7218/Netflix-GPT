import React from 'react';
import "../../App.css";
import { IMG_CDN_URL } from '../../utils/url';

    const DiffMovieList = ({ movies }) => {
    const categories = [
    {
        title: "Upcoming Movies",
        movieList: movies?.movUpc,
        layout: "vertical",
        styles: {
        hoverEffect: "hover:scale-105 hover:shadow-2xl",
        },
    },
    {
        title: "Top Rated Movies",
        movieList: movies?.movTop,
        layout: "circle",
        styles: {
        hoverEffect: "hover:ring-2 ring-blue-400",
        glowEffect: "hover:ring-blue-600",
        },
    },
    {
        title: "Popular Movies",
        movieList: movies?.movPop,
        layout: "horizontal",
        styles: {
        hoverEffect: "hover:translate-y-1 hover:scale-105 hover:shadow-lg",
        },
    },
    ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900">
      {categories.map(({ title, movieList, layout, styles }, index) => {
        if (!movieList || movieList.length === 0) return null;

        return (
          <div key={index} className="mb-8">
            {/* Category Header */}
            <h1 className="px-8 py-4 text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 text-transparent bg-clip-text">
              {title}
            </h1>

            {/* Layout Variations */}
            <div
              className={`flex ${
                layout === "vertical"
                  ? "scrol flex-row items-stretch gap-x-6"
                  : "scrol gap-x-6 px-8 overflow-x-auto scrollbar-hide"
              }`}
            >
              {movieList.map((movie) => {
                const { id, original_title, poster_path } = movie;

                return layout === "circle" ? (
                  // Circle Layout
                  <div
                    key={id}
                    className={`group relative flex-shrink-0 w-40 h-40 hover:w-64 hove:h-45 rounded-md shadow-lg overflow-hidden transition-all duration-300 ${styles.hoverEffect}`}
                  >
                    {/* Circular Image */}
                    <div
                      className="absolute inset-0 bg-cover rounded-lg"
                      style={{
                        backgroundImage: `url(${IMG_CDN_URL}${poster_path})`,
                      }}
                    ></div>
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-full border-2 border-transparent transition-all duration-300 ${styles.glowEffect}`}
                    ></div>
                    {/* Title on Hover */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 px-3 py-1 rounded-md text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {original_title}
                    </div>
                  </div>
                ) : layout === "vertical" ? (
                  // Vertical Layout
                  <div
                    key={id}
                    className={`group relative flex-shrink-0 w-72 h-96 rounded-lg shadow-lg overflow-hidden bg-gray-800 transform transition-all duration-300 ${styles.hoverEffect}`}
                >
                    <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${IMG_CDN_URL}${poster_path})`,
                    }}
                    ></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-70">
                    <h3 className="text-lg font-bold text-white">{original_title}</h3>
                    </div>
                </div>
                ) : (
                  // Horizontal Layout
                  <div
                    key={id}
                    className={`group relative flex-shrink-0 w-64 h-40 rounded-lg shadow-lg overflow-hidden bg-gray-800 transform transition-all duration-300 ${styles.hoverEffect}`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${IMG_CDN_URL}${poster_path})`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white font-medium">
                      {original_title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DiffMovieList;