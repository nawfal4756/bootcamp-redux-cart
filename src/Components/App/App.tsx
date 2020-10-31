import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import MenuBar from "../MenuBar/MenuBar";

export default function App() {
  return (
    <Router>
      <MenuBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
