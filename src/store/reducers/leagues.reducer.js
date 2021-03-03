/* eslint-disable import/no-anonymous-default-export */

import {
  FETCH_TEAM_LEAGUES,
  FETCH_TEAM_LEAGUES_SUCCESS,
  FETCH_TEAM_LEAGUES_FAILED,
  FETCH_LEAGUE_STANDINGS,
  FETCH_LEAGUE_STANDINGS_SUCCESS,
  FETCH_LEAGUE_STANDINGS_FAILED
} from "../actions/actionTypes";

const initialState = {
  teamLeagues: {},
  leagueStandings: {},
  error: null,
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TEAM_LEAGUES: {
      return {
        ...state,
        isFetching: true
      };
    }
    case FETCH_TEAM_LEAGUES_SUCCESS: {
      return {
        ...state,
        teamLeagues: {
          ...state.teamLeagues,
          [action.payload.teamId]: action.payload.teamLeagues
        },
        isFetching: false
      };
    }
    case FETCH_TEAM_LEAGUES_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isFetching: false
      };
    }
    case FETCH_LEAGUE_STANDINGS: {
      return {
        ...state,
        isFetching: true
      };
    }
    case FETCH_LEAGUE_STANDINGS_SUCCESS: {
      return {
        ...state,
        leagueStandings: {
          ...state.leagueStandings,
          [action.payload.leagueId]: action.payload.leagueStandings
        },
        isFetching: false
      };
    }
    case FETCH_LEAGUE_STANDINGS_FAILED: {
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
export const getTeamLeagues = (state, teamId) => getLeagues(state).teamLeagues[teamId];
export const getLeagueStandings = (state, leagueId) => getLeagues(state).leagueStandings[leagueId];
export const getCurrentTeamLeagues = (state, teamId) => {
  const currentYear = new Date().getFullYear();

  const teamLeagues = getTeamLeagues(state, teamId);

  if (!teamLeagues) {
    return;
  }

  const currentYearTeamLeagues = teamLeagues.filter(league => league.season === currentYear);

  if (currentYearTeamLeagues.length > 0) {
    return currentYearTeamLeagues;
  } else {
    return teamLeagues.filter(league => league.season === currentYear - 1);
  }
}
