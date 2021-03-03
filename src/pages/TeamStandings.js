/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import LeaguesList from "../components/LeaguesList"
import TeamInfoHeader from "../components/TeamInfoHeader"
import { NO_INFO_AVAILABLE } from "../utils/constants"

import { getCurrentTeamLeagues } from "../store/reducers/leagues.reducer";
import { getTeam } from "../store/reducers/teams.reducer";

import { fetchTeamLeagues } from "../store/actions/leagues.actions";
import { fetchTeam } from "../store/actions/teams.actions";

const TeamStandings = () => {
  const dispatch = useDispatch();

  const { teamId } = useParams();

  const team = useSelector(state => getTeam(state, teamId));
  const teamLeagues = useSelector(state => getCurrentTeamLeagues(state, teamId));

  useEffect(() => {
    if (!team) {
      dispatch(fetchTeam(teamId))
    }

    dispatch(fetchTeamLeagues(teamId))
  }, [teamId])

  return (
    <div className="container">
      <div className="inner">
        {team && team.logo ? (
          <>
            <TeamInfoHeader teamLogo={team.logo} />
            <LeaguesList leagues={teamLeagues} />
          </>
        ) : NO_INFO_AVAILABLE
        }
      </div>
    </div>
  );
}

export default TeamStandings
