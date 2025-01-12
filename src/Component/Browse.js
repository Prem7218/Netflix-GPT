import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFetchMovieData } from "../Custom_Hooks/useFetchMovieData";
import MainComponent from "./MoviesData/MainComponent";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const movieData = useFetchMovieData();

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

  return (
    <>
      <Header />
      <div className="flex flex-row justify-end relative right-8 top-3">
        <img
          className="rounded-md z-10 w-12 h-12 absolute"
          alt="userIcon"
          src={user?.photoURL}
        />
        <button
          onClick={handleSignOut}
          className="flex z-10 relative top-11 left-2 bg-black text-white font-bold rounded-md"
        >
          SignOut
        </button>
      </div>

      <MainComponent />
    </>
  );
};

export default Browse;
