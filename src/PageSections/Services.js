import React from "react"
import { connect } from "react-redux"
// import { action } from "../redux/actions"
import { services } from "./samples"
import { screenSizes } from "../constants"
import Slide from "react-reveal/Slide"

class Services extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            serviceDisplayed: services.drywall
        }
    }

    // TODO: Set and remove background color for selected services
    changeService(serviceName){
        this.setState({
            serviceDisplayed: serviceName
        })
    }

    // Handles Responsiveness
    componentDidUpdate(prevprops){
        if(prevprops.screenSize !== this.props.screenSize){
            const screen = this.props.screenSize
            if (screen === screenSizes.MOBILE){
                this.setState({
                    navClass: ""
                })
            }else if (screen === screenSizes.TABLET){
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
            <Slide right>
                {/* Our Services */}
                <div className="container ">
                    <div className="row our-services">
                        <div className="title-one mx-2">OUR</div>
                        <div className="title-two mx-2">SERVICES</div>
                    </div>

                    {/* TODO: text should be centered vertically (use breakpoints) */}
                    <div className="row mb-2">
                        <div 
                            className={this.state.serviceDisplayed === services.drywall
                                ? "col service-option-selected"
                                : "col services-options"
                            } 
                            onClick={()=>{this.changeService(services.drywall)}}>DRYWALL
                        </div>
                        <div 
                            className={this.state.serviceDisplayed === services.taping
                                ? "col service-option-selected"
                                : "col services-options"
                            } 
                            onClick={()=>{this.changeService(services.taping)}}>TAPING
                        </div>
                        <div 
                            className={this.state.serviceDisplayed === services.framing
                                ? "col service-option-selected"
                                : "col services-options"
                            } 
                            onClick={()=>{this.changeService(services.framing)}}>SIMPLE FRAMING
                        </div>
                        <div 
                            className={this.state.serviceDisplayed === services.renovation
                                ? "col service-option-selected"
                                : "col services-options"
                            } 
                            onClick={()=>{this.changeService(services.renovation)}}>RENOVATION
                        </div>
                    </div>

                    {/* Services Summary */}
                    <div id="service-preview-container" className="elevation rounded d-flex">

                        <div id="service-preview" className="d-flex flex-row">
                            <div className="service-summary mt-3">
                                <div className="container justify-content-start">
                                    <div className='row d-flex flex-column'>
                                    <div className='col service-preview-title title-secondary'>{this.state.serviceDisplayed.title}</div>
                                    <p className="service-preview-text">
                                        {this.state.serviceDisplayed.description}
                                    </p>
                                    <div className="col mb-3">
                                        <button className="btn-text">CONTACT US</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div 
                                className='service-preview-image'
                                style={{backgroundImage: `url(${this.state.serviceDisplayed.image})`}}    
                            ></div>
                        </div>
                    </div>
                </div>
            </Slide>
        )
    }
}

const mapStateToProps = state => ({
    screenSize: state.screenSize
})

// const mapDispatchToProps = { action }

export default connect(mapStateToProps)(Services)