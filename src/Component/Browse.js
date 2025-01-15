import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFetchMovieData } from "../Custom_Hooks/useFetchMovieData";
import MainComponent from "./MoviesData/MainComponent";
import SecondData from "./ScondPartMovieList/SecondData";
import GptSearch from "./GPTSearch/GptSearch";
import { checkClickView } from "../utils/Slices/gptSlice";
import SearchMoviePoster from "./GPTSearch/SearchMoviePoster";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const checkGptClick = useSelector((store) => store.gpt?.checkView);
  const movieData       = useFetchMovieData("now_playing");
  const moviePopularMov = useFetchMovieData("popular");
  const movieTopMov     = useFetchMovieData("top_rated");
  const movieUpcMov     = useFetchMovieData("upcoming");
  if(!movieData || !moviePopularMov || !movieTopMov || !movieUpcMov) return null;

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(checkClickView());
  }

  return (
    <>
      <Header />
      <div className="flex flex-row justify-end absolute z-15 right-8 top-3">
        <button onClick={handleGptSearch}
          className="absolute right-14 top-1 flex z-10 p-3 mx-3 bg-red-700 text-white hover:bg-red-900 rounded-md"
        >
          {checkGptClick ? "Home" : "GptSearch"}
        </button>

        <img
          className="rounded-md z-20 w-12 h-12 absolute"
          alt="userIcon"
          src={user?.photoURL}
        />
        <button
          onClick={handleSignOut}
          className="flex z-10 relative p-1 left-3 mt-12 bg-black text-white font-bold rounded-md"
        >
          SignOut
        </button>
      </div>

      {checkGptClick ? <><GptSearch /><SearchMoviePoster /></> : <MainComponent /> }
      <SecondData />
    </>
  );
};

export default Browse;
