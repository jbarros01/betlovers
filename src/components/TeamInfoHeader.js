/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import { string } from 'prop-types';

const TeamInfoHeader = ({ teamLogo }) => {

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
    textAlign: "center"
  }

  return (
    <header style={headerStyle}>
      <img src={teamLogo} alt="logo" />
    </header>
  )
}

TeamInfoHeader.defaultProps = {
  teamLogo: ''
}

TeamInfoHeader.propTypes = {
  teamLogo: string
};

export default TeamInfoHeader
