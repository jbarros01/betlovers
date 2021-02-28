/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';

import SearchTeamHeader from "../components/SearchTeamHeader"
import SearchTeamInput from "../components/SearchTeamInput"
import FilteredTeamsList from "../components/FilteredTeamsList";

import { searchTeam, clearFilteredTeams } from "../store/actions/teams.actions";
import { getFilteredTeams } from "../store/reducers/teams.reducer";

const Homepage = () => {

  const filteredTeams = useSelector(getFilteredTeams);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearFilteredTeams())
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

  return (
    <div className="container">
      <div className="inner-homepage">
        <SearchTeamHeader />
        <SearchTeamInput onSearch={handleOnSearch} />
        <FilteredTeamsList teams={filteredTeams} />
      </div>
    </div>
  );
}

export default Homepage
