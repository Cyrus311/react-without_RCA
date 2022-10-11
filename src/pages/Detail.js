import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/UI/Spinner";
import ImageContainer from "../components/UI/ImageContainer";
import Card from "../components/UI/Card";
import DescriptionArea from "../components/Movies/DescriptionArea";
import InfoArea from "../components/Movies/InfoArea";
import { getMovieDetail, reset } from "../services/movies/movieSlice";
import { addFavorite } from "../services/favorites/favoriteSlice";

const Detail = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const categoryId = location.state.categoryId;

  console.log("!!CategoryId", props);

  const { selectedMovie, isLoading, isError, message } = useSelector(
    (state) => state.movies
  );
  useEffect(() => {
    if (isError) {
      console.log("Error:", message);
    }

    const movieId = location.state.movieId;
    if (!movieId) {
      navigate("/");
    }

    dispatch(getMovieDetail(movieId));
    return () => {
      dispatch(reset());
    };
  }, [navigate, isError, message, dispatch, location]);

  if (isLoading) {
    return <Spinner />;
  }

  const changeFontClass = (categoryId) => {
    if (categoryId === 28) return "actionClass";
    if (categoryId === 10749) return "romanceClass";
    return "";
  };

  return (
    <Card>
      <div className={`${changeFontClass(categoryId)}`}>
        <div className="wrapper">
          <ImageContainer src={selectedMovie.poster_path} />
          <div className="descriptionArea">
            <div className="buttonContainer">
              <button
                className="btn"
                onClick={() => {
                  dispatch(
                    addFavorite({
                      id: selectedMovie.id,
                      title: selectedMovie.original_title,
                      poster: selectedMovie.poster_path,
                      releaseDate: selectedMovie.release_date,
                      rating: selectedMovie.vote_average
                    })
                  );
                }}
              >
                Add Favorite
              </button>
            </div>
            <div>
              <DescriptionArea movie={selectedMovie} />
            </div>
          </div>
          <div className="infoArea">
            <InfoArea overview={selectedMovie.overview} title="Overview" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Detail;
