import React from "react"
import { array } from 'prop-types'

import { TABLE, RANK_COLORS, OTHER_RANK_COLORS } from '../utils/constants'

import "./LeagueTable.css"
import { Link } from "react-router-dom"
import { TEAM_INFO_LINK } from "../utils/routes"

const LeagueTable = ({ standings }) => {
  return (
    <table>
      <thead>
        <tr class="tableHeader">
          <th>{TABLE.RANK}</th>
          <th class="club">{TABLE.CLUB}</th>
          <th>{TABLE.MATCHES_PLAYED.ABBREVIATURE}</th>
          <th>{TABLE.WIN}</th>
          <th>{TABLE.DRAW}</th>
          <th>{TABLE.LOSS}</th>
          <th>{TABLE.GOALS_FOR.ABBREVIATURE}</th>
          <th>{TABLE.GOALS_AGAINST.ABBREVIATURE}</th>
          <th>{TABLE.GOALS_DIFF.ABBREVIATURE}</th>
          <th>{TABLE.POINTS}</th>
        </tr>
      </thead>
      <tbody>
        {
          standings.map(club => {
            let color = 'white';

            Object.entries(RANK_COLORS).forEach(([key, value]) => {
              if (club.description === key) {
                color = value;
              } else {
                Object.entries(OTHER_RANK_COLORS).forEach(([key, value]) => {
                  if (club.description?.includes(key)) {
                    color = value;
                  }
                })
              }
            })

            return (
              <tr>
                <td style={{ borderBottom: `3px solid ${color}`}}>{club.rank}</td>
                <td class="club">
                  <div class="teamLogo">
                    <img src={club.logo} alt="" />
                  </div>
                  <div class="teamName">
                    <Link to={TEAM_INFO_LINK(club.team_id)}>
                      {club.teamName}
                    </Link>
                  </div>
                </td>
                <td>{club.all.matchsPlayed}</td>
                <td>{club.all.win}</td>
                <td>{club.all.draw}</td>
                <td>{club.all.lose}</td>
                <td>{club.all.goalsFor}</td>
                <td>{club.all.goalsAgainst}</td>
                <td>{club.goalsDiff}</td>
                <td>{club.points}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table >
  )
}

LeagueTable.defaultProps = {
  standings: []
};

LeagueTable.propTypes = {
  standings: array.isRequired
};

export default LeagueTable
