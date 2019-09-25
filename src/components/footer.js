 import React from "react"
 import { useStaticQuery, graphql  } from "gatsby"
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  
  faAt,faMapMarkerAlt
  
} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin,faGithubSquare,faTwitterSquare} from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            framework
            author
          }
        }
      }
    `)
    return (
        <footer>
        <ul className="footer-lista">
        <li><a href="https://linkedin.com/in/mohammed-darrah-3bb71b53" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="https://github.com/mmdarrah?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a></li>
        <li><a href="mailto:mmdarrah@hotmail.com" target="_blank"><FontAwesomeIcon icon={faAt} /></a></li>
        <li><a href="https://goo.gl/maps/9fkTzi9AbPD8b55M8" target="_blank"><FontAwesomeIcon icon={faMapMarkerAlt} /></a></li>
        <li><a href="https://twitter.com/mmdarrah" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /></a></li>
        </ul>
            <p>Created By {data.site.siteMetadata.author} with <span>{data.site.siteMetadata.framework}.</span> © 2019</p>
        </footer>
    )
}

export default Footer