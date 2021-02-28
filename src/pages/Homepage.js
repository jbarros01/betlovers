/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

import SearchTeamHeader from "../components/SearchTeamHeader"
import SearchTeamInput from "../components/SearchTeamInput"
import FilteredTeamsList from "../components/FilteredTeamsList"
import FixturesList from "../components/FixturesList"

import { searchTeam, clearFilteredTeams } from "../store/actions/teams.actions"
import { fetchLiveFixtures } from "../store/actions/fixtures.actions"

import { getFilteredTeams } from "../store/reducers/teams.reducer"
import { getLiveFixtures } from "../store/reducers/fixtures.reducer"
import { HOMEPAGE } from "../utils/constants"

const Homepage = () => {
  const dispatch = useDispatch();

  const filteredTeams = useSelector(getFilteredTeams);
  const liveFixtures = useSelector(getLiveFixtures);

  const isToShowLiveFixtures = liveFixtures.length > 0 && !filteredTeams.length > 0;

  useEffect(() => {
    dispatch(clearFilteredTeams());
    dispatch(fetchLiveFixtures());
  }, [])

  const handleOnSearch = name => {
    const nameInLowercaseWithUnderscores =
      name
        .trim()
        .toLowerCase()
        .replaceAll(' ', '_')

    dispatch(clearFilteredTeams());
    dispatch(searchTeam(nameInLowercaseWithUnderscores));
  };

  const renderLiveFixtures = () => {
    return (
      <>
        <header className="liveHeader">
          {HOMEPAGE.LIVE_GAMES}
          <img src={`${process.env.PUBLIC_URL}/live.gif`} alt='live' />
        </header>
        <FixturesList fixtures={liveFixtures} />
      </>
    )
  }

  return (
    <div className="container">
      <div className="inner-homepage">
        <SearchTeamHeader />
        <SearchTeamInput onSearch={handleOnSearch} />
        <FilteredTeamsList teams={filteredTeams} />
        {isToShowLiveFixtures && renderLiveFixtures()}
      </div>
    </div>
  );
}

export default Homepage
