import React from "react"
import { string } from 'prop-types'

import TeamInfoRow from "./TeamInfoRow"
import { TEAM_INFO } from "../utils/constants"

const TeamInfoList = ({ teamId }) => {
  return (
    <ul>
      {TEAM_INFO(teamId).map(info => (
        <TeamInfoRow
          key={info.ID}
          label={info.LABEL}
          route={info.ROUTE}
        />
      ))}
    </ul>
  )
}

TeamInfoList.propTypes = {
  teamId: string.isRequired
};

export default TeamInfoList
