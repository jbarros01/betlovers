/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { NO_INFO_AVAILABLE, TEAM_INFO } from "../utils/constants"
import { TEAM_LAST_FIXTURES_LINK, TEAM_NEXT_FIXTURES_LINK } from "../utils/routes";

import { getTeamLeagueStandings, isFetchingLeagueStandings } from "../store/reducers/leagues.reducer";
import { getTeamLastFixtures, getTeamNextFixtures, isFetchingFixtures } from "../store/reducers/fixtures.reducer";

import { fetchTeamLeagueStandings } from "../store/actions/leagues.actions";
import { fetchTeamLastFixtures, fetchTeamNextFixtures } from "../store/actions/fixtures.actions";

import LeagueTable from "../components/LeagueTable";
import FixturesList from "../components/FixturesList";

const PreviewTeamInfo = () => {
  const dispatch = useDispatch();

  const { teamId } = useParams();

  const numberOfFixturesToShow = 5;

  const isFetchingTeamFixtures = useSelector(isFetchingFixtures);
  const isFetchingTeamLeagueStandings = useSelector(isFetchingLeagueStandings);
  const teamLeagueStandings = useSelector(state => getTeamLeagueStandings(state, teamId));
  const teamLastFixtures = useSelector(state => getTeamLastFixtures(state, teamId))
  const teamNextFixtures = useSelector(state => getTeamNextFixtures(state, teamId))

  useEffect(() => {
    if (!teamLeagueStandings) {
      dispatch(fetchTeamLeagueStandings(teamId))
    }

    if (!teamLastFixtures) {
      dispatch(fetchTeamLastFixtures(teamId, numberOfFixturesToShow))
    }

    if (!teamNextFixtures) {
      dispatch(fetchTeamNextFixtures(teamId, numberOfFixturesToShow))
    }
  }, [teamId])

  const renderTeamLeagueStandings = () => teamLeagueStandings && !isFetchingTeamLeagueStandings ?
    <LeagueTable standings={teamLeagueStandings} teamId={teamId} /> : NO_INFO_AVAILABLE

  const renderLastFixtures = () => teamLastFixtures && !isFetchingTeamFixtures ? (
    <div className="section games-preview">
      <FixturesList fixtures={teamLastFixtures} />
      <div>
        <Link to={TEAM_LAST_FIXTURES_LINK(teamId)}>{TEAM_INFO.LAST_GAMES}</Link>
      </div>
    </div>
  ) : NO_INFO_AVAILABLE


  const renderNextFixtures = () => teamNextFixtures && !isFetchingTeamFixtures ? (
    <div className="section games-preview">
      <FixturesList fixtures={teamNextFixtures} />
      <div>
        <Link to={TEAM_NEXT_FIXTURES_LINK(teamId)}>{TEAM_INFO.NEXT_GAMES}</Link>
      </div>
    </div>
  ) : NO_INFO_AVAILABLE

  return (
    <div className="container">
      <div className="inner">
        {renderTeamLeagueStandings()}
        <hr />
        {renderLastFixtures()}
        <hr />
        {renderNextFixtures()}
      </div>
    </div>
  );
}

export default PreviewTeamInfo
