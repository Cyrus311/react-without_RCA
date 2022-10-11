import React, { useEffect } from "react";
import Carousel from "../components/Movies/CarouselContainer";
import { useDispatch } from "react-redux";
import { getMoviesByQuery } from "../services/movies/movieSlice";
import { getFavorites } from "../services/favorites/favoriteSlice";
import { genreList } from "../utils/genreList";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesByQuery("game"));
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <>
      {genreList.map((genre) => (
        <div key={genre.id}>
          <h1>{genre.name}</h1>
          <Carousel categoryId={genre.id} />
        </div>
      ))}
    </>
  );
};

export default Dashboard;
