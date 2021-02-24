import {
  SEARCH_TEAM,
  SEARCH_TEAM_SUCCESS,
  SEARCH_TEAM_FAILED,
  FETCH_TEAM,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAILED,
  CLEAR_FILTERED_TEAMS
} from "./actionTypes";

export const searchTeam = name => ({
  type: SEARCH_TEAM,
  payload: { name }
});

export const searchTeamSuccess = filteredTeams => ({
  type: SEARCH_TEAM_SUCCESS,
  payload: { filteredTeams }
});

export const searchTeamFailed = error => ({
  type: SEARCH_TEAM_FAILED,
  payload: { error }
});

export const fetchTeam = teamId => ({
  type: FETCH_TEAM,
  payload: { teamId }
});

export const getTeamSuccess = team => ({
  type: FETCH_TEAM_SUCCESS,
  payload: { team }
});

export const getTeamFailed = error => ({
  type: FETCH_TEAM_FAILED,
  payload: { error }
});

export const clearFilteredTeams = () => ({
  type: CLEAR_FILTERED_TEAMS
});
