import {
  FETCH_TEAM_LEAGUE_STANDINGS,
  FETCH_TEAM_LEAGUE_STANDINGS_SUCCESS,
  FETCH_TEAM_LEAGUE_STANDINGS_FAILED
} from "./actionTypes";

export const fetchTeamLeagueStandings = teamId => ({
  type: FETCH_TEAM_LEAGUE_STANDINGS,
  payload: { teamId }
});

export const fetchTeamLeagueStandingsSuccess = (teamLeagueStandings, teamId) => ({
  type: FETCH_TEAM_LEAGUE_STANDINGS_SUCCESS,
  payload: { teamLeagueStandings, teamId }
});

export const fetchTeamLeagueStandingsFailed = error => ({
  type: FETCH_TEAM_LEAGUE_STANDINGS_FAILED,
  payload: { error }
});
