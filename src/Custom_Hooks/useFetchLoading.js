import { useEffect, useState } from "react";
import { herocu, loadings, options1, thinkproxy, tmdb } from "../utils/url";

export const useFetchLoading = (TMDB_URL2) => {

    const [Loadmovie, setLoadMovie] = useState([]);

    useEffect(() => {
        if(tmdb && TMDB_URL2) {
            fetchSearchMovie();
        }
    }, [tmdb, TMDB_URL2]);
    
    const fetchSearchMovie = async () => {
        try {
            const url = (herocu || thinkproxy) + tmdb + TMDB_URL2 + loadings;
            const response = await fetch(url,options1);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const datas= data?.results || []; 
            setLoadMovie(datas);
        } catch (e) {
            console.log("Error is Coming: ", e);
        }
    };
    return Loadmovie;
};
