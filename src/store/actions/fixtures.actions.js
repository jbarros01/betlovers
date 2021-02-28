import {
  FETCH_TEAM_LAST_FIXTURES,
  FETCH_TEAM_LAST_FIXTURES_SUCCESS,
  FETCH_TEAM_LAST_FIXTURES_FAILED,
  FETCH_TEAM_NEXT_FIXTURES,
  FETCH_TEAM_NEXT_FIXTURES_SUCCESS,
  FETCH_TEAM_NEXT_FIXTURES_FAILED,
  FETCH_LIVE_FIXTURES,
  FETCH_LIVE_FIXTURES_SUCCESS,
  FETCH_LIVE_FIXTURES_FAILED
} from "./actionTypes";

export const fetchTeamLastFixtures = (teamId, quantity) => ({
  type: FETCH_TEAM_LAST_FIXTURES,
  payload: { teamId, quantity }
});

export const fetchTeamLastFixturesSuccess = (teamId, lastTeamFixtures) => ({
  type: FETCH_TEAM_LAST_FIXTURES_SUCCESS,
  payload: { teamId, lastTeamFixtures }
});

export const fetchTeamLastFixturesFailed = error => ({
  type: FETCH_TEAM_LAST_FIXTURES_FAILED,
  payload: { error }
});

export const fetchTeamNextFixtures = (teamId, quantity) => ({
  type: FETCH_TEAM_NEXT_FIXTURES,
  payload: { teamId, quantity }
});

export const fetchTeamNextFixturesSuccess = (teamId, nextTeamFixtures) => ({
  type: FETCH_TEAM_NEXT_FIXTURES_SUCCESS,
  payload: { teamId, nextTeamFixtures }
});

export const fetchTeamNextFixturesFailed = error => ({
  type: FETCH_TEAM_NEXT_FIXTURES_FAILED,
  payload: { error }
});

export const fetchLiveFixtures = () => ({
  type: FETCH_LIVE_FIXTURES
});

export const fetchLiveFixturesSuccess = liveFixtures => ({
  type: FETCH_LIVE_FIXTURES_SUCCESS,
  payload: { liveFixtures }
});

export const fetchLiveFixturesFailed = error => ({
  type: FETCH_LIVE_FIXTURES_FAILED,
  payload: { error }
});
