import React, { Component } from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { About } from "./components/About";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
