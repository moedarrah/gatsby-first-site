import React from 'react'
import "./Navbar.scss"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"





const navbar = props => {
  return(
    <header>
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="#home">Front<span className="logoSpan" >E</span>ndare</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <a href="#home" activeClassName="active">Home</a>
            </li>
            <li>
              <a href="#about" activeClassName="active">About</a>
            </li>
            <li>
              <a  href="#projects" activeClassName="active">Projects</a>
            </li>
            <li>
              <a href="#contact" activeClassName="active">Contact</a>
            </li>
          </ul>
        </div> 
      </nav>
    </header>
  )
}
  
  export default navbar

