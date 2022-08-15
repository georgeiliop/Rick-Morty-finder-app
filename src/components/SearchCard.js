import React from "react";

const SearchCard = (props) => {
  return (
    <div className="character--card--search container">
      <img
        className="character--image--search"
        alt={props.name}
        src={props.image}
      ></img>
      <div className="card--text container">
        <h1 className="">{props.name}</h1>
      </div>
    </div>
  );
};

export default SearchCard;
