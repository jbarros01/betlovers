/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import FixturesList from "../components/FixturesList"
import { NO_INFO_AVAILABLE } from "../utils/constants"

import {
  getTeamLastFixtures,
  hasTeamLastFixtures
} from "../store/reducers/fixtures.reducer";

import { fetchTeamLastFixtures } from "../store/actions/fixtures.actions";

const LastFixtures = () => {
  const dispatch = useDispatch();

  const { teamId, quantity } = useParams();

  const teamIdNumber = Number(teamId);

  const lastFixtures = useSelector(state =>
    getTeamLastFixtures(state, teamId)
  );

  const hasLastFixtures = useSelector(state =>
    hasTeamLastFixtures(state, teamId)
  );

  useEffect(() => {
    if (!hasLastFixtures) {
      dispatch(fetchTeamLastFixtures(teamId, quantity))
    }
  }, [teamId])

  return (
    <div className="container">
      <div className="inner">
        {hasLastFixtures ? (
          <FixturesList fixtures={lastFixtures} teamId={teamIdNumber} />
        ) : NO_INFO_AVAILABLE
        }
      </div>
    </div>
  );
}

export default LastFixtures
