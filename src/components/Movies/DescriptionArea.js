import React from "react";

const DescriptionArea = ({ movie }) => {
  const { original_title, release_date, budget, homepage, status, revenue } =
    movie;
  return (
    <section className="descriptionArea">
      <p>
        <b>Title:</b> {original_title}
      </p>
      <p>
        <b> Release Date:</b>
        {new Date(release_date).toLocaleDateString("de-DE")}
      </p>
      <p>
        <b> Budget:</b> ${budget}
      </p>
      <p>
        <b> Revenue:</b> ${revenue}
      </p>
      <p>
        <b> Status:</b> {status}
      </p>
    </section>
  );
};

export default DescriptionArea;
