/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import LeagueTable from "../components/LeagueTable"
import { NO_INFO_AVAILABLE } from "../utils/constants"

import { getLeagueStandings } from "../store/reducers/leagues.reducer";
import { fetchLeagueStandings } from "../store/actions/leagues.actions";

const League = () => {
  const dispatch = useDispatch();

  const { leagueId } = useParams();

  const leagueStandings = useSelector(state => getLeagueStandings(state, leagueId));

  useEffect(() => {
    dispatch(fetchLeagueStandings(leagueId))
  }, [leagueId])

  return (
    <div className="container">
      <div className="inner">
        {leagueStandings ?
          leagueStandings.map(leagueStanding =>
            <LeagueTable standings={leagueStanding} />
          ) : NO_INFO_AVAILABLE
        }
      </div>
    </div>
  );
}

export default League
