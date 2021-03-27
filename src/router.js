import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home/index";
import Products from "./components/Products/index";
import NotFound from "./components/404/index";

function RouterSwitch() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/404">
          <NotFound />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </>
  );
}

export default RouterSwitch;
