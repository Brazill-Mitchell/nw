import React, { useEffect, useRef } from 'react';
import Home from './Home.js'
import { connect } from "react-redux"
import { setScreenSize } from "./redux/actions"
import { mediaBreakPoints } from "./constants"
import About from "./PageSections/About"
import Contact from "./PageSections/Contact"
import Footer from "./PageSections/Footer"
import Nav from "./PageSections/Nav"
import Projects from "./PageSections/Projects"
import Services from "./PageSections/Services"
import Map from "./PageSections/Map"

import './App.css';



function App(props) {
  const refHome = useRef(null)
  const refAbout = useRef(null)
  const refContact = useRef(null)
  const refProjects = useRef(null)
  const refServices = useRef(null)
  
  const refList = {
    home: refHome ,
    about: refAbout ,
    contact: refContact ,
    projects: refProjects ,
    services: refServices 
  }
 
  


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

    useEffect(()=>{
      handleResize()
    },[])


  return (
    <div className="App">
      
      
      <Nav refList={refList}/>
      <Home ref={refList.home}/>
      <About testProp="Test Prop" ref={refList.about}/>
      <Contact ref={refList.contact}/>
      <Projects ref={refList.projects}/>
      <Services ref={refList.services}/>
      <Map/>
      <Footer/>
      
    </div>
  );
}

const mapDispatchToProps = { setScreenSize }

export default connect(null,mapDispatchToProps)(App);
