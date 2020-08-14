import React from "react";
import "./home.css";
import sawImg from "./assets/maskGroup1.png";
// import { action } from "./redux/actions"
import { connect } from "react-redux"
import { screenSizes } from "./constants";
import Slide from "react-reveal/Slide"
import consultationSVG from "./assets/consultation.svg"

class Home extends React.Component {

  render() {
    return (
      <Slide left>

         <div className="h-100 w-100">
           {/* Dream Home */}
            <div id="dream-homes-area">

              {/* Content */}
              <div id="dream-homes-content" className="row w-75 mt-3 dream-homes-content position-absolute">
                <div className="col mt-5 ml-5">
                  <div className='container'>
                    <div className='row d-flex flex-column justify-content-start ml-3 mt-2'>
                      <div className="we-rebuild-your" style={{width: "fit-content"}}>We Re-build your</div>
                        <div className="dream-homes" style={{width: "fit-content"}}>DREAM HOMES</div>
                        <div className="dream-homes-text" style={ 
                          this.props.screenSize !== screenSizes.MOBILE & this.props.screenSize !== screenSizes.TABLET
                            ? {maxWidth: "60%"}
                            : {}
                        }>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                          dolor sit amet, consectetur adipiscing elit.
                        </div>
                        {/* contact button */}
                        <button className="btn-main mt-2">CONTACT US</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* bg image */}
              <div className="bg-image">
                <img className="img" src={sawImg} alt=""></img>
              </div>

              </div>



              {/* TODO: Change to Vector Graphic */}
              {/* <img src={consultationSVG} alt=""></img>  */}


              {/* Maps */}
              <div className="group41">
                <div className="screenshotWwwgooglecom20200725000755"></div>
                <div className="rectangle12"></div>
              </div>
         </div>

      </Slide>
    );
  }
}

const mapStateToProps = state => ({
    screenSize: state.screenSize
})

// const mapDispatchToProps = { action }

export default connect(mapStateToProps)(Home);