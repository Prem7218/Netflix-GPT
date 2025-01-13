import { useEffect, useState } from 'react'
import axios from "axios";
import { movieURLs, options } from '../utils/url';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addPopPlayingMovies, addTopPlayingMovies, addUpcPlayingMovies } from '../utils/Slices/useMoviesSlice';

export const useFetchMovieData = (movie_select) => {
    const dispatch = useDispatch();
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        // Fetch movie data
        const getData = async () => {
          try {
            const response = await axios.request(movieURLs + movie_select, options);
            setMovieData(response.data);
            if(movie_select === "now_playing") {
              dispatch(addNowPlayingMovies(response.data.results));
            }
            else if(movie_select === "popular") {
              const data = response.data.results.reverse();
              dispatch(addPopPlayingMovies(data));
            }
            else if(movie_select === "top_rated") {
              dispatch(addTopPlayingMovies(response.data.results));
            }
            else {
              dispatch(addUpcPlayingMovies(response.data.results));
            }
          } catch (err) {
            console.error("Error fetching data:", err);
          }
        };
        
        getData();
      }, [dispatch, movie_select]);

    return movieData?.results;
}
