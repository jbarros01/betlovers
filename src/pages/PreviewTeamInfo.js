/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { NO_INFO_AVAILABLE } from "../utils/constants"

import { getTeamLeagueStandings } from "../store/reducers/leagues.reducer";

import { fetchTeamLeagueStandings } from "../store/actions/leagues.actions";
import LeagueTable from "../components/LeagueTable";

const PreviewTeamInfo = () => {
  const dispatch = useDispatch();

  const { teamId } = useParams();

  const teamLeagueStandings = useSelector(state => getTeamLeagueStandings(state, teamId));

  useEffect(() => {
    if (!teamLeagueStandings) {
      dispatch(fetchTeamLeagueStandings(teamId))
    }
  }, [teamId])

  const renderTeamLeagueStandings = () => teamLeagueStandings ?
    <LeagueTable standings={teamLeagueStandings} teamId={teamId} /> : NO_INFO_AVAILABLE

  return (
    <div className="container">
      <div className="inner">
        {renderTeamLeagueStandings()}
      </div>
    </div>
  );
}

export default PreviewTeamInfo
