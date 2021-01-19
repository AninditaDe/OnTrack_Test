import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import "./custom.scss";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/:page?" component={App}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
