import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import shopServer from "../../Mirage";
import Home from "../Home/Home";
import MenuBar from "../MenuBar/MenuBar";
import ProductInfo from "../Store/ProductInfo";
import Store from "../Store/Store";
import StoreList from "../Store/StoreList";
import StoreListOutlet from "../Store/StoreListOutlet";
import StoreOutlet from "../Store/StoreOutlet";
import { useStyles } from "./App.styles";

shopServer();

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<StoreOutlet />}>
            <Route path="/" element={<Store />} />
            <Route path=":category" element={<StoreListOutlet />}>
              <Route path="/" element={<StoreList />} />
              <Route path=":id" element={<ProductInfo />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
