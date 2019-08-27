import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const home = () => {
  return (
    <Layout>
      <h1>Hello,</h1>
      <h4>
        <Link to="/">Go back to homepage.</Link>
      </h4>
      <h2>Welcome to first Gatsby site.</h2>
      <a href="http://google.se" target="blank">
        Google
      </a>
    </Layout>
  )
}

export default home
