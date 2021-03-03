import React from "react"

import { Route, Switch } from "react-router-dom"

import Homepage from "./Homepage"
import TeamInfo from "./TeamInfo"
import LastFixtures from "./LastFixtures"
import NextFixtures from "./NextFixtures"
import TeamStandings from "./TeamStandings"
import League from "./League"
import NotMatch from "./NotMatch"
import Navbar from "../components/Navbar"

import {
  HOME,
  TEAM_INFO,
  TEAM_LAST_FIXTURES,
  TEAM_NEXT_FIXTURES,
  TEAM_STANDINGS,
  LEAGUE
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
      <Route exact path={TEAM_STANDINGS}>
        <TeamStandings />
      </Route>
      <Route exact path={LEAGUE}>
        <League />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  </>
);

export default Root
