import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignUp from "./Pages/LoginSignUp.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import manBanner from "./Components/Assets/banner_mens.png";
import womenBanner from "./Components/Assets/banner_women.png";
import kidBanner from "./Components/Assets/banner_kids.png";

import { useDispatch } from "react-redux";
import {
  setAllProduct,
  setData,
  setNewCollections,
} from "./redux/Slices/dataSlices.jsx";
import all_product from "./Components/Assets/all_product.js";
import data from "./Components/Assets/data";
import new_collections from "./Components/Assets/new_collections";
import { setLoading } from "./redux/Slices/dataLoading.jsx";

function App() {
  console.log("app");

  const dispatch = useDispatch();

  function FakeFetchAllProduct() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(all_product);
      }, 500);
    });
  }
  function FakeFetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });
  }
  function FakeFetchNewCollections() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(new_collections);
      }, 500);
    });
  }

  React.useEffect(() => {
    console.log("Отправка данных в REDUX");

    async function preload() {
      const allProduct = await FakeFetchAllProduct();
      const data = await FakeFetchData();
      const newCollections = await FakeFetchNewCollections();

      dispatch(setAllProduct(allProduct));
      dispatch(setData(data));
      dispatch(setNewCollections(newCollections));
      dispatch(setLoading(false));
      console.log("Загрузка данных завершена");
    }

    preload();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/man"
            element={<ShopCategory banner={manBanner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={womenBanner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kidBanner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
