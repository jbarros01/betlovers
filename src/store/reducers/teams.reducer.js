/* eslint-disable import/no-anonymous-default-export */

import {
  SEARCH_TEAM,
  SEARCH_TEAM_SUCCESS,
  SEARCH_TEAM_FAILED,
  CLEAR_FILTERED_TEAMS
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
      return {
        ...state,
        filteredTeams: [
          ...state.filteredTeams,
          ...action.payload.filteredTeams
        ],
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
    case CLEAR_FILTERED_TEAMS: {
      return {
        ...state,
        filteredTeams: initialState.filteredTeams
      };
    }

    default:
      return state;
  }
}

export const getTeams = state => state.entities.teams;
export const getFilteredTeams = state => getTeams(state).filteredTeams;
export const getTeam = (state, teamId) =>
  getFilteredTeams(state).find(team => team.team_id === Number(teamId));
