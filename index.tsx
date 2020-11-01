import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import { ProductsContextProvider } from "./ProductsContext";
import { ProductInfo } from "./components/ProductInfo";
import { PageNotFound } from "./components/PageNotFound";
import { NewsBanner } from "./components/NewsBanner";
import { MyCart } from "./components/MyCart";
import { Login } from "./components/Login";
import { Footer } from "./components/Footer";
import "./style.css";
import { BacktoTop } from "./components/BacktoTop";
import { NewProduct } from "./components/NewProduct";

const App: React.FC = () => {
  return (
    <ProductsContextProvider>
      <div>
        <Router>
          <Nav />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/productinfo/:id">
              <ProductInfo />
            </Route>
            <Route exact path="/mycart">
              <MyCart />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/newproduct">
              <NewProduct />
            </Route>

            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
        <BacktoTop />
        <Footer />
      </div>
    </ProductsContextProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
