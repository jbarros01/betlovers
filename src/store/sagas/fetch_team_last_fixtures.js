import { call, put } from 'redux-saga/effects';

import { fixturesAPI } from '../../api';
import { fetchTeamLastFixturesFailed, fetchTeamLastFixturesSuccess } from '../actions/fixtures.actions';

export default function* handleFetchTeamLastFixtures(action) {
  const { teamId, quantity } = action.payload;

  try {
    const lastFixtures = yield call(fixturesAPI.getTeamLastFixtures, teamId, quantity);

    yield put(fetchTeamLastFixturesSuccess(teamId, lastFixtures));
  } catch (error) {
    yield put(fetchTeamLastFixturesFailed(error));
  }
}
