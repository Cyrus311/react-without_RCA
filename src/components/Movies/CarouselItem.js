import React from "react";
import { useNavigate } from "react-router-dom";

const CarouselItem = ({ image, movieId, categoryId }) => {
  const navigate = useNavigate();

  const onNav = () => {
    navigate("/detail", {
      state: {
        movieId,
        categoryId
      }
    });
  };

  return <img width="100%" src={image} onClick={onNav} />;
};

export default CarouselItem;
