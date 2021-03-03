/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
import teams from "./teams.reducer";
import fixtures from "./fixtures.reducer";
import leagues from "./leagues.reducer";

export default {
  entities: combineReducers({ teams, fixtures, leagues })
};
