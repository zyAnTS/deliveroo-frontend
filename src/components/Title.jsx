import React from "react";

const Title = ({ data }) => {
  return (
    <div className="title">
      <div className="container">
        <div className="store">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <img
          src={data.restaurant.picture}
          alt="Photo de présentation du restaurant"
        />
      </div>
    </div>
  );
};

export default Title;
