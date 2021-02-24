import React from "react"

import { Route, Switch } from "react-router-dom"

import Homepage from "./Homepage"
import TeamInfo from "./TeamInfo"
import LastFixtures from "./LastFixtures"
import NextFixtures from "./NextFixtures"
import NotMatch from "./NotMatch"
import Navbar from "../components/Navbar"

import {
  HOME,
  TEAM_INFO,
  TEAM_LAST_FIXTURES,
  TEAM_NEXT_FIXTURES
} from "../utils/routes"

const Root = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path={HOME}>
        <Homepage />
      </Route>
      <Route exact path={TEAM_INFO}>
        <TeamInfo />
      </Route>
      <Route exact path={TEAM_LAST_FIXTURES}>
        <LastFixtures />
      </Route>
      <Route exact path={TEAM_NEXT_FIXTURES}>
        <NextFixtures />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  </>
);

export default Root
