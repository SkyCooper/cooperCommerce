import Card from "./components/Card";
import { data as products } from "./helpers/data";

function App() {
  console.log(products);
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Bizim Store</h1>
        <div className="row justify-content-center g-3">
          {products.map((product) => {
            return <Card key={product.id} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
