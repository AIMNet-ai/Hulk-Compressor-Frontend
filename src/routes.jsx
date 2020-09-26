import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "./components/about";
import Tabbed from "./components/tabbed";

function Routes() {
  return (
    <Switch>
      <Route exact path='/home' component={Tabbed} />
      <Route exact path='/about' component={About} />
      <Redirect from='/' to='/home' />
    </Switch>
  );
}

export default Routes;
