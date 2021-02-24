import { call, put } from 'redux-saga/effects';

import { fixturesAPI } from '../../api';
import { fetchTeamNextFixturesFailed, fetchTeamNextFixturesSuccess } from '../actions/fixtures.actions';

export default function* handleFetchTeamNextFixtures(action) {
  const { teamId, quantity } = action.payload;

  try {
    const nextFixtures = yield call(fixturesAPI.getTeamNextFixtures, teamId, quantity);

    yield put(fetchTeamNextFixturesSuccess(teamId, nextFixtures));
  } catch (error) {
    yield put(fetchTeamNextFixturesFailed(error));
  }
}
