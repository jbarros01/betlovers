/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
import teams from "./teams.reducer";

export default {
  entities: combineReducers({ teams })
};
