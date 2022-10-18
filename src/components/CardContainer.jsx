import React from "react";
import Product from "./Product";

const CardContainer = ({ card, removeCard }) => {
  return (
    <div className="row">
      {card.map((item) => (
        <Product key={item.id} {...item} removeCard={removeCard} />
      ))}
    </div>
  );
};

export default CardContainer;
