import React from "react"
import { connect } from "react-redux"
// import { action } from "../redux/actions"
import facebookImg from "../assets/facebook1.png"
import instagramImg from "../assets/instagram.png"
import twitterImg from "../assets/twitter.png"

class Footer extends React.Component{


    render(){
        return (
            <div>
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
        )
    }
}

const mapStateToProps = state => ({
    property: state.property
})

// const mapDispatchToProps = { action }

export default connect(mapStateToProps)(Footer)