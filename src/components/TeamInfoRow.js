import React from "react"
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"
import { string } from 'prop-types'

import styles from "./TeamInfoRow.module.css"

const TeamInfoRow = ({ label, route }) => {
  return (
    <li className={styles.item}>
      <div>
        <label>{label}</label>
        <button>
          <Link to={route}>
            <FaArrowRight style={{ color: "orangered", fontSize: "16px" }} />
          </Link>
        </button>
      </div>
    </li>
  )
}

TeamInfoRow.defaultProps = {
  label: '',
  route: '/'
}

TeamInfoRow.propTypes = {
  label: string,
  route: string
};

export default TeamInfoRow
