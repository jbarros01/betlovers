import {
  FETCH_TEAM_LAST_FIXTURES,
  FETCH_TEAM_LAST_FIXTURES_SUCCESS,
  FETCH_TEAM_LAST_FIXTURES_FAILED,
  FETCH_TEAM_NEXT_FIXTURES,
  FETCH_TEAM_NEXT_FIXTURES_SUCCESS,
  FETCH_TEAM_NEXT_FIXTURES_FAILED
} from "./actionTypes";

export const fetchTeamLastFixtures = teamId => ({
  type: FETCH_TEAM_LAST_FIXTURES,
  payload: { teamId }
});

export const fetchTeamLastFixturesSuccess = (teamId, lastTeamFixtures) => ({
  type: FETCH_TEAM_LAST_FIXTURES_SUCCESS,
  payload: { teamId, lastTeamFixtures }
});

export const fetchTeamLastFixturesFailed = error => ({
  type: FETCH_TEAM_LAST_FIXTURES_FAILED,
  payload: { error }
});

export const fetchTeamNextFixtures = teamId => ({
  type: FETCH_TEAM_NEXT_FIXTURES,
  payload: { teamId }
});

export const fetchTeamNextFixturesSuccess = (teamId, nextTeamFixtures) => ({
  type: FETCH_TEAM_NEXT_FIXTURES_SUCCESS,
  payload: { teamId, nextTeamFixtures }
});

export const fetchTeamNextFixturesFailed = error => ({
  type: FETCH_TEAM_NEXT_FIXTURES_FAILED,
  payload: { error }
});
