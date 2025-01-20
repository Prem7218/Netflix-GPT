export const SEARCH_TEXT = "Work like movie recommandation system & give top 5 movie on topic only name's in comma seprated list:";
export const herocu      = "https://cors-anywhere.herokuapp.com/";
export const thinkproxy  = "https://thingproxy.freeboard.io/fetch/";
export const tmdb        = `https://api.themoviedb.org/3/`
export const loadings    = "/movie/day?language=en-US";
export const load1       = "?language=en-US&page=1"; 
export const proxy       = (herocu || thinkproxy);
export const lastOne     = (load1);

export const LOGO =
  "https://i.ibb.co/c86JgHx/Blue-Red-and-Yellow-Gradient-Influencer-Celebrating-Follower-Count-Instagram-Post-1.png";

export const BANNER =
  "https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg";

export const USERICON = "https://avatars.githubusercontent.com/u/161498035?v=4";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export let movieURLs = `${proxy}${tmdb}movie/`;
const TMDB_API_KEY = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjllY2Q2MGU3Njk4ZDJjOGNhODZkYmE5NDUzMWY4YSIsIm5iZiI6MTczNjU3MzY4NS4wNzYsInN1YiI6IjY3ODIwMmY1NjA1NjU4NmY2YzRlNmFmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z5atKawG4OpKny2Z-Q6e76pZTRssvM0Ago49YO3CHUM";

export const YOUTUBE_URL = "https://www.youtube.com/iframe_api";

export const options = {
  method: "GET",
  url: movieURLs,
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: TMDB_API_KEY,
  },
};

export const TMDB_URL = `${tmdb}search/movie?query=`;
export const TMDB_URL2= "&include_adult=false&language=en-US&page=1";
export const options1 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: TMDB_API_KEY,
  }
};

export const OPENAI_API_KEY = "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";
export const GEMINI_API_KEY = "AIzaSyDUKSD5oosg6tG_bj6c2r3bZq-wnKcbZuU";