import { all, takeLatest } from 'redux-saga/effects';

import * as ACTION_TYPES from "./actions/actionTypes";
import * as sagas from "./sagas";

export default function* rootSaga() {
  yield all([
    takeLatest(ACTION_TYPES.SEARCH_TEAM, sagas.handleSearchTeam),
    takeLatest(ACTION_TYPES.FETCH_TEAM, sagas.handleFetchTeam),
    takeLatest(ACTION_TYPES.FETCH_TEAM_LAST_FIXTURES, sagas.handleFetchTeamLastFixtures),
    takeLatest(ACTION_TYPES.FETCH_TEAM_NEXT_FIXTURES, sagas.handleFetchTeamNextFixtures)
  ]);
}