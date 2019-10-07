import React from "react"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <div className="form">
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
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
              placeholder=" Name.."
            />
          </label>
        </p>

        <p>
          <label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              placeholder=" Email.."
            />
          </label>
        </p>
        <p>
          <label>
            <input
              name="bot-field"
              onChange={handleChange}
              placeholder=" Don't fill this out if your a human.."
            />
          </label>
        </p>

        <p>
          <label>
            <textarea
              name="message"
              onChange={handleChange}
              required
              placeholder=" Message.."
            />
          </label>
        </p>

        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}
