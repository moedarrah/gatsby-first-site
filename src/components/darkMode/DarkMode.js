import React from 'react'
import "../navbar/Navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'




const DarkMode = props => {


  if (typeof window !== 'undefined') {
   
    const [darkMode, setDarkMode] = React.useState(getInitialMode());
    React.useEffect(() => {
      
      localStorage.setItem("dark", JSON.stringify(darkMode));
    }, [darkMode]);
  
    function getInitialMode() {
      
      const isReturningUser = "dark" in localStorage;
      const savedMode = JSON.parse(localStorage.getItem("dark"));
      const userPrefersDark = getPrefColorScheme();
      // if mode was saved --> dark / light --------------------------------------------------------------------------target="_blank"
      if (isReturningUser) {
        return savedMode;
        // if preferred color scheme is dark --> dark
      } else if (userPrefersDark) {
        return true;
        // otherwise --> light
      } else {
        return false;
      }
      // return savedMode || false;
    }
    
    function getPrefColorScheme() {
      if (!window.matchMedia) return;
  
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
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
              <label htmlFor="checkbox" aria-label="dark mode tagel"/>
            </span>
            <span style={{ color: darkMode ? "" : "grey" }}><FontAwesomeIcon icon={faMoon} /></span>
          </div>
        
          {props.children}
           
        </main>
      
    )
}
else{
  return(
  <div></div>
)
}

  
}
  
  export default DarkMode

