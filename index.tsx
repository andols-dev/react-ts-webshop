import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { ProductsContextProvider } from "./ProductsContext";
import { ProductInfo } from "./components/ProductInfo";
import { PageNotFound } from "./components/PageNotFound";

import "./style.css";
import { NewsBanner } from "./components/NewsBanner";
import { MyCart } from "./components/MyCart";
import { Login } from "./components/Login";

const App: React.FC = () => {
  return (
    <ProductsContextProvider>
      <div>
        <Router>
          <NewsBanner />
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/productinfo/:id">
              <ProductInfo />
            </Route>
            <Route path="/mycart">
              <MyCart />
            </Route>
            <Route to="/login">
              <Login />
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
