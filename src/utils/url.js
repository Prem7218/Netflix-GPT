
export const LOGO =
  "https://i.ibb.co/c86JgHx/Blue-Red-and-Yellow-Gradient-Influencer-Celebrating-Follower-Count-Instagram-Post-1.png";

export const BANNER =
  "https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg";

export const USERICON = "https://avatars.githubusercontent.com/u/161498035?v=4";

export const options = {
  method: "GET",
  url: "https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/now_playing",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjllY2Q2MGU3Njk4ZDJjOGNhODZkYmE5NDUzMWY4YSIsIm5iZiI6MTczNjU3MzY4NS4wNzYsInN1YiI6IjY3ODIwMmY1NjA1NjU4NmY2YzRlNmFmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z5atKawG4OpKny2Z-Q6e76pZTRssvM0Ago49YO3CHUM",
  },
};