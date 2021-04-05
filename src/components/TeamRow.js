import React from "react"
import { Link } from 'react-router-dom'
import { object } from 'prop-types'

import styles from "./TeamRow.module.css"
import { TEAM_INFO_LINK } from "../utils/routes"

const TeamRow = ({ team }) => {
  return (
    <Link to={TEAM_INFO_LINK(team.id)} className={styles.item}>
      <li>
        <div className={styles.teamLogo}>
          <img src={team.logo} alt="teamLogo"/>
        </div>
        <div className={styles.teamName}>
          <label>{team.name}</label>
        </div>
      </li>
    </Link>
  )
}

TeamRow.defaultProps = {
  team: {}
}

TeamRow.propTypes = {
  team: object
};

export default TeamRow
