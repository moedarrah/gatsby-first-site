import React from 'react'
import { navigate } from 'gatsby-link'


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <div>
    <form
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          
          <br />
          <input type="text" name="name" onChange={handleChange} required placeholder="Name:"/>
        </label>
      </p>
      <p>
        <label>
          
          <br />
          <input type="email" name="email" onChange={handleChange} required placeholder="Email:"/>
        </label>
      </p>
      <p>
        <label>
          <br />
          <textarea name="message" onChange={handleChange} required placeholder="Message:"/>
        </label>
      </p>
      <label>
        <input name="bot-field" onChange={handleChange} placeholder="Don't fill this out if your a human:"/>
        </label>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    </div>
    
  )
}