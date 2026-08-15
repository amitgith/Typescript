import axios from "axios";
import React, { useEffect, useState } from "react";
import {} from "module";
import ProductCard from "./components/ProductCard";

const App = (props: Props) => {
  const [productsData, setProductsData] = useState([]);
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
