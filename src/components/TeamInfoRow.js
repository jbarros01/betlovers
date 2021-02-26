import React from "react"
import { Link } from 'react-router-dom'
import { string } from 'prop-types'

import styles from "./TeamInfoRow.module.css"

const TeamInfoRow = ({ label, route }) => {
  return (
    <Link to={route} className={styles.item}>
      <li>
        <div>
          <label>{label}</label>
        </div>
      </li>
    </Link>
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
