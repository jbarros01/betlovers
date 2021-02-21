/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
import games from "./games";

export default {
  entities: combineReducers({ games })
};
