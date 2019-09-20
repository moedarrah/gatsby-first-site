import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"


export default function blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <Layout>
      <h1 className="projects">Projects</h1>

      <ol className="projectsList">
        {data.allMarkdownRemark.edges.map(edge => {
          return (
              <li className="list">
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
              </li>
          )
        })}
      </ol>
    </Layout>
  )
}
