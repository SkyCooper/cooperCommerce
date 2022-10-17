import React from "react";

const Product = ({ category, id, image, price, title, addToCart }) => {
  // const { category, id, image, price, title } = props;
  return (
    <div className="col">
      <div className="card m-auto" style={{ width: "18rem" }}>
        <img
          src={image}
          style={{ height: "18rem" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-truncate" title={title}>
            {title}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
        </div>
        <div className="card-body d-flex justify-content-between">
          <span className="fw-bold">{price}$</span>
          <i
            onClick={() => addToCart({ category, id, image, price, title })}
            className="fa-solid fa-cart-plus"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Product;
