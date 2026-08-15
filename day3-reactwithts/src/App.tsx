import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import type { Product } from "./types";

const App = () => {
  const [productsData, setProductsData] = useState<Product[]>([]);
  let getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);
    setProductsData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productsData.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
};

export default App;
