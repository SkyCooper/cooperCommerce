import React from "react";
import Product from "./Product";

const CardContainer = ({ card }) => {
  return (
    <div>
      {card.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CardContainer;
