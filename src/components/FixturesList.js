import React from "react"
import { array, number } from 'prop-types';

import FixtureRow from "./FixtureRow";

const FixturesList = ({ fixtures, teamId }) => {
  return (
    <ul>
      {fixtures.map(fixture => (
        <FixtureRow
          key={fixture.fixture_id}
          fixture={fixture}
          teamId={teamId}
        />
      ))}
    </ul>
  )
}

FixturesList.defaultProps = {
  fixtures: [],
  teamId: null
}

FixturesList.propTypes = {
  fixtures: array,
  teamId: number
};

export default FixturesList
