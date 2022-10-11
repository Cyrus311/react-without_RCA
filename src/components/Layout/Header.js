import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../modalSlice";
import { FaRegGrinStars, FaHome } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.favorites);

  const toggleModalHandler = () => {
    dispatch(toggle());
  };

  return (
    <header className="header">
      <Link to="/">
        <FaHome /> Home
      </Link>
      <ul>
        <li>
          <a className="button" onClick={toggleModalHandler}>
            <FaRegGrinStars /> Favorites <span className="badge">{count}</span>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
