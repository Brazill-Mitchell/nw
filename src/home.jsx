import React from "react";
import PropTypes from "prop-types";
import sawImg from "./assets/maskGroup1.png"
import aboutImage from "./assets/outsiteCoRLk3sqlibwUnsplash.png"
import project1 from "./assets/jasonBriscoeUv81e0oxxwqUnsplash.png"
import project2 from "./assets/danielMcculloughHtblqdxfg9kUnsplash9f2c92ca.png"
import project3 from "./assets/annieGrayWewtgkpuvt0Unsplash.png"
import "./home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        <div className="rectangle1"></div>
        <div className="group2">
          <div className="nw9b39fb13">NW</div>
          <div className="livingconstructiona93352ad">
            LIVING
            <br />
            CONSTRUCTION
          </div>
        </div>
        <div id="nav-bar" className="container">
          {" "}
          <div className="row d-flex flex-row">
            
            <div className="col nav-item">HOME</div>
            <div className="col nav-item">ABOUT</div>
            <div className="col nav-item">SERVICES</div>
            <div className="col nav-item">PROJECTS</div>
            <div className="col nav-item">CONTACT</div>
          </div>
          <svg preserveAspectRatio="none" viewBox="0 -1 56 2" className="line1">
            <path d="M 0 0 L 56 0" />
          </svg>
        </div>
        <div className="group4">
          {" "}
          <div className="rectangle2"></div>
          <div className="phone"></div>
          <div className="x9876543210">9876543210</div>
        </div>

         {/* Dream Home */}
        <div className="container-fluid dream-homes-area">
          <div id="dream-homes-content" className="dream-homes-content container position-absolute">
            {/* <div className="dream-homes-rectangle"></div> */}
            <div className="group5">
              <div className="col weReBuildYour">We Re-build your</div>
              <div className="col dreamHomes">DREAM HOMES</div>
              <div className="col sample-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </div>
              {/* contact button */}
              <div className="col-4 btn-contact">
                <button className="btn btn-default">CONTACT US</button>
              </div>
            </div>

          </div>
          {/* bg image */}
          <div className="bg-dream-homes row">
            <div className="col">
              <img className="img" src={sawImg} alt=""></img>
            </div>
          </div>

         
          
        </div>
        {/* <div className="group15">
          {" "}
          <div className="rectangle6e904d840"></div>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 422 179"
            className="path265c0dd9b"
          >
            <path d="M 0 0 L 422 0 L 335.1560668945313 179 L 0 179 L 0 0 Z" />
          </svg>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 422 179"
            className="path17777ed57a"
          >
            <path d="M 0 0 L 422 0 L 335.1560668945313 179 L 0 179 L 0 0 Z" />
          </svg>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 422 179"
            className="path3"
          >
            <path d="M 422 179 L 0 179 L 86.84393310546875 0 L 422 0 L 422 179 Z" />
          </svg>
          <div className="group11">
            {" "}
            <div className="x16Awards">16 AWARDS</div>
            <div className="nounaward1539618"></div>
          </div>
          <div className="group12">
            {" "}
            <div className="x200ProjectsCompleted">200+ PROJECTS COMPLETED</div>
            <div className="nounhome323088"></div>
          </div>
          <div className="group13">
            {" "}
            <div className="x70Clients">70+ CLIENTS</div>
            <div className="nounusers749183"></div>
          </div>
        </div> */}
        <div className="group23">
          {" "}
          <div className="rectangle6"></div>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 422 231.736328125"
            className="path2"
          >
            <path d="M 0 0 L 422 0 L 335.1560668945313 231.736328125 L 0 231.736328125 L 0 0 Z" />
          </svg>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 422 231.736328125"
            className="path17"
          >
            <path d="M 0 0 L 422 0 L 335.1560668945313 231.736328125 L 0 231.736328125 L 0 0 Z" />
          </svg>
        </div>

        {/* About Area */}
        <div className="container-fluid">
          <div className='row'>
            {/* bg image */}
            <div className="col-6 outsiteCoRLk3sqlibwUnsplash">
              <img className="img" src={aboutImage} alt=""></img>
            </div>
            {/* text */}
            <div className='col-6'>
              <div className='container'>
                <div className='row d-flex flex-column'>
                  <div className="col about">ABOUT</div>
                  <div className="col loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequatDuisAuteIrureDolorIn97d1f490">
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

        {/* Our Services */}
        <div className="container-fluid group22">
          <div className="row group17">
            <div className="col">OUR</div>
            <div className="col">SERVICES</div>
          </div>
          <div className="row group18">
            {/* <svg
              preserveAspectRatio="none"
              viewBox="-31 0 409.4993896484375 79.715576171875"
              className="path183381cc1b"
            >
              <path d="M -3.542412757873535 0 L 378.4993896484375 0 L 350.7490234375 79.715576171875 L -31 79.715576171875 L -3.542412757873535 0 Z" />
            </svg>
            <svg
              preserveAspectRatio="none"
              viewBox="-31.75 -0.75 410.9993896484375 81.215576171875"
              className="path18ee29d597"
            >
              <path d="M -3.542412757873535 0 L 378.4993896484375 0 L 350.7490234375 79.715576171875 L -31 79.715576171875 L -3.542412757873535 0 Z" />
            </svg>
            <svg
              preserveAspectRatio="none"
              viewBox="-31.75 -0.75 410.99945068359375 81.215576171875"
              className="path18725e6eb5"
            >
              <path d="M -3.542412757873535 0 L 378.4993896484375 0 L 350.7490234375 79.715576171875 L -31 79.715576171875 L -3.542412757873535 0 Z" />
            </svg>
            <svg
              preserveAspectRatio="none"
              viewBox="-31.75 -0.75 410.9993896484375 81.215576171875"
              className="path18"
            >
              <path d="M -3.542412757873535 0 L 378.4993896484375 0 L 350.7490234375 79.715576171875 L -31 79.715576171875 L -3.542412757873535 0 Z" />
            </svg> */}
            
            <div className="col services-bar">DRYWALL</div>
            <div className="col services-bar">TAPING</div>
            <div className="col services-bar">SIMPLE FRAMING</div>
            <div className="col services-bar">RENOVATION</div>
          </div>
          <div className="group21">
            {" "}
            <div className="rectangle7"></div>
            <div className="charlesDeluvioZa9oagrjnlmUnsplash"></div>
            <div className="group20">
              {" "}
              <div className="drywallServices">DRYWALL SERVICES</div>
              <div className="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequatDuisAuteIrureDolorIn">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
              <div className="group19">
                {" "}
                <div className="rectangle543373888"></div>
                <div className="contactUsd43b769d">CONTACT US</div>
              </div>
            </div>
          </div>
        </div>


        <div className="group25">
          {" "}
          <div className="getYourFreeConsultationNow">
            GET YOUR FREE CONSULTATION NOW !
          </div>
          <div className="weWillHelpYouReBuildEverythingAsPerYourRequirementsWeAreACompanyThatOffersDesignAndBuildServicesForYouFromInitialSketchesToTheFinalConstruction">
            We will help you re-build everything as per your requirements. We
            are a company that offers design and build services for you from
            initial sketches to the final construction.
          </div>
        </div>

        {/* Contact Us */}
        <div className="group24">
          <div className="rectangle8"></div>
          <div className="contactUs8e14d283">CONTACT US</div>
        </div>

        {/* Featured Projects */}
        <div className="container">
          <div className='row'>
            <div className="col">FEATURED</div>
            <div className="col">PROJECTS</div>
          </div>
          {/* samples */}
          <div className="row">
            <div className='col-4'>
              <img className='img' src={project1} alt=''></img>
            
              {/* project1 */}
              <div className="projectTitle1809ccb7">PROJECT TITLE</div>
              <div className="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliqua35108073">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>

              {/* project2 */}
            <div className='col-4'>
              <img className='img' src={project2} alt=''></img>
              <div className="projectTitle1809ccb7">PROJECT TITLE</div>
              <div className="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliqua35108073">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
            
              {/* project3 */}
            <div className='col-4'>
              <img className='img' src={project3} alt=''></img>
              <div className="projectTitle1809ccb7">PROJECT TITLE</div>
              <div className="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliqua35108073">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>

        

        {/* Contact Us */}
        <div className="container">
          <div className="row">
            <div className='col'>CONTACT US</div>
          </div>
        </div>
        
        {/* contact form */}
        <div className="container">

          {/* bg image */}
          <div className="row">
            <div className='col'>
              <img className='img' src={project2} alt=''></img>
            </div>
          </div>

          {/* form */}
          <div className="row">
            <div className="col-6">FIRST NAME</div>
            <div className="col-6">PHONE NUMBER</div>
            <div className="col-6">LAST NAME</div>
            <div className="col-6">EMAIL ADDRESS</div>
          </div>

          {/* submit */}
          <div className="row">
            <div className="col submit">
              <button class='btn-main'>SUBMIT</button>
            </div>
          </div>
        </div>


        <div className="group41">
          {" "}
          <div className="screenshotWwwgooglecom20200725000755"></div>
          <div className="rectangle12"></div>
        </div>
        <div className="group40">
          {" "}
          <div className="rectangle13"></div>
          <div className="group36">
            {" "}
            <div className="loremIpsumDolorSitAmetConsecteturAdipisicin">
              Lorem ipsum dolor sit amet, consectetur adipisicin
            </div>
            <div className="address">Address :</div>
          </div>
          <div className="followForLatestUpdates">
            FOLLOW FOR LATEST UPDATES :
          </div>
          <div className="group38">
            {" "}
            <div className="facebook1"></div>
            <div className="instagram"></div>
            <div className="twitter"></div>
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
            <div className="nw">NW</div>
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

Home.propTypes = {};

Home.defaultProps = {};

export default Home;