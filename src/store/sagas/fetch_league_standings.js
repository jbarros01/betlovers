import { call, put } from 'redux-saga/effects';

import { leaguesAPI } from '../../api';
import { fetchLeagueStandingsFailed, fetchLeagueStandingsSuccess } from '../actions/leagues.actions';

export default function* handleFetchLeagueStandings(action) {
  const { leagueId } = action.payload;

  try {
    const leagueStandings = yield call(leaguesAPI.getLeagueStandings, leagueId);

    yield put(fetchLeagueStandingsSuccess(leagueStandings, leagueId));
  } catch (error) {
    yield put(fetchLeagueStandingsFailed(error));
  }
}
