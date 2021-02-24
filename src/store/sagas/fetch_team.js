import { call, put } from 'redux-saga/effects';

import { teamsAPI } from '../../api';
import { getTeamFailed, getTeamSuccess } from '../actions/teams.actions';

export default function* handleFetchTeam(action) {
  const { teamId } = action.payload;

  try {
    const team = yield call(teamsAPI.getTeam, teamId);

    yield put(getTeamSuccess(team));
  } catch (error) {
    yield put(getTeamFailed(error));
  }
}
