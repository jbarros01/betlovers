import React from "react"
import { FaArrowRight } from "react-icons/fa"
import { object } from 'prop-types'

import styles from "./FixtureRow.module.css"
import { FIXTURES } from "../utils/constants"

const FixtureRow = ({ fixture }) => {
  const {
    status,
    goalsHomeTeam,
    goalsAwayTeam,
    homeTeam: {
      logo: homeTeamLogo,
      team_name: homeTeamName
    },
    awayTeam: {
      logo: awayTeamLogo,
      team_name: awayTeamName
    }
  } = fixture;

  const getFixtureText = () => status === FIXTURES.NOT_STARTED
    ?`${homeTeamName} ${FIXTURES.SEPARATOR} ${awayTeamName}`
    : status === FIXTURES.MATCH_FINISHED
      ? `${homeTeamName} ${goalsHomeTeam} ${FIXTURES.SEPARATOR} ${goalsAwayTeam} ${awayTeamName}`
      : `${homeTeamName} (${goalsHomeTeam}) ${FIXTURES.SEPARATOR} (${goalsAwayTeam}) ${awayTeamName}`

  const renderFixture = () => {
    const fixtureText = getFixtureText();

    return (
      <>
        <img src={homeTeamLogo} alt='homeTeamLogo' />
          <label>{fixtureText}</label>
        <img src={awayTeamLogo} alt='awayTeamLogo' />
      </>
    )
  }

  return (
    <li className={styles.item}>
      <div>
        {renderFixture()}
        <button>
          <FaArrowRight style={{ color: "orangered", fontSize: "16px" }} />
        </button>
      </div>
    </li>
  )
}

FixtureRow.defaultProps = {
  fixture: {}
}

FixtureRow.propTypes = {
  fixture: object
};

export default FixtureRow
