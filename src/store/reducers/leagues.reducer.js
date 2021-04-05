/* eslint-disable import/no-anonymous-default-export */

import {
  FETCH_TEAM_LEAGUE_STANDINGS,
  FETCH_TEAM_LEAGUE_STANDINGS_SUCCESS,
  FETCH_TEAM_LEAGUE_STANDINGS_FAILED
} from "../actions/actionTypes";

const initialState = {
  teamLeagueStandings: {},
  error: null,
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TEAM_LEAGUE_STANDINGS: {
      return {
        ...state,
        isFetching: true
      };
    }
    case FETCH_TEAM_LEAGUE_STANDINGS_SUCCESS: {
      return {
        ...state,
        teamLeagueStandings: {
          ...state.teamStandings,
          [action.payload.teamId]: action.payload.teamLeagueStandings
        },
        isFetching: false
      };
    }
    case FETCH_TEAM_LEAGUE_STANDINGS_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isFetching: false
      };
    }
    default:
      return state;
  }
}

export const getLeagues = state => state.entities.leagues;
export const getTeamLeagueStandings = (state, teamId) => getLeagues(state).teamLeagueStandings[teamId];
