import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"






export default () => (
  <div>
  <div className="hero-thanks">
  <div className="thanks-container">
  <div className="thanks-text-dark">
    <h1>Thank you for your message.</h1>
  </div>
  <div className="thanks-text-dark">
    <h2>I will contact you as soon as possible.</h2>
  </div>
  <div className="back-link"><a href="../"><FontAwesomeIcon icon={faArrowLeft} /> <FontAwesomeIcon icon={faArrowLeft} /> Go back to 
 <span> Homepage </span></a></div>
</div>
  </div>
  </div>
)