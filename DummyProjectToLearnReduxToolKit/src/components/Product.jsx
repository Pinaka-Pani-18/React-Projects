import { useEffect } from "react";
import Card from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);

  useEffect(() => {
    // api
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
    //
    // dispatch an action for fetchProducts
    dispatch(getProducts());
  }, [dispatch]);

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
