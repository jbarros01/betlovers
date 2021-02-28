import React from "react"
import { object } from 'prop-types'
import { Link } from "react-router-dom"

import styles from "./FixtureRow.module.css"
import { FIXTURES } from "../utils/constants"
import { TEAM_INFO_LINK } from "../utils/routes"

const FixtureRow = ({ fixture }) => {
  const {
    event_date: eventDate,
    status,
    elapsed,
    goalsHomeTeam,
    goalsAwayTeam,
    league: {
      logo: leagueLogo
    },
    homeTeam: {
      team_id: homeTeamId,
      logo: homeTeamLogo,
      team_name: homeTeamName
    },
    awayTeam: {
      team_id: awayTeamId,
      logo: awayTeamLogo,
      team_name: awayTeamName
    }
  } = fixture;

  const getNotStartedMatch = () => (
    <div className={styles.fixtureResult}>{FIXTURES.SEPARATOR}</div>
  )

  const getMatchFinished = () => {
    const wasHomeTeamWinner = goalsHomeTeam > goalsAwayTeam;
    const wasAwayTeamWinner = goalsHomeTeam < goalsAwayTeam;

    if (wasHomeTeamWinner) {
      return (
        <>
          <div className={styles.homeTeamName}>
            <Link to={TEAM_INFO_LINK(homeTeamId)}>
              <b>{homeTeamName}</b>
            </Link>
          </div>
          <div className={styles.homeTeamLogo}>
            <img src={homeTeamLogo} alt='homeTeamLogo' />
          </div>
          <div className={styles.fixtureResult}>
            <b>{goalsHomeTeam} {FIXTURES.SEPARATOR} {goalsAwayTeam}</b>
          </div>
          <div className={styles.awayTeamLogo}>
            <img src={awayTeamLogo} alt='awayTeamLogo' />
          </div>
          <div className={styles.awayTeamName}>
            <Link to={TEAM_INFO_LINK(awayTeamId)}>
              {awayTeamName}
            </Link>
          </div>
        </>
      )
    } else if (wasAwayTeamWinner) {
      return (
        <>
          <div className={styles.homeTeamName}>
            <Link to={TEAM_INFO_LINK(homeTeamId)}>
              {homeTeamName}
            </Link>
          </div>
          <div className={styles.homeTeamLogo}>
            <img src={homeTeamLogo} alt='homeTeamLogo' />
          </div>
          <div className={styles.fixtureResult}>
            <b>{goalsHomeTeam} {FIXTURES.SEPARATOR} {goalsAwayTeam}</b>
          </div>
          <div className={styles.awayTeamLogo}>
            <img src={awayTeamLogo} alt='awayTeamLogo' />
          </div>
          <div className={styles.awayTeamName}>
            <Link to={TEAM_INFO_LINK(awayTeamId)}>
              <b>{awayTeamName}</b>
            </Link>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={styles.homeTeamName}>
            <Link to={TEAM_INFO_LINK(homeTeamId)}>
              {homeTeamName}
            </Link>
          </div>
          <div className={styles.homeTeamLogo}>
            <img src={homeTeamLogo} alt='homeTeamLogo' />
          </div>
          <div className={styles.fixtureResult}>
            <b>{goalsHomeTeam} {FIXTURES.SEPARATOR} {goalsAwayTeam}</b>
          </div>
          <div className={styles.awayTeamLogo}>
            <img src={awayTeamLogo} alt='awayTeamLogo' />
          </div>
          <div className={styles.awayTeamName}>
            <Link to={TEAM_INFO_LINK(awayTeamId)}>
              {awayTeamName}
            </Link>
          </div>
        </>
      )
    }
  }

  const getOnGoingMatch = () => (
    <div className={styles.ongoingResult}>
      <div className={styles.timeElapsed}>
        {elapsed}
        <img src={`${process.env.PUBLIC_URL}/blinker.gif`} alt='timeElapsed' />
      </div>
      <div className={styles.goals}>
        <b>{goalsHomeTeam} {FIXTURES.SEPARATOR} {goalsAwayTeam}</b>
      </div>
    </div>
  )

  const getMatchCancelled = () => (
    <div className={styles.cancelledLabel}>
      {FIXTURES.CANCELLED_SEPARATOR}
    </div>
  )

  const renderFixtureNotFinished = () => {
    if (status === FIXTURES.NOT_STARTED) {
      return getNotStartedMatch();
    }

    if (status === FIXTURES.MATCH_CANCELLED) {
      return getMatchCancelled();
    }

    return getOnGoingMatch();
  }

  const renderFixture = () => {
    if (status === FIXTURES.MATCH_FINISHED) {
      return getMatchFinished();
    }

    return (
      <>
        <div className={styles.homeTeamName}>
          <Link to={TEAM_INFO_LINK(homeTeamId)}>
            {homeTeamName}
          </Link>
        </div>
        <div className={styles.homeTeamLogo}>
          <img src={homeTeamLogo} alt='homeTeamLogo' />
        </div>

        {renderFixtureNotFinished()}

        <div className={styles.awayTeamLogo}>
          <img src={awayTeamLogo} alt='awayTeamLogo' />
        </div>
        <div className={styles.awayTeamName}>
          <Link to={TEAM_INFO_LINK(awayTeamId)}>
            {awayTeamName}
          </Link>
        </div>
      </>
    )
  }

  const renderEventDate = () => eventDate.slice(0, 16).replace('T', ' ')

  return (
    <li className={styles.fixture}>
      <div className={styles.eventDate}>
        {renderEventDate()}
      </div>
      {renderFixture()}
      <div className={styles.leagueLogo}>
        <img src={leagueLogo} alt='leagueLogo' />
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
