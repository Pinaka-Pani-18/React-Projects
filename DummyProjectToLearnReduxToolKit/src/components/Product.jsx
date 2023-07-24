import { useEffect, useState } from "react";
import Card from "./Card";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1 className="text-center">Product DashBoard</h1>
      <div className="row">
        {products.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Product;
