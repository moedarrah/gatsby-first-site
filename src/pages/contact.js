import React from 'react'
import Layout from "../components/layout"

const Contact = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input name="bot-field" placeholder="Your Email" type="email" />
      <input type="hidden" name="form-name" value="contact" />
     
      <button>Send</button>
    </form>
  </Layout>
)

export default Contact