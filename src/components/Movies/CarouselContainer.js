import React, { useEffect, useState } from "react";
import Carousel from "better-react-carousel";
import CarouselItem from "./CarouselItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../UI/Spinner";

const CarouselContainer = ({ categoryId }) => {
  const navigate = useNavigate();
  const [filteredMovies, setFilteredMovies] = useState([]);

  const { movies, isLoading, isError, message } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    if (isError) {
      console.log("Error:", message);
    }
    if (movies) {
      setFilteredMovies(
        movies.slice().filter((x) => x.genre_ids.includes(categoryId))
      );
    }
  }, [navigate, isError, message, movies]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Carousel cols={4} rows={1} gap={5} loop>
      {filteredMovies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <CarouselItem
            image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            movieId={movie.id}
            categoryId={categoryId}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default CarouselContainer;
