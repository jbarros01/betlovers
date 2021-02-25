/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import FixturesList from "../components/FixturesList"
import { NO_INFO_AVAILABLE } from "../utils/constants"

import {
  getTeamNextFixtures,
  hasTeamNextFixtures
} from "../store/reducers/fixtures.reducer";

import { fetchTeamNextFixtures } from "../store/actions/fixtures.actions";

const NextFixtures = () => {
  const dispatch = useDispatch();

  const { teamId, quantity } = useParams();

  const teamIdNumber = Number(teamId);

  const nextFixtures = useSelector(state =>
    getTeamNextFixtures(state, teamId)
  );

  const hasNextFixtures = useSelector(state =>
    hasTeamNextFixtures(state, teamId)
  );

  useEffect(() => {
    if (!hasNextFixtures) {
      dispatch(fetchTeamNextFixtures(teamId, quantity))
    }
  }, [teamId])

  return (
    <div className="container">
      <div className="inner">
        {hasNextFixtures ? (
          <FixturesList fixtures={nextFixtures} teamId={teamIdNumber} />
        ) : NO_INFO_AVAILABLE
        }
      </div>
    </div>
  );
}

export default NextFixtures
