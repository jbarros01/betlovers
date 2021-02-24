import React from "react"
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"
import { object } from 'prop-types'

import styles from "./TeamRow.module.css"
import { TEAM_INFO_LINK } from "../utils/routes"

const TeamRow = ({ team }) => { 
  return (
    <li className={styles.item}>
      <div>
        <label>{team.name}</label>
        <button>
          <Link to={TEAM_INFO_LINK(team.team_id)}>
            <FaArrowRight style={{ color: "orangered", fontSize: "16px" }} />
          </Link>
        </button>
      </div>
    </li>
  )
}

TeamRow.defaultProps = {
  team: {}
}

TeamRow.propTypes = {
  team: object
};

export default TeamRow
