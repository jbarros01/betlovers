import React from "react"
import { object, number } from 'prop-types'

import styles from "./FixtureRow.module.css"
import { FIXTURES } from "../utils/constants"

const FixtureRow = ({ fixture, teamId }) => {
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
      logo: homeTeamLogo,
      team_name: homeTeamName
    },
    awayTeam: {
      logo: awayTeamLogo,
      team_name: awayTeamName
    }
  } = fixture;

  const getNotStartedMatch = () => (
    <>
      <div className={styles.homeTeamName}>{homeTeamName}</div>
      <div className={styles.homeTeamLogo}>
        <img src={homeTeamLogo} alt='homeTeamLogo' />
      </div>
      <div className={styles.fixtureResult}>{FIXTURES.SEPARATOR}</div>
      <div className={styles.awayTeamLogo}>
        <img src={awayTeamLogo} alt='awayTeamLogo' />
      </div>
      <div className={styles.awayTeamName}>{awayTeamName}</div>
    </>
  )

  const getMatchFinished = () => {
    const wasHomeTeamWinner = goalsHomeTeam > goalsAwayTeam;
    const wasAwayTeamWinner = goalsHomeTeam < goalsAwayTeam;

    if (wasHomeTeamWinner) {
      return (
        <>
          <div className={styles.homeTeamName}>
            <b>{homeTeamName}</b>
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
          <div className={styles.awayTeamName}>{awayTeamName}</div>
        </>
      )
    } else if (wasAwayTeamWinner) {
      return (
        <>
          <div className={styles.homeTeamName}>{homeTeamName}</div>
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
            <b>{awayTeamName}</b>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className={styles.homeTeamName}>{homeTeamName}</div>
          <div className={styles.homeTeamLogo}>
            <img src={homeTeamLogo} alt='homeTeamLogo' />
          </div>
          <div className={styles.fixtureResult}>
            <b>{goalsHomeTeam} {FIXTURES.SEPARATOR} {goalsAwayTeam}</b>
          </div>
          <div className={styles.awayTeamLogo}>
            <img src={awayTeamLogo} alt='awayTeamLogo' />
          </div>
          <div className={styles.awayTeamName}>{awayTeamName}</div>
        </>
      )
    }
  }

  const getOnGoingMatch = () => (
    <>
      <div className={styles.homeTeamName}>{homeTeamName}</div>
      <div className={styles.homeTeamLogo}>
        <img src={homeTeamLogo} alt='homeTeamLogo' />
      </div>
      <div className={styles.ongoingResult}>
        <div className={styles.timeElapsed}>
          {elapsed}
          <img src={`${process.env.PUBLIC_URL}/blinker.gif`} alt='timeElapsed' />
        </div>
        <div className={styles.goals}>
          <b>{goalsHomeTeam} {FIXTURES.SEPARATOR} {goalsAwayTeam}</b>
        </div>
      </div>
      <div className={styles.awayTeamLogo}>
        <img src={awayTeamLogo} alt='awayTeamLogo' />
      </div>
      <div className={styles.awayTeamName}>{awayTeamName}</div>
    </>
  )

  const getMatchCancelled = () => (
    <>
      <div className={styles.homeTeamName}>{homeTeamName}</div>
      <div className={styles.homeTeamLogo}>
        <img src={homeTeamLogo} alt='homeTeamLogo' />
      </div>
      <div className={styles.cancelledLabel}>
        {FIXTURES.CANCELLED_SEPARATOR}
      </div>
      <div className={styles.awayTeamLogo}>
        <img src={awayTeamLogo} alt='awayTeamLogo' />
      </div>
      <div className={styles.awayTeamName}>{awayTeamName}</div>
    </>
  )

  const renderFixture = () => {
    if (status === FIXTURES.NOT_STARTED) {
      return getNotStartedMatch();
    }

    if (status === FIXTURES.MATCH_FINISHED) {
      return getMatchFinished();
    }

    if (status === FIXTURES.MATCH_CANCELLED) {
      return getMatchCancelled();
    }

    return getOnGoingMatch();
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
  fixture: {},
  teamId: null
}

FixtureRow.propTypes = {
  fixture: object,
  teamId: number
};

export default FixtureRow
