import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faFighterJet,
  faMobileAlt,
  faRulerCombined,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import Chart from "../components/Chart"

var ReactRotatingText = require("react-rotating-text")

const myIndex = () => {
  return (
    <Layout>
      <div className="hero-image" id="home">
        <div className="hero-text1">
          <h1>
            Mohammed Darrah a{" "}
            <ReactRotatingText
              items={[
                "{Designer}",
                "{Developer}",
                "{&}",
                "{Interior Architect}",
              ]}
            />
          </h1>
        </div>
        <span className="hero-text2">
          <h2>
            Welcome to my
            <span className="logoSpan"> Portfolio</span>
          </h2>
        </span>
        <a href="#contact" className="callMe">
          Contact me <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
      <h1 className="about-h1" id="about">
        My Main Focus
      </h1>
      <ul className="icons-ul">
        <li className="icons-li">
          <div className="icon">
            <FontAwesomeIcon icon={faFighterJet} />
          </div>
          <div className="icon-head">Fast loading</div>
        </li>
        <li className="icons-li">
          <div className="icon">
            <FontAwesomeIcon icon={faMobileAlt} />
          </div>
          <div className="icon-head">Responsive</div>
        </li>
        <li className="icons-li">
          <div className="icon">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="icon-head">Built With Love</div>
        </li>
        <li className="icons-li">
          <div className="icon">
            <FontAwesomeIcon icon={faRulerCombined} />
          </div>
          <div className="icon-head">Precisely</div>
        </li>
      </ul>
      <ul className="about-list">
        <li>
          <p className="about-p1">
            Hi! My name is <span>Mohammed Darrah</span> and am a front-end
            student at Nackademin. Please take a look around!
          </p>
        </li>
        <li>
          <p className="about-p">
            Finding the problem and trying to fix it in a smart way has always
            been my passion. I have a bachelor's degree in interior architect
            and I had worked in this field in my home town Syria and in Sweden.
            Right now i am studying Front-End development at ,
            <span>Nackademin Stockholm</span>.
          </p>
        </li>
      </ul>
      <h1 className="about-h1">
        So...Where Am I<FontAwesomeIcon icon={faQuestion} />
      </h1>
      <Chart />
      <h1 className="about-h1" id="projects">
        Projects
      </h1>
      <ul className="iframes">
        <li>
          <p className="project-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            mollitia autem nostrum hic reprehenderit voluptatum ipsa consequatur
            impedit animi reiciendis?
          </p>
        </li>
        <li>
          <iframe
            src="https://mmdarrah.github.io/eCommerce/index.html"
            frameborder="0"
            title="1"
          ></iframe>
        </li>
        <li>
          <p className="project-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            mollitia autem nostrum hic reprehenderit voluptatum ipsa consequatur
            impedit animi reiciendis?
          </p>
        </li>
        <li>
          <iframe
            src="https://mmdarrah.github.io/SuperHero4rent/"
            frameborder="0"
            title="2"
          ></iframe>
        </li>
      </ul>
      <h1 className="about-h1" id="contact">
        Contact
      </h1>
      
<form method="POST" data-netlify="true">
  <p>
    <label>Name: <input  name="form-name" value="name-of-form"/></label>
  </p>
  <p>
    <label>Email: <input  name="form-email" value="email-of-form"/></label>
  </p>
  <p>
    <label>Message: <textarea name="form-message" value="message-of-form"></textarea></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

    </Layout>
  )
}

export default myIndex
