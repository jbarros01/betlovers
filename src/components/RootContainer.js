import React from "react"
import { Route, Switch } from "react-router-dom"
import Homepage from "./Homepage"

import NotMatch from "../pages/NotMatch"
import Navbar from "./Navbar";

const RootContainer = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  </>
);

export default RootContainer
