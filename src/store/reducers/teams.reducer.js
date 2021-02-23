/* eslint-disable import/no-anonymous-default-export */

import {
  SEARCH_TEAM,
  SEARCH_TEAM_SUCCESS,
  SEARCH_TEAM_FAILED
} from "../actions/actionTypes";

const initialState = {
  filteredTeams: [],
  error: null,
  isSearching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_TEAM: {
      return {
        ...state,
        isSearching: true
      };
    }
    case SEARCH_TEAM_SUCCESS: {
      debugger;
      return {
        ...state,
        filteredTeams: [ ...action.payload.filteredTeams ],
        isSearching: false
      };
    }
    case SEARCH_TEAM_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isSearching: false
      };
    }
    default:
      return state;
  }
}

export const getTeams = state => state.entities.teams;
export const getFilteredTeams = state => getTeams(state).filteredTeams;
