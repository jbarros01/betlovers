/* eslint-disable import/no-anonymous-default-export */

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
} from "../actions/actionTypes";

const initialState = {
  teamFixtures: {
    last: [],
    next: []
  },
  liveFixtures: [],
  error: null,
  isFetching: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_TEAM_LAST_FIXTURES: {
      return {
        ...state,
        isFetching: true
      };
    }
    case FETCH_TEAM_LAST_FIXTURES_SUCCESS: {
      return {
        ...state,
        teamFixtures: {
          ...state.teamFixtures,
          [action.payload.teamId]: {
            last: [...state.teamFixtures.last, ...action.payload.lastTeamFixtures]
          }
        },
        isFetching: false
      };
    }
    case FETCH_TEAM_LAST_FIXTURES_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isFetching: false
      };
    }
    case FETCH_TEAM_NEXT_FIXTURES: {
      return {
        ...state,
        isFetching: true
      };
    }
    case FETCH_TEAM_NEXT_FIXTURES_SUCCESS: {
      return {
        ...state,
        teamFixtures: {
          ...state.teamFixtures,
          [action.payload.teamId]: {
            next: [...state.teamFixtures.next, ...action.payload.nextTeamFixtures]
          }
        },
        isFetching: false
      };
    }
    case FETCH_TEAM_NEXT_FIXTURES_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isFetching: false
      };
    }
    case FETCH_LIVE_FIXTURES: {
      return {
        ...state,
        isFetching: true
      };
    }
    case FETCH_LIVE_FIXTURES_SUCCESS: {
      return {
        ...state,
        liveFixtures: action.payload.liveFixtures,
        isFetching: false
      };
    }
    case FETCH_LIVE_FIXTURES_FAILED: {
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

export const getFixtures = state => state.entities.fixtures;
export const getTeamFixtures = state => getFixtures(state).teamFixtures;
export const getLiveFixtures = state => getFixtures(state).liveFixtures;
export const getTeamLastFixtures = (state, teamId) => getTeamFixtures(state)[teamId]?.last;
export const getTeamNextFixtures = (state, teamId) => getTeamFixtures(state)[teamId]?.next;
export const hasTeamLastFixtures = (state, teamId) => getTeamLastFixtures(state, teamId)?.length;
export const hasTeamNextFixtures = (state, teamId) => getTeamNextFixtures(state, teamId)?.length;
