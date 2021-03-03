import React from "react"
import { array } from 'prop-types'
import LeagueRow from './LeagueRow'

const LeaguesList = ({ leagues }) => {
  return (
    <ul>
      {leagues
        .filter(league => league.type === 'League') // Temporary
        .map(league => (
          <LeagueRow
            key={league.league_id}
            leagueId={league.league_id}
            name={league.name}
          />
        ))}
    </ul>
  )
}

LeaguesList.defaultProps = {
  leagues: []
};

LeaguesList.propTypes = {
  leagues: array.isRequired
};

export default LeaguesList
