 import React from "react"
 import { useStaticQuery, graphql  } from "gatsby"

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
            <p>Created By {data.site.siteMetadata.author} with {data.site.siteMetadata.framework}. © 2019</p>
        </footer>
    )
}

export default Footer