import React from "react";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../services/favorites/favoriteSlice";
import { FaTrashAlt } from "react-icons/fa";

const FavoriteItem = ({ item }) => {
  const dispatch = useDispatch();

  const { title, poster, releaseDate, rating, id } = item;

  const removeItemHandler = () => {
    dispatch(deleteFavorite(id));
  };

  return (
    <li className="item">
      <div className="item__image">
        <img src={`https://image.tmdb.org/t/p/w200/${poster}`} alt="Poster" />
      </div>
      <div className="item__content">
        <h4> {title} </h4>
        <p> {new Date(releaseDate).toLocaleDateString("de-DE")}</p>
        <p>{rating.toFixed(2)}</p>
      </div>
      <button className="item__button" onClick={removeItemHandler}>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default FavoriteItem;
