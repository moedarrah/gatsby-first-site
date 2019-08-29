import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1 className="contact">I'd love to talk! Email me at the address below</h1>
    <p className="contactp">
    <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input name="name" placeholder="Your Name" type="text" />
      {/* <input name="email" placeholder="name@name.com" type="email" />
      <textarea name="message" /> */}
      <button>Send</button>
    </form>
    </p>
  </Layout>
)