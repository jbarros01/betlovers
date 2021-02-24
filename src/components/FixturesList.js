import React from "react"
import { array } from 'prop-types';

import FixtureRow from "./FixtureRow";

const FixturesList = ({ fixtures }) => {
  return (
    <ul>
      {fixtures.map(fixture => (
        <FixtureRow
          key={fixture.fixture_id}
          fixture={fixture}
        />
      ))}
    </ul>
  )
}

FixturesList.defaultProps = {
  fixtures: []
}

FixturesList.propTypes = {
  fixtures: array
};

export default FixturesList
