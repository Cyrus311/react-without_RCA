import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../modalSlice";
import Modal from "../UI/Modal";
import List from "../UI/List";
import FavoriteItem from "./FavoriteItem";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.favorites);

  const toggleModalHandler = () => {
    dispatch(modalActions.toggle());
  };

  const favoriteList = (
    <List>
      {favorites.map((item) => (
        <FavoriteItem key={item.id} item={item} />
      ))}
    </List>
  );
  return (
    <Modal onClick={toggleModalHandler}>
      <div className="favorite">
        <div>
          {favorites?.length > 0 ? (
            favoriteList
          ) : (
            <h2>No favorite movies yet!</h2>
          )}
        </div>
        <div className="actions">
          <button className="btn" onClick={toggleModalHandler}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Favorites;
