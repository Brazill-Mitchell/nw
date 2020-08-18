import React from "react"
import { connect } from "react-redux"
import phoneImg from "../assets/phone.png"
import { screenSizes } from "../constants"
import Fade from "react-reveal/Fade"


class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navClass: ""
        }
    }

    jumpTo(sectionRef){
        sectionRef.current.scrollIntoView()
    }

    componentDidUpdate(prevprops){
        if(prevprops.screenSize !== this.props.screenSize){
            const screen = this.props.screenSize
            if (screen === screenSizes.MOBILE){
                this.setState({
                    navClass: ""
                })
            }else{
                this.setState({
                    navClass: ""
                })
            }
        }
    }


    render(){
        return (
            <Fade>
                <div className="sticky-top bg-white">
                    <div className="row d-flex flex-row justify-content-start mt-3 mx-2 mb-3"
                        style={this.props.screenSize !== screenSizes.MOBILE
                            ? {flexWrap: "nowrap"}
                            : {}
                        }
                    >

                        {/* Logo */}
                        <div 
                            className="logo-head mb-2"
                            style={this.props.screenSize === screenSizes.MOBILE
                                ? {width: "100%", display: "flex", justifyContent:"space-between"}
                                : {}
                            }
                        >
                            <div className="container-fluid">
                                <div className="row d-flex flex-column">
                                <div className="nw-logo">NW</div>
                                <div className="living-construction">
                                    LIVING
                                    <br />
                                    CONSTRUCTION
                                </div>
                                </div>
                            </div>

                            {/* display phone icon for mobile */}
                            {this.props.screenSize === screenSizes.MOBILE
                                ? <div className="phone mt-3 mr-2">
                                    <div className="btn-phone">
                                        <img src={phoneImg} className="my-1 phone-image" alt=""></img>
                                    </div>
                                </div>
                                : []
                                }
                        </div>

                        {/* TODO: Justify start for larger screen, center for small screen */}
                        {/* Nav */}
                        <div id="nav-bar" className={this.props.screenSize === screenSizes.MOBILE
                                ? "mt-4"
                                : "ml-5 mt-4"
                            }>
                            <div className="container-fluid d-flex">
                                <div className="row w-100 d-flex flex-row justify-content-center"> 
                                <span className="nav-item" onClick={()=>{this.jumpTo(this.props.refList.home)}}>HOME</span>
                                <span className="nav-item" onClick={()=>{this.jumpTo(this.props.refList.about)}}>ABOUT</span>
                                <span className="nav-item" onClick={()=>{this.jumpTo(this.props.refList.services)}}>SERVICES</span>
                                <span className="nav-item" onClick={()=>{this.jumpTo(this.props.refList.projects)}}>PROJECTS</span>
                                <span className="nav-item" onClick={()=>{this.jumpTo(this.props.refList.contact)}}>CONTACT</span>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            {this.props.screenSize === screenSizes.MOBILE
                                ? []
                                : <div className="phone mt-3">
                                    <div className="btn-phone">
                                        <img src={phoneImg} className="phone-image" alt=""></img>
                                        9876543210
                                    </div>
                                </div>
                            }
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

export default connect(mapStateToProps)(Nav)