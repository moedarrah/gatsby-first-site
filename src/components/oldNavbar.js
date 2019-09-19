import React from "react"
import { Link } from "gatsby"
import NavbarStyles from "./navbar.module.scss"


const Navbar = () => {
  
  return (
      <nav>
        <ul className={NavbarStyles.navLinks}>
          <li>
            <Link
              to="/"
              className={NavbarStyles.navItems}
              activeClassName={NavbarStyles.activeNavItem}
            >
              Home
            </Link>
          </li>


          <li>
            <Link
              to="/blog"
              className={NavbarStyles.navItems}
              activeClassName={NavbarStyles.activeNavItem}
            >
              Projects
            </Link>
          </li>


          <li>
            <Link
              to="/contact"
              className={NavbarStyles.navItems}
              activeClassName={NavbarStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>


          <li>
            <Link
              to="/about"
              className={NavbarStyles.navItems}
              activeClassName={NavbarStyles.activeNavItem}
            >
              About
            </Link>
          </li>


        </ul>
      </nav>
  )
}

export default Navbar
