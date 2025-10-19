import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./HomePage.css";

import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);
  // lifted up to App.jsx for shareing between two .jsx.
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   //the then() in axios is equal to the two then() in fetch combined.
  //   // use empty [] dependency array means the code will run only once after the component is created.
  //   axios.get("http://localhost:3000/api/products").then((response) => {
  //     setProducts(response.data);
  //   });
  // }, []);

  // use async await
  // show that the lambda function is async, so that we can use await. However, if the async is put for the first lambda function, the labmda function will return a promise, and useEffect does not expect that. Function directly inside useEffect should return nothing or a cleaning function.
  // useEffect(async () => {
  //   // use await
  //   const response = await axios.get("http://localhost:3000/api/products");
  //   setProducts(response.data);
  // }, []);

  useEffect(() => {
    // Alternative solution: define a function inside which use async. Function definition:
    const getHomeData = async () => {
      const response = await axios.get("http://localhost:3000/api/products");
      setProducts(response.data);
    };

    // call the defined function.
    getHomeData();
  }, []);

  // fetch, low level api, asyn returns a response which needs time to parse.
  // fetch("http://localhost:3000/api/products")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  return (
    <>
      <Header cart={cart} />

      <title>Ecommerce Project</title>
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
