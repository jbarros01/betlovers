import {
  FETCH_TEAM_LEAGUES,
  FETCH_TEAM_LEAGUES_SUCCESS,
  FETCH_TEAM_LEAGUES_FAILED,
  FETCH_LEAGUE_STANDINGS,
  FETCH_LEAGUE_STANDINGS_SUCCESS,
  FETCH_LEAGUE_STANDINGS_FAILED
} from "./actionTypes";

export const fetchTeamLeagues = teamId => ({
  type: FETCH_TEAM_LEAGUES,
  payload: { teamId }
});

export const fetchTeamLeaguesSuccess = (teamLeagues, teamId) => ({
  type: FETCH_TEAM_LEAGUES_SUCCESS,
  payload: { teamLeagues, teamId }
});

export const fetchTeamLeaguesFailed = error => ({
  type: FETCH_TEAM_LEAGUES_FAILED,
  payload: { error }
});

export const fetchLeagueStandings = leagueId => ({
  type: FETCH_LEAGUE_STANDINGS,
  payload: { leagueId }
});

export const fetchLeagueStandingsSuccess = (leagueStandings, leagueId) => ({
  type: FETCH_LEAGUE_STANDINGS_SUCCESS,
  payload: { leagueStandings, leagueId }
});

export const fetchLeagueStandingsFailed = error => ({
  type: FETCH_LEAGUE_STANDINGS_FAILED,
  payload: { error }
});
