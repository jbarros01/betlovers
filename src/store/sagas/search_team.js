import { call, put } from 'redux-saga/effects';

import { teamsAPI } from '../../api';
import { searchTeamFailed, searchTeamSuccess } from '../actions/teams.actions';

export default function* handleSearchTeam(action) {
  const { name } = action.payload;

  try {
    const filteredTeams = yield call(teamsAPI.searchTeam, name);

    yield put(searchTeamSuccess(filteredTeams));
  } catch (error) {
    yield put(searchTeamFailed(error));
  }
}
