import axios from "axios";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/Tracking/TrackingPage";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/api/cart-items?expand=product")
  //     .then((response) => {
  //       setCart(response.data);
  //     });
  // }, []);

  // design a function indie useEffect so that the async is applied to this funtion.
  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/cart-items?expand=product"
      );
      setCart(response.data);
    };

    fetchAppData();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
