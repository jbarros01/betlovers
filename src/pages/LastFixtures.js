/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
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

  const [numberOfFixturesToShow, setNumberOfFixturesToShow] = useState(10);

  const { teamId } = useParams();

  const teamIdNumber = Number(teamId);

  const lastFixtures = useSelector(state =>
    getTeamLastFixtures(state, teamId)
  );

  const hasLastFixtures = useSelector(state =>
    hasTeamLastFixtures(state, teamId)
  );

  useEffect(() => {
    if (!hasLastFixtures) {
      dispatch(fetchTeamLastFixtures(teamId, numberOfFixturesToShow))
    }

    return () => {
      setNumberOfFixturesToShow(10);
    }
  }, [teamId])

  const handleLoadMore = () => {
    const newNumberOfFixturesToShow = numberOfFixturesToShow + 10;

    setNumberOfFixturesToShow(newNumberOfFixturesToShow);

    dispatch(fetchTeamLastFixtures(teamId, numberOfFixturesToShow))
  }

  return (
    <div className="container">
      <div className="inner">
        {hasLastFixtures ? (
          <>
            <FixturesList fixtures={lastFixtures} teamId={teamIdNumber} />
            <div className="loadMore">
              <button onClick={handleLoadMore}>
                {"Load more..."}
              </button>
            </div>
          </>
        ) : NO_INFO_AVAILABLE
        }
      </div>
    </div>
  );
}

export default LastFixtures
