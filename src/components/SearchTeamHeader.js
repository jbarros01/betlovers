import React from "react"
import { HOMEPAGE } from "../utils/constants"

import styles from "./SearchTeam.module.css"

const Header = () => (
  <header className={styles.header}>
    <h1>{HOMEPAGE.HEADER_TITLE}</h1>
  </header>
)

export default Header
