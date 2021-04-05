import {
  SEARCH_TEAM,
  SEARCH_TEAM_SUCCESS,
  SEARCH_TEAM_FAILED,
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

export const clearFilteredTeams = () => ({
  type: CLEAR_FILTERED_TEAMS
});
