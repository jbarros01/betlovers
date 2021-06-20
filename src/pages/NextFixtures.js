/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
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

  const [numberOfFixturesToShow, setNumberOfFixturesToShow] = useState(10);

  const { teamId } = useParams();

  const nextFixtures = useSelector(state =>
    getTeamNextFixtures(state, teamId)
  );

  const hasNextFixtures = useSelector(state =>
    hasTeamNextFixtures(state, teamId)
  );

  useEffect(() => {
    if (!hasNextFixtures || nextFixtures.length < 10) {
      dispatch(fetchTeamNextFixtures(teamId, numberOfFixturesToShow))
    }

    return () => setNumberOfFixturesToShow(10);
  }, [teamId])

  const handleLoadMore = () => {
    const newNumberOfFixturesToShow = numberOfFixturesToShow + 10;

    setNumberOfFixturesToShow(newNumberOfFixturesToShow);

    dispatch(fetchTeamNextFixtures(teamId, numberOfFixturesToShow))
  }

  return (
    <div className="container">
      <div className="inner">
        {hasNextFixtures ? (
          <>
            <FixturesList fixtures={nextFixtures} />
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

export default NextFixtures
