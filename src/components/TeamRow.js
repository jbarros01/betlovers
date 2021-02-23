import React  from "react"
import { object } from 'prop-types';

import styles from "./TeamRow.module.css"
import { FaArrowRight } from "react-icons/fa";

const TeamRow = ({ team }) => {
  return (
    <li className={styles.item}>
      <div>
        <label>{team.name}</label>
        <button>
          <FaArrowRight style={{color: "orangered", fontSize: "16px"}}/>
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
