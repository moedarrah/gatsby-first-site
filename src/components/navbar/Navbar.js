import React from 'react'
import { Link } from 'gatsby'
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
          <Link to="/">Front<span className="logoSpan" >E</span>ndare</Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to="/" activeClassName="active">Home</Link>
            </li>
            <li>
              <Link to="/blog" activeClassName="active">Projects</Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">Contact</Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
          </ul>
        </div> 
      </nav>
    </header>
  )
}
  
  export default navbar

