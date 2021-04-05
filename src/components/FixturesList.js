import React from "react"
import { array, number } from 'prop-types';

import FixtureRow from "./FixtureRow";

const FixturesList = ({ fixtures, teamId }) => {
  return (
    <ul>
      {fixtures.map(info => (
        <FixtureRow
          key={info.fixture.id}
          info={info}
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
