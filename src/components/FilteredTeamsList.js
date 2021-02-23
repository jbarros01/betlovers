import React from "react"
import { array } from 'prop-types';

import TeamRow from "./TeamRow";

const FilteredTeamsList = ({ teams }) => {
  return (
    <ul>
      {teams.map(team => (
        <TeamRow
          key={team.team_id}
          team={team}
        />
      ))}
    </ul>
  )
}

FilteredTeamsList.defaultProps = {
  teams: []
}

FilteredTeamsList.propTypes = {
  teams: array
};

export default FilteredTeamsList
