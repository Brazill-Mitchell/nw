import React, { useEffect } from 'react';
import NW from './home.js'
import { connect } from "react-redux"
import { setScreenSize } from "./redux/actions"
import { mediaBreakPoints } from "./constants"
import About from "./PageSections/About"
import Contact from "./PageSections/Contact"
import Footer from "./PageSections/Footer"
import Nav from "./PageSections/Nav"
import Projects from "./PageSections/Projects"
import Services from "./PageSections/Services"


import './App.css';



function App(props) {


    // Responsive
    function getScreenSize(){
      let windowSize = ''
      for (let x  = 0; x < mediaBreakPoints.length; x++){
          if(window.matchMedia(mediaBreakPoints[x][1]).matches){
              windowSize =  mediaBreakPoints[x][0]
              return windowSize
          }
      }
      return windowSize
    }
  
    function handleResize(){
      const size = getScreenSize()
      if (props.screenSize !== size){
        props.setScreenSize(size)
      }
    }
  
    useEffect(()=>{
      window.addEventListener('resize', handleResize)
    },[])


  return (
    <div className="App">
      
      
      <Nav/>
      <About/>
      <Contact/>
      <Projects/>
      <Services/>
      <Footer/>
      <NW testProp="testProp"></NW>
    </div>
  );
}

const mapDispatchToProps = { setScreenSize }

export default connect(null,mapDispatchToProps)(App);
