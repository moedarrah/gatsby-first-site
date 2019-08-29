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
      <input type="text" name="bot-field" />
      <input type="text" name="form-name" value="contact" />
      {/* <input name="name" placeholder="Your Name" type="text" />
      <input name="email" placeholder="name@name.com" type="email" />
      <textarea name="message" /> */}
      <button>Send</button>
    </form>
  </Layout>
)

export default Contact