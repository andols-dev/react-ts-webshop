import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";

import { ProductsContextProvider } from "./ProductsContext";
import { ProductInfo } from "./components/ProductInfo";
import { PageNotFound } from "./components/PageNotFound";

import "./style.css";

const App: React.FC = () => {
  return (
    <ProductsContextProvider>
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/productinfo/:id">
              <ProductInfo />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </ProductsContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
