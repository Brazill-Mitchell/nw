import React from "react"
import { connect } from "react-redux"
import facebookImg from "../assets/facebook1.png"
import instagramImg from "../assets/instagram.png"
import twitterImg from "../assets/twitter.png"
import Fade from "react-reveal/Fade"

class Footer extends React.Component{


    render(){
        return (
            <Fade>
                <div id="footer-container" className="container-fluid">

                    {/* General */}
                    <div id="footer-general" className="text-left">
                        {/* Logo */}
                        <div className='mb-2'>
                            <div className='container-fluid'>
                                <div className='row d-flex flex-column'>
                                <div className="nw-logo-footer">NW</div>
                                <div className="logo-text-footer" style={{color:"white"}}>
                                    LIVING
                                    <br />
                                    CONSTRUCTION
                                </div>
                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div className='footer-address'>
                            Address: <br/>
                            123 Drive Way, United States
                        </div>
                    </div>

                    {/* Social */}
                    <div id='footer-socials'>
                        <div className="">
                            FOLLOW FOR LATEST UPDATES :
                        </div>
                        <div className="social-container d-flex flex-row">
                            <div className="social-icon">
                                <img className='img' src={facebookImg} alt=''></img>
                            </div>
                            <div className="social-icon">
                                <img className='img' src={instagramImg} alt=''></img>
                            </div>
                            <div className="social-icon">
                                <img className='img' src={twitterImg} alt=''></img>
                            </div>
                        </div>
                    </div>

                    {/* Footer Contact */}
                    <div id='footer-contact ' className="d-flex flex-column justify-content-center text-right">
                        <div className="emailContact">Email : contact@xstudio.com</div>
                        <div className="phone2468465">Phone : 2468465</div>
                        <div className="group40Eaf1625de6e3"></div>
                        <div className="allRightsReserved2020">
                            All Rights Reserved
                            <br />
                            2020
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
}

const mapStateToProps = state => ({
    property: state.property
})

// const mapDispatchToProps = { action }

export default connect(mapStateToProps)(Footer)