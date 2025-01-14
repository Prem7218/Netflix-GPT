import { useEffect, useState } from "react";
import axios from "axios";
import { movieURLs, options } from "../utils/url";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/Slices/useMoviesSlice";

export const useMovieBackground = (id) => {
  const dispatch = useDispatch();
  const [movieVideoKey, setMovieVideoKey] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.request({
          ...options,
          url: `${movieURLs}${id}/videos`,
        });

        const trailerVideos = data?.results.filter(
          (trailer) => trailer.type === "Trailer"
        );
        const trailer = trailerVideos.length? trailerVideos[0] : data?.results[0];
        setMovieVideoKey(trailer);
        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.log("The Error: ", error);
      }
    };

    fetchData();
  }, [id, dispatch]);

  return movieVideoKey?.key;
};

