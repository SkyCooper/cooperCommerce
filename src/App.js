import { useState } from "react";
import CardContainer from "./components/CardContainer";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import { data as products } from "./helpers/data";
import Aside from "./components/Aside/aside";

function App() {
  const [card, setCard] = useState([]);
  // console.log(products);
  const addToCart = (newCard) => {
    console.log("product clicked", newCard);
    setCard([...card, newCard]);
  };
  console.log(card);

  const removeCard = (id) => {
    console.log(id);
    const filteredCard = card.filter((item) => item.id !== id);
    setCard(filteredCard);
  };

  return (
    <div>
      <Navbar cardTotal={card.length} />
      <div style={{ height: "90px" }}></div>
      <div className="container">
        <h1 className="text-center">Bizim Store</h1>
        <div className="col d-flex">
          <Aside className="row-1" products={products} />
          <div className="row justify-content-center g-3">
            {products.map((product) => {
              return (
                <Product
                  addToCart={addToCart}
                  key={product.id}
                  {...product}
                  product={true}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-5 justify-content-center g-3">
          <h2 className="text-center display-1 text-danger">CART</h2>
          <CardContainer product={false} removeCard={removeCard} card={card} />
        </div>
      </div>
    </div>
  );
}

export default App;
