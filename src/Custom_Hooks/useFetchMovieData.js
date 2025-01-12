import { useEffect, useState } from 'react'
import axios from "axios";
import { options } from '../utils/url';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/Slices/useMoviesSlice';

export const useFetchMovieData = () => {
    const dispatch = useDispatch();
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        // Fetch movie data
        const getData = async () => {
          try {
            const response = await axios.request(options);
            setMovieData(response.data);
            dispatch(addNowPlayingMovies(response.data.results));
          } catch (err) {
            console.error("Error fetching data:", err);
          }
        };
        
        getData();
      }, [dispatch]);

    return movieData?.results;
}
