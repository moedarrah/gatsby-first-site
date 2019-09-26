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
import Form from "../components/form"

var ReactRotatingText = require("react-rotating-text")

const myIndex = () => {
  return (
    <Layout>
      <div className="hero-image" id="home">
        <div className="hero-text1">
          <h1>
            Mohammed Darrah {" "}
            <ReactRotatingText
              items={[
                "a {Designer}",
                "a {Developer}",
                "{&}",
                "an {Interior Architect}",
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
      <div id="about"></div>
      <h1 className="about-h1">
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
            and I had worked in this field in my home town Syria and Sweden.
            Right now i am studying Front-End development at ,
            <span> Nackademin Stockholm.</span>
          </p>
        </li>
      </ul>
      <h1 className="whereAm">
        So...Where Am I<FontAwesomeIcon icon={faQuestion} />
      </h1>
      <Chart />
      <div id="projects"></div>
      <h1 className="projects">
        Projects
      </h1>
      <ul className="iframes">
        <li>
          <p className="project-p">
            <span>Miss Green</span> is an eCommerce project using vanilla
            javascript and bootstrap the main focus is to use local storage.
            <span><a href="https://mmdarrah.github.io/eCommerce/index.html" target="_blank"> Go to the project.</a></span>
          </p>
        </li>
        <li>
          <iframe
            src="https://mmdarrah.github.io/eCommerce/index.html"
            frameBorder="0"
            title="1"
          ></iframe>
        </li>
        <li>
        <p className="project-p">
        <span>Hire A Hero</span> is a project using vanilla
        javascript and an external json file the main focus is to import the items from an external json file
        <span><a href="https://mmdarrah.github.io/SuperHero4rent/" target="_blank"> Go to the project.</a></span>
      </p>
        </li>
        <li>
          <iframe
            src="https://mmdarrah.github.io/SuperHero4rent/"
            frameBorder="0"
            title="2"
          ></iframe>
        </li>
      </ul>
      <div id="contact"></div>
      <h1 className="contact-h1">
        Contact
      </h1>
      <h3 className="form-head">Have a question or want to work together?</h3>
      <Form />
    </Layout>
  )
}

export default myIndex
