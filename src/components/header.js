import React from "react"
import { Link, useStaticQuery, graphql  } from "gatsby"
import HeaderStyles from "./header.module.scss"
import Logo from "../image/logo.png"

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    site{
      siteMetadata{
        author
        title
      }
    }

}
  `)
  return (
    <header className={HeaderStyles.header}>
      <h1>
        <Link to="/" className={HeaderStyles.name}>
          {data.site.siteMetadata.author}
        </Link>
      </h1>
      <h2>
        <Link to="/" className={HeaderStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h2>
      <Link to="/">
      <img  className={HeaderStyles.img}src={Logo} alt="Logo" />
      </Link>
      <nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link to="/" className={HeaderStyles.navItems} activeClassName={HeaderStyles.activeNavItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className={HeaderStyles.navItems} activeClassName={HeaderStyles.activeNavItem}>
            Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={HeaderStyles.navItems} activeClassName={HeaderStyles.activeNavItem}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className={HeaderStyles.navItems} activeClassName={HeaderStyles.activeNavItem}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className={HeaderStyles.navDiv}></div>
    </header>
  )
}

export default Header
