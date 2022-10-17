import { useState } from "react";
import CardContainer from "./components/CardContainer";
import Product from "./components/Product";
import { data as products } from "./helpers/data";

function App() {
  const [card, setCard] = useState([]);
  // console.log(products);
  const addToCart = (newCard) => {
    console.log("product clicked", newCard);
    setCard([...card, newCard]);
    console.log(card);
  };
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Bizim Store</h1>
        <div className="row justify-content-center g-3">
          {products.map((product) => {
            return (
              <Product addToCart={addToCart} key={product.id} {...product} />
            );
          })}
        </div>
        <div className="mt-5">
          <h2 className="display-1 text-danger text-center" >CART</h2>
          <CardContainer card={card}/>
        </div>
      </div>
    </div>
  );
}

export default App;
