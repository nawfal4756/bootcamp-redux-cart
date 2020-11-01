import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import MenuBar from "../MenuBar/MenuBar";
import ProductInfo from "../Store/ProductInfo";
import Store from "../Store/Store";
import StoreList from "../Store/StoreList";

export default function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />}>
          <Route path="/" element={<StoreList />} />
          <Route path=":id" element={<ProductInfo />} />
        </Route>
      </Routes>
    </Router>
  );
}
