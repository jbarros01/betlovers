/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

import { LOGO, LINKS } from "../utils/constants"
import { HOME } from "../utils/routes"

import "./Navbar.css"

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const renderNavMenu = () => (
    <nav class="menuNav is-active" id="site-nav" role="navigation">
      {LINKS.map(column => 
        <div class="col">
          <h4>{column.header}</h4>
          <ul>
            {column.options.map(option =>
              <li><a href={option.route}>{option.label}</a></li>
            )}
          </ul>
        </div>
      )}
      <div class="col">
        <ul class="social">
          <li><a href=""><FaFacebook /></a></li>
          <li><a href=""><FaTwitter /></a></li>
          <li><a href=""><FaLinkedin /></a></li>
        </ul>
      </div>
    </nav>
  )

  const renderHamburguer = () => (
    <button onClick={handleToggle} class={`menuNav ${navbarOpen ? "hamburger hamburger--boring is-active" : "hamburger hamburger--boring"}`} type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  )

  const renderLogo = () => (
    <Link to={HOME} class={`menuNav ${navbarOpen ? "logo is-active" : "logo"}`}>
      <span>{LOGO}</span>
    </Link>
  )

  return (
    <div class="nav">
      <header class={`menuNav ${navbarOpen ? "is-active" : ""}`} id="masthead" role="banner">
        <div class="nav-container">
          {renderHamburguer()}
          {renderLogo()}
          {navbarOpen && renderNavMenu()}
        </div>
      </header>
    </div>
  )
}

export default Navbar
