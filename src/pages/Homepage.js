import React from "react"
import { useDispatch, useSelector } from 'react-redux';

import SearchTeamHeader from "../components/SearchTeamHeader"
import SearchTeamInput from "../components/SearchTeamInput"
import FilteredTeamsList from "../components/FilteredTeamsList";

import { searchTeam } from "../store/actions/teams.actions";
import { getFilteredTeams } from "../store/reducers/teams.reducer";

const Homepage = () => {

  const filteredTeams = useSelector(getFilteredTeams);

  const dispatch = useDispatch();

  const handleOnSearch = name => {
    dispatch(searchTeam(name));
  };

  return (
    <div className="container">
      <div className="inner">
        <SearchTeamHeader />
        <SearchTeamInput onSearch={handleOnSearch} />
        <FilteredTeamsList teams={filteredTeams} />
      </div>
    </div>
  );
}

export default Homepage
