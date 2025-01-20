import React, { useState } from 'react';

const VideoData = ({ title, overview }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <div className="absolute bottom-20 left-12 max-w-4xl text-white">
      <h1 className="text-6xl font-extrabold mb-8 drop-shadow-lg">{title}</h1>
      <p 

      className="text-xl text-gray-300 mb-8 leading-relaxed drop-shadow-lg">
        {open ? overview : ""}
      </p>
      <div>
        <button className="p-4 px-12 bg-white text-black text-xl font-semibold rounded-md shadow-lg hover:bg-red-700 transition duration-300">
          ▶ Play
        </button>
        <button 
          onClick={handleOpen}
          className="ml-6 p-4 px-12 bg-gray-700 text-white text-xl font-semibold rounded-md shadow-lg hover:bg-gray-600 transition duration-300">
          {open ? "Close" : "More Info"}
        </button>
      </div>
    </div>
  );
};

export default VideoData;
