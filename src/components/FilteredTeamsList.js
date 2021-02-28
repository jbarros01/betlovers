import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { array } from 'prop-types'
import { FaSearchMinus } from "react-icons/fa"

import TeamRow from "./TeamRow"

import { HOMEPAGE } from "../utils/constants"

import { clearFilteredTeams } from "../store/actions/teams.actions"
import { getFilteredTeams } from "../store/reducers/teams.reducer"

import styles from "./FilteredTeamsList.module.css"

const FilteredTeamsList = ({ teams }) => {
  const dispatch = useDispatch();

  const filteredTeams = useSelector(getFilteredTeams);

  const handleClearFilteredTeams = () => {
    dispatch(clearFilteredTeams());
  }

  const renderFilteredTeamsList = () => (
    <ul>
      <li className={styles.clearSearch}>
        <button onClick={handleClearFilteredTeams}>
          {HOMEPAGE.CLEAR_SEARCH}
          <FaSearchMinus />
        </button>
      </li>
      {
        teams.map(team => (
          <TeamRow
            key={team.team_id}
            team={team}
          />
        ))
      }
    </ul>
  )

  return filteredTeams.length > 0 && renderFilteredTeamsList()
}

FilteredTeamsList.defaultProps = {
  teams: []
}

FilteredTeamsList.propTypes = {
  teams: array
};

export default FilteredTeamsList
