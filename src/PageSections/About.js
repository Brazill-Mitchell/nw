import React from "react"
import { connect } from "react-redux"
import { action } from "../redux/actions"
import { screenSizes } from "../constants"
import aboutImage from "../assets/outsiteCoRLk3sqlibwUnsplash.png";
import Fade from "react-reveal/Fade"


class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            aboutImageClass: "col-xs-12 col-sm-12 col-md-4 col-lg-5 mr-3 about-image"
        }
    }

    componentDidUpdate(prevprops){
        if(prevprops.screenSize !== this.props.screenSize){
            const screen = this.props.screenSize
            if (screen === screenSizes.MOBILE || screen === screenSizes.TABLET){
                this.setState({
                    aboutImageClass: "col-xs-12 col-sm-12 col-md-4 col-lg-5 mr-3 about-image-small"
                })
            }else{
                this.setState({
                    aboutImageClass: "col-xs-12 col-sm-12 col-md-4 col-lg-5 mr-3 about-image"
                })
            }
        }
    }



    render(){
        return (
                <Fade className="ml-2 mr-2 mt-5">
                    <div className="row justify-content-start">
                        {/* image */}
                        <div className={this.state.aboutImageClass}>
                        <img className="img rounded" src={aboutImage} alt=""></img>
                        </div>
                        {/* text */}
                        {/* TODO: image width breakpoint for md & lower */}
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6">
                        <div className="container-fluid">
                            <div className="row d-flex flex-column">
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
                </Fade>
        )
    }
}

const mapStateToProps = state => ({
    screenSize: state.screenSize
})

// const mapDispatchToProps = { action }

export default connect(mapStateToProps)(About)