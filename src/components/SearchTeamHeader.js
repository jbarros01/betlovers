import React from "react"
import { HOMEPAGE } from "../utils/Constants"

const Header = () => {

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }

  const headerLabelStyle = {
    fontSize: "3rem",
    fontWeight: "600",
    marginBottom: "2rem",
    lineHeight: "1em",
    color: "#aaaaaa",
    textTransform: "uppercase",
    textAlign: "center"
  }

  return (
    <header style={headerStyle}>
      <h1 style={headerLabelStyle}>{HOMEPAGE.SEARCH_HEADER_TITLE}</h1>
    </header>
  )
}

export default Header
