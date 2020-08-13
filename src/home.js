import React from "react";
import "./home.css";
import sawImg from "./assets/maskGroup1.png";
import aboutImage from "./assets/outsiteCoRLk3sqlibwUnsplash.png";
import project1 from "./assets/jasonBriscoeUv81e0oxxwqUnsplash.png";
import project2 from "./assets/danielMcculloughHtblqdxfg9kUnsplash9f2c92ca.png";
import project3 from "./assets/annieGrayWewtgkpuvt0Unsplash.png";
import facebookImg from "./assets/facebook1.png"
import instagramImg from "./assets/instagram.png"
import twitterImg from "./assets/twitter.png"
import servicePreviewImg from "./assets/charlesDeluvioZa9oagrjnlmUnsplash.png"
import { testAction } from "./redux/actions"
import { connect } from "react-redux"
 

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        inputFirst: "",
        inputPhone: "",
        inputLast: "",
        inputEmail: "",
        inputRemarks: ""
        };
    }

    setField(fieldName,e){
        const state = this.state
        this.setState({
        ...state, [fieldName]: e
        },console.log(this.state))
    }
  
    componentDidMount(){

    }

  render() {
    return (
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
                    <div className="dream-homes-text">
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
          <div className="bg-dream-homes">
              <img className="img" src={sawImg} alt=""></img>
          </div>

        </div>
      
        {/* About Area */}
        <div className="container-fluid mt-5">
          <div className='row justify-content-start'>
            {/* image */}
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 mr-3 ">
              <img className="img rounded" src={aboutImage} alt=""></img>
            </div>
            {/* text */}
            {/* TODO: image width breakpoint for md & lower */}
            <div className='col-xs-12 col-sm-12 col-md-5 col-lg-6'>
              <div className='container-fluid'>
                <div className='row d-flex flex-column'>
                  <div className="col about-title">ABOUT</div>
                  <div className="col about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TODO: Change to Vector Graphic */}
        <div className="decoration-bar mt-5">
          <div className="consultation-text position-absolute w-75 mx-auto">
            <span className="font-color-primary font-weight-bolder">GET YOUR FREE CONSULTATION NOW !</span><br/>
            <span className="font-color-primary">We will help you re-build everything as per your requirements. We are a company that offers design and build services for you from initial sketches to the final construction.</span>
          </div>
          <div className="decoration-rect-full h-100">
            <div className="decoration-rect-left"></div>
          </div>

          {/* contact button */}
          <div>
            <button className="btn-secondary">CONTACT</button>
          </div>
        </div>

        {/* Our Services */}
        <div className="container-fluid ">
          <div className="row our-services">
            <div className="title-one mx-2">OUR</div>
            <div className="title-two mx-2">SERVICES</div>
          </div>

          {/* TODO: text should be centered vertically (use breakpoints) */}
          <div className="row">
            <div className="col services-options">DRYWALL</div>
            <div className="col services-options">TAPING</div>
            <div className="col services-options">SIMPLE FRAMING</div>
            <div className="col services-options">RENOVATION</div>
          </div>

          {/* Services Summary */}
          {/* TODO: Display selected service*/}
        <div id="service-preview-container" className="container-fluid elevation rounded">

          {/* service summary */}
          <div className="row mt-4">
            <div className="col-7 mt-3">
              <div className="container ">
                <div className='row d-flex flex-column'>
                  <div className='col service-preview-title'>DRYWALL SERVICES</div>
                  <div className="col service-preview-summary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                  </div>
                  <div className="col mb-3">
                    <button className="btn-main">CONTACT US</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='service-preview-image'>
              <img className='img rounded-right' src={servicePreviewImg} alt=''></img>
            </div>
          </div>
        </div>
      </div>

        {/* Featured Projects */}

        <div className="row d-flex justify-content-center">
          <span className="title-one">FEATURED</span>
          <span className="title-two">PROJECTS</span>
        </div>
        
        <div className="container-fluid mb-5">
          {/* samples */}
          <div className="row d-flex justify-content-around mx-4">
            
            {/* project1 */}
            <div className='project-card mx-2 elevation-low rounded'>
              <img className='img rounded-top' src={project1} alt=''></img>
              <div className="project-title text-left mx-3">PROJECT TITLE</div>
              <div className="project-description text-left mx-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>

              {/* project2 */}
            <div className='project-card mx-2 elevation-low rounded'>
              <img className='img rounded-top' src={project2} alt=''></img>
              <div className="project-title text-left mx-3">PROJECT TITLE</div>
              <div className="project-description text-left mx-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            
              {/* project3 */}
            <div className='project-card mx-2 elevation-low rounded'>
              <img className='img rounded-top' src={project3} alt=''></img>
              <div className="project-title text-left mx-3">PROJECT TITLE</div>
              <div className="project-description text-left mx-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>

        
        {/* Contact Us */}
        <div id="contact-section" className='mb-5'>

          {/* Title */}
          <div className="d-flex justify-content-center">
            <span className="title-two">CONTACT US</span>
          </div>

          <div className='row'>
            <div className='col'>
              {/* contact form */}
              <div id="contact-content" className="h-100 w-100 d-flex justify-content-center">

                {/* form */}
                <div id="contact-form" className='h-100 w-100 position-absolute d-flex justify-content-center mt-5'>
                  {/* <div className='col-10'> */}
                    <div className='h-100 w-100'>
                      <div className="contact-form-items h-100 w-100 ">
                        <div className="input-contact mx-2 my-1">
                          <input placeholder="FIRST NAME" value={this.state.inputFirst} onChange={(event)=>{this.setField('inputFirst',event.target.value)}}></input>
                        </div>
                        <div className="input-contact mx-2 my-1">
                          <input placeholder="PHONE NUMBER" value={this.state.inputPhone} onChange={(event)=>{this.setField('inputPhone',event.target.value)}}></input>
                        </div>
                        <div className="input-contact mx-2 my-1">
                          <input placeholder="LAST NAME" value={this.state.inputLast} onChange={(event)=>{this.setField('inputLast',event.target.value)}}></input>
                        </div>
                        <div className="input-contact mx-2 my-1">
                          <input placeholder="EMAIL ADDRESS" value={this.state.inputEmail} onChange={(event)=>{this.setField('inputEmail',event.target.value)}}></input>
                        </div>
                        <div id="input-remarks" className="input-contact mx-2 my-1">
                          <input placeholder="YOUR REMARKS HERE" value={this.state.inputRemarks} onChange={(event)=>{this.setField('inputRemarks',event.target.value)}}></input>
                        </div>
                      </div>

                      {/* submit */}
                      <div className="">
                        <div className=" submit">
                          <button className='btn-main'>SUBMIT</button>
                        </div>
                      </div>
                    </div>
                  {/* </div> */}
                </div>

                {/* bg image */}
                <div className="bg-image">
                  {/* <div className="dark-overlay"></div> */}
                  <img className="img" src={project2} alt=""></img>
                </div>
                
              </div>
            </div>
          </div>
        </div>


            {/* Maps */}
        <div className="group41">
          {" "}
          <div className="screenshotWwwgooglecom20200725000755"></div>
          <div className="rectangle12"></div>
        </div>

        {/* Footer */}
        <div className="container">
          <div className="row position-absolute" style={{opacity:".4"}}>
            <div className="col bg-primary">Background square</div>
          </div>
          <div className="row">
              <div className="loremIpsumDolorSitAmetConsecteturAdipisicin">
                Lorem ipsum dolor sit amet, consectetur adipisicin
              </div>
            <div className="address">Address :</div>
          </div>
          <div className="followForLatestUpdates">
            FOLLOW FOR LATEST UPDATES :
          </div>
          <div className="row">
            {" "}
            <div className="col-1 social-icon">
              <img className='img' src={facebookImg} alt=''></img>
            </div>
            <div className="col-1 social-icon">
              <img className='img' src={instagramImg} alt=''></img>
            </div>
            <div className="col-1 social-icon">
              <img className='img' src={twitterImg} alt=''></img>
            </div>
          </div>
          <div className="emailContact">Email : contact@xstudio.com</div>
          <div className="phone2468465">Phone : 2468465</div>
          <div className="group40Eaf1625de6e3"></div>
          <div className="allRightsReserved2020">
            All Rights Reserved
            <br />
            2020
          </div>
          <div className="group39">
            {" "}
            <div id="nw-logo" className="nw">NW</div>
            <div className="livingconstruction">
              LIVING
              <br />
              CONSTRUCTION
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
    screenSize: state.screenSize
})

const mapDispatchToProps = { testAction }

export default connect(mapStateToProps,mapDispatchToProps)(Home);
