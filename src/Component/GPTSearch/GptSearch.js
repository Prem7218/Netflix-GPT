import React, { useState } from 'react';
import { BANNER, GEMINI_API_KEY, herocu, options1, SEARCH_TEXT, TMDB_URL } from '../../utils/url';
import langOption from "./LangPack.json"
// import { OPEN_AI_Client } from './utils/OPEN_AI_Client';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addGptSearchMovie } from '../../utils/Slices/useMoviesSlice';
// Import the SDK
const { GoogleGenerativeAI } = require('@google/generative-ai');


const GptSearch = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState("Search");
  const [placeholder, setPlace] = useState("Search Your Favorite Movie");
  const [movieArray, setMovieArray] = useState([]);

// For Gemini Student's:

  const handleSearch =async () => {
    try {
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash", // Specify the model you want to use
      });

      const prompt = `${SEARCH_TEXT}${searchQuery}`;
      const result = await model.generateContent(prompt);
      const responceText = result.response.text().split(",").map((item) => item.trim());
      setMovieArray(responceText);
      console.log("Text: ", movieArray);
      const promise =await fetchSearchMovie(responceText[0]);
      console.log("Found: ", promise);
      // const promiseArray =movieArray.map((movie) => fetchSearchMovie(movie));
      // const finalPromiseResult =await Promise.all(promiseArray);
      // console.log(finalPromiseResult);

    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  }

// For Chat GPT Student's: 

  // const handleSearch =async (event) => {
  //   setSearchQuery(event.target.value);
  //   const searchContent = `Act as movie recommendation system for next query: ${searchQuery} Only Give Top 5 Movie with Comma Seprate List. Example of Result :  Sholy, Bharat, Jawan, Pushpa, Pushpa 2`;
  //     const chatCompletion = await OPEN_AI_Client.chat.completions.create({
  //       messages: [{ role: 'user', content: searchContent }],
  //       model: 'gpt-3.5-turbo',
  //     });

  //     console.log("Result: ", chatCompletion.choices)
  // };

  const fetchSearchMovie =async (movie) => {
    try {
        const response = await fetch((herocu || "https://thingproxy.freeboard.io/fetch/") + TMDB_URL + `${movie}&include_adult=false&language=en-US&page=1`, options1);

        const data =await response.json();
        return data?.results || [];
    } catch (e) {
        console.log("Error is Coming: ",e);
        return [];
    }
}

  const handleLangOptionChange = (event) => {
    const selectedLangCode = event.target.value; // Get selected value
    const selectedLang = langOption.lang.find(
      (item) => item.langCode === selectedLangCode
    );

    if (selectedLang) {
      setPlace(selectedLang.placeholder);
      setSearch(selectedLang.search);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start relative"
        style={{ backgroundImage: `url(${BANNER})`}}
    >
        <h1 className="text-2xl text-white font-bold mb-4 top-[6rem] relative z-30">GPT Search</h1>
        
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center w-[60%] bg-white shadow-md rounded-lg overflow-hidden top-[6rem] relative z-30"
        >
        {/* Language Dropdown */}
        <select
          className="z-30 px-3 py-3 will-change-contents bg-red-600 text-white hover:text-black font-semibold hover:bg-white focus:outline-none rounded-l-lg"
          onChange={handleLangOptionChange} 
        >
          <option value="" disabled selected>
            Select
          </option>
          {langOption.lang.map((item) => (
            <option key={item.langCode} value={item.langCode}>
              {item.lang}
            </option>
          ))}
        </select>

        <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
            placeholder={placeholder}
        />

        <button
            type="submit"
            onClick={handleSearch}
            className="px-4 py-2 bg-red-600 text-white font-semibold hover:bg-red-900"
        >
          {search}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
