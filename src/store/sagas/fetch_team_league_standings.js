import { call, put } from 'redux-saga/effects';

import { leaguesAPI, standingsAPI } from '../../api';
import {
  fetchTeamLeagueStandingsSuccess,
  fetchTeamLeagueStandingsFailed
} from '../actions/leagues.actions';

export default function* handleFetchLeagueStandings(action) {
  const { teamId } = action.payload;

  try {
    const { league: { id: leagueId }, seasons } = yield call(leaguesAPI.getCurrentTeamLeague, teamId);

    const currentSeason = seasons[0].year;

    const teamLeagueStandings = yield call(
      standingsAPI.getStandings,
      `?league=${leagueId}&season=${currentSeason}`
    )

    yield put(
      fetchTeamLeagueStandingsSuccess(teamLeagueStandings, teamId)
    );
  } catch (error) {
    yield put(fetchTeamLeagueStandingsFailed(error));
  }
}
