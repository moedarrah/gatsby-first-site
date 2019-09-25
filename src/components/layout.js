import React, {Component} from "react"
import Navbar from "../components/navbar/Navbar"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import Backdrop from "../components/Backdrop/Backdrop"
import "../styles/index.scss"
import "../components/darkMode/DarkMode.scss"
import DarkMode from "../components/darkMode/DarkMode"
import Footer from "./footer"





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
    let backdrop
    
    

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
      
    }

    
    return (
      <DarkMode>
      <div>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
      </div>
      {this.props.children}
      <Footer/>
      </DarkMode>
      
    )
  }
}

export default Layout
