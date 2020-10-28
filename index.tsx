import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";

import { ProductsContextProvider } from "./ProductsContext";
import { ProductInfo } from "./components/ProductInfo";

import "./style.css";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <ProductsContextProvider>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/productinfo/:id">
              <ProductInfo />
            </Route>
          </ProductsContextProvider>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
