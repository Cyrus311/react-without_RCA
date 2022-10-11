import React from "react";

const InfoArea = ({ overview, title }) => {
  return (
    <article>
      <h3>{title}</h3>
      <section>{overview}</section>
    </article>
  );
};

export default InfoArea;
