import React from "react"
import Navbar from "./oldNavbar"
import HeaderStyles from "./header.module.scss"
import NavStyles from "./navbar.module.scss"


const Header = () => {
  
  return (
    <header className={HeaderStyles.header}>
    <Navbar className={NavStyles.header}/>
    </header>
  )
}

export default Header
