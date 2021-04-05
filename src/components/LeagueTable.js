import React from "react"
import { array, string } from 'prop-types'

import { TABLE, RANK_COLORS, OTHER_RANK_COLORS } from '../utils/constants'

import "./LeagueTable.css"
import { Link } from "react-router-dom"
import { TEAM_INFO_LINK } from "../utils/routes"

const LeagueTable = ({ standings, teamId }) => {
  const renderTableRanks = () => standings.map(club => {
    const {
      rank,
      team: { logo, name, id },
      points,
      description,
      goalsDiff,
      all: {
        played: matches,
        win,
        draw,
        lose,
        goals: {
          for: goalsFor,
          against: goalsAgainst
        }
      }
    } = club;

    let color = 'white';
    Object.entries(RANK_COLORS).forEach(([key, value]) => {
      if (description === key) {
        color = value;
      } else {
        Object.entries(OTHER_RANK_COLORS).forEach(([key, value]) => {
          if (description?.includes(key)) {
            color = value;
          }
        })
      }
    })

    const background = {
      background: id === Number(teamId) ? 'aliceblue' : 'white'
    }

    return (
      <tr>
        <td style={{ borderBottom: `3px solid ${color}`, ...background }}>{rank}</td>
        <td style={background} class="club">
          <div class="teamLogo">
            <img src={logo} alt="" />
          </div>
          <div class="teamName">
            <Link to={TEAM_INFO_LINK(id)}>
              {name}
            </Link>
          </div>
        </td>
        <td style={background}>{matches}</td>
        <td style={background}>{points}</td>
        <td style={background}>{win}</td>
        <td style={background}>{draw}</td>
        <td style={background}>{lose}</td>
        <td style={background}>{goalsFor}</td>
        <td style={background}>{goalsAgainst}</td>
        <td style={background}>{goalsDiff}</td>
      </tr>
    )
  });

  return (
    <table>
      <thead>
        <tr class="tableHeader">
          <th>{TABLE.RANK}</th>
          <th class="club">{TABLE.CLUB}</th>
          <th>{TABLE.MATCHES_PLAYED.ABBREVIATURE}</th>
          <th>{TABLE.POINTS}</th>
          <th>{TABLE.WIN}</th>
          <th>{TABLE.DRAW}</th>
          <th>{TABLE.LOSS}</th>
          <th>{TABLE.GOALS_FOR.ABBREVIATURE}</th>
          <th>{TABLE.GOALS_AGAINST.ABBREVIATURE}</th>
          <th>{TABLE.GOALS_DIFF.ABBREVIATURE}</th>
        </tr>
      </thead>
      <tbody>
        {renderTableRanks()}
      </tbody>
    </table >
  )
}

LeagueTable.defaultProps = {
  standings: [],
  teamId: ''
};

LeagueTable.propTypes = {
  standings: array.isRequired,
  teamId: string
};

export default LeagueTable
