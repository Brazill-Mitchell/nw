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

  const refNav = useRef(null)
  const refHome = useRef(null)
  const refAbout = useRef(null)
  const refContact = useRef(null)
  const refProjects = useRef(null)
  const refServices = React.createRef()

  const refList = {
    refNav: refNav,
    refHome: refHome ,
    refAbout: refAbout ,
    refContact: refContact ,
    refProjects: refProjects ,
    refServices: refServices 
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
      <Home refHome={refList.refHome}/>
      <About refAbout={refList.refAbout}/>
      <Contact refContact={refList.refContact}/>
      <Projects refProjects={refList.refProjects}/>
      <Services refServices={refServices}/>
      <Map/>
      <Footer/>
      
    </div>
  );
}

const mapStateToProps = state => ({
  refList: state.refList
})

const mapDispatchToProps = { setScreenSize }

export default connect(mapStateToProps,mapDispatchToProps)(App);
