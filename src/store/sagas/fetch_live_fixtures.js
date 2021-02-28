import { call, put } from 'redux-saga/effects';

import { fixturesAPI } from '../../api';
import { fetchLiveFixturesFailed, fetchLiveFixturesSuccess } from '../actions/fixtures.actions';

export default function* handleFetchLiveFixtures() {
  try {
    const liveFixtures = yield call(fixturesAPI.getLiveFixtures);

    yield put(fetchLiveFixturesSuccess(liveFixtures));
  } catch (error) {
    yield put(fetchLiveFixturesFailed(error));
  }
}
