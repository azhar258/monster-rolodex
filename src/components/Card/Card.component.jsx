import React from "react";
import "./Card.style.css";

const Card = (props) => {
  const { monster } = props;
  return (
    <div className="container-component">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt="monster-image"
      />
      <h3>{monster.name}</h3>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
