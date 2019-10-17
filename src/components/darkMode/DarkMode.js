import React from 'react'
import "../navbar/Navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'




const DarkMode = props => {
  
  
  const [darkMode, setDarkMode] = React.useState(false);
  

  
  return(
        
        <main className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "" }}><FontAwesomeIcon icon={faSun} /></span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "" : "grey" }}><FontAwesomeIcon icon={faMoon} /></span>
        </div>
      
        {props.children}
         
      </main>
    
  )
}
  
  export default DarkMode

