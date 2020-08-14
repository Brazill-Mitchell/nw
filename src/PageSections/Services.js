import React from "react"
import { connect } from "react-redux"
// import { action } from "../redux/actions"
import { services } from "./samples"

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

    render(){
        return (
            <div>
                {/* Our Services */}
                <div className="container ">
                    <div className="row our-services">
                        <div className="title-one mx-2">OUR</div>
                        <div className="title-two mx-2">SERVICES</div>
                    </div>

                    {/* TODO: text should be centered vertically (use breakpoints) */}
                    <div className="row">
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
                    {/* TODO: Display selected service*/}
                    <div id="service-preview-container" className="elevation rounded">

                        {/* service summary */}
                        <div className="service-preview mt-4 d-flex flex-row">
                            <div className="service-summary mt-3">
                                <div className="container justify-content-start">
                                    <div className='row d-flex flex-column'>
                                    <div className='col service-preview-title'>{this.state.serviceDisplayed.title}</div>
                                    <div className="col service-preview-summary">
                                        {this.state.serviceDisplayed.description}
                                    </div>
                                    <div className="col mb-3">
                                        <button className="btn-text">CONTACT US</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='service-preview-image'>
                                <img className='img rounded-right' src={this.state.serviceDisplayed.image} alt=''></img>
                            </div>
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

export default connect(mapStateToProps)(Services)