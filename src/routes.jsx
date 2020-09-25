import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";

function Routes() {
  return (
    <Switch>
      <Route exact path='/home' component={Home} />
      <Route exact path='/about' component={About} />
      <Redirect from='/' to='/home' />
    </Switch>
  );
}

export default Routes;
