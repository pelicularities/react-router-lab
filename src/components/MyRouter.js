import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NavLinks from "./NavLinks";
import HomePage from "./HomePage";
import TwitterFeed from "./TwitterFeed";
import TacoFeed from "./TacoFeed";
import TacoDetail from "./TacoDetail";
import SpecialTacoPage from "./SpecialTacoPage";

export default function MyRouter() {
  return (
    <BrowserRouter>
      <NavLinks />
      <Switch>
        <Route path="/specialTacoPage" component={SpecialTacoPage} />
        <Redirect from="/tacos/42" to="/specialTacoPage" />
        <Route path="/tacos/:id" component={TacoDetail} />
        <Route path="/tacos" component={TacoFeed} />
        <Route path="/twitter" component={TwitterFeed} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
