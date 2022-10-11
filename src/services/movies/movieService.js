import request from "../apiCentral";

//! Get movies by query
const getMoviesByQuery = async (query) => {
  return await request(
    {
      url: "/search/movie",
      method: "GET",
      params: { query: query }
    },
    false
  );
};

//! Get movie detail
const getMovieDetail = async (movieId) => {
  return await request(
    {
      url: `/movie/${movieId}`,
      method: "GET"
    },
    false
  );
};

const movieService = { getMoviesByQuery, getMovieDetail };

export default movieService;
