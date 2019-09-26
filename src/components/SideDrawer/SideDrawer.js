import React from 'react'
import './SideDrawer.scss'

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
    <ul>
    <li>
              <a href="#home" activeclassname="active">Home</a>
            </li>
            <li>
              <a href="#about" activeclassname="active">About</a>
            </li>
            <li>
              <a  href="#projects" activeclassname="active">Projects</a>
            </li>
            <li>
              <a href="#contact" activeclassname="active">Contact</a>
            </li>
  </ul>
    </nav>
  )
}

export default sideDrawer