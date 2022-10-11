import React from "react";

const ImageContainer = ({ src }) => {
  return (
    <div className="imageContainer">
      <img
        src={`https://image.tmdb.org/t/p/w200/${src}`}
        alt="Poster"
        sizes=""
      />
    </div>
  );
};

export default ImageContainer;
