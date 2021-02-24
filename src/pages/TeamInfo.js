/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import TeamInfoHeader from "../components/TeamInfoHeader"
import TeamInfoList from "../components/TeamInfoList"
import { NO_INFO_AVAILABLE } from "../utils/constants"

import { getTeam } from "../store/reducers/teams.reducer";
import { fetchTeam } from "../store/actions/teams.actions";

const TeamInfo = () => {
  const dispatch = useDispatch();

  const { teamId } = useParams();

  const team = useSelector(state => getTeam(state, teamId));

  useEffect(() => {
    if (!team) {
      dispatch(fetchTeam(teamId))
    }
  }, [teamId])

  return (
    <div className="container">
      <div className="inner">
        {team && team.logo ? (
          <>
            <TeamInfoHeader teamLogo={team.logo} />
            <TeamInfoList teamId={teamId} />
          </>
        ) : NO_INFO_AVAILABLE
        }
      </div>
    </div>
  );
}

export default TeamInfo
