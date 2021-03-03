import { call, put } from 'redux-saga/effects';

import { leaguesAPI } from '../../api';
import { fetchTeamLeaguesFailed, fetchTeamLeaguesSuccess } from '../actions/leagues.actions';

export default function* handleFetchTeamLeagues(action) {
  const { teamId } = action.payload;

  try {
    const teamLeagues = yield call(leaguesAPI.getTeamLeagues, teamId);

    yield put(fetchTeamLeaguesSuccess(teamLeagues, teamId));
  } catch (error) {
    yield put(fetchTeamLeaguesFailed(error));
  }
}
