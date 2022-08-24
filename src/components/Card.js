import React from "react";

const Card = (props) => {
  return (
    <div className="character--card container shadow">
      <img
        className="character--image"
        alt={props.name}
        src={props.image}
      ></img>
      <div className="card--text container">
        <span className={props.status === "Alive" ? "alive" : "else"}>
          {props.status}
        </span>
        <h1 className="name">{props.name}</h1>
        <h3 className="info--text">
          <span>🟤</span>
          &#160;{props.species}&#160;{props.gender}
        </h3>{" "}
        <span>Location</span>
        <a href={props.location.url}>{props.location.name}</a>
        {/* <span>Episode</span>
      <a href={props.episode}>{props.location.name}</a> */}
      </div>
    </div>
  );
};

export default Card;
