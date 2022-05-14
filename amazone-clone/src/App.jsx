import {useState} from "react";
import logo from "./logo.svg";
import "./App.css";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/*default route always shoulbe at bottom  */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
