import React from "react";
import Category from "./category";
import { useState } from "react";
import Rating from "./Rating";

const Aside = (data) => {
  const { products } = data;
  const [categoryArray, setCategoryArray] = useState([]);
  let [ratingArray, setRatingArray] = useState([]);
  const addToCategory = (item) => {
    setCategoryArray([...categoryArray, item]);
  };
  const addToRating = (item) => {
    setRatingArray([...ratingArray, item].sort((a, b) => a - b));
  };
  products.forEach((item) => {
    categoryArray.includes(item["category"]) || addToCategory(item.category);
    ratingArray.includes(Math.floor(item["rating"]["rate"])) ||
      addToRating(Math.floor(item.rating.rate));
  });
  return (
    <aside>
      <div className="category">
      <h3>Category</h3>
        {categoryArray.map((item, index) => {
          return <Category category={item} key={index} />;
        })}
        <div className="price">
          <h3 className="mt-4">Price</h3>
          <div className="price d-flex">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="lowest price"
              style={{ height: "28px", weight: "20px" }}
            />
            -
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="highest price"
              style={{ height: "28px", weight: "20px" }}
            />
            <i
              className="fa-solid fa-magnifying-glass-dollar ms-2 pt-1"
              style={{ height: "50px" }}
            ></i>
          </div>
        </div>
        <div className="rating mt-4">
          <h3>Rating</h3>
          {ratingArray.map((rate, index) => {
            return <Rating rates={rate} key={index} />;
          })}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
