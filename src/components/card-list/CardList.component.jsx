import React from "react";
import Card from "../Card/Card.component";
import "./CardList.style.css";

const CardList = (props) => {
  //   console.log(props);
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
