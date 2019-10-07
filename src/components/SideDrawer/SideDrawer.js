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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a  href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
      </ul>
    </nav>
  )
}

export default sideDrawer