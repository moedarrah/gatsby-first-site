import React from "react"
import Layout from "../components/layout"
var ReactRotatingText = require('react-rotating-text');

const myIndex = () => {
  return (
    <Layout>

    <h1>Am Mohammed and i am a <ReactRotatingText items={['{Designer}', '{Developer}']} /></h1>
    <h2>Welcome to my Portfolio</h2>
    
    </Layout>
  )
}

export default myIndex
