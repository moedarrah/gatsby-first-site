import React, {Component} from "react"
import Navbar from "../components/navbar/Navbar"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import "../styles/index.scss"
import "../components/darkMode/DarkMode.scss"
import DarkMode from "../components/darkMode/DarkMode"
import Footer from "./footer"
import '@fortawesome/fontawesome-svg-core/styles.css';





class Layout extends Component {
  
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
  
    return (
      <DarkMode>
      <div>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        
      </div>
      {this.props.children}
      <Footer/>
      </DarkMode>
      
    )
  }
}

export default Layout
