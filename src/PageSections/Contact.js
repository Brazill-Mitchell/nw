import React from "react"
import { connect } from "react-redux"
import Slide from "react-reveal/Slide"
import { screenSizes } from "../constants"


class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            contactContentClass: "contact-content",
            inputClass: "input-contact mb-3 mx-auto ",
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

    render(){
        return (
            <Slide right>
                {/* Contact Us */}
                <div id="contact-section" className='mb-5 mx-a'>

                    {/* Title */}
                    <div className="d-flex justify-content-center">
                        <span className="title-two">CONTACT US</span>
                    </div>

                    <div className=''>
                        <div className='col justify-content-center'>
                            {/* contact form */}
                            <div className={this.state.contactContentClass}>
                                <div className="contact-form-items ">
                                    <div className='container-fluid '>
                                        <div 
                                            className='row d-flex justify-content-center'
                                            style={this.props.screenSize !== screenSizes.MOBILE 
                                                ? {flexDirection: "row"}
                                                : {flexDirection: "column"}
                                            }
                                        >
                                            <div className='input-contact-container'>
                                                <div className={this.state.inputClass}>
                                                    <input className="input-box" placeholder="FIRST NAME" value={this.state.inputFirst} onChange={(event)=>{this.setField('inputFirst',event.target.value)}}></input>
                                                </div>
                                            </div>
                                            <div className='input-contact-container'>
                                                <div className={this.state.inputClass}>
                                                    <input className="input-box" placeholder="PHONE NUMBER" value={this.state.inputPhone} onChange={(event)=>{this.setField('inputPhone',event.target.value)}}></input>
                                                </div>
                                            </div>
                                            <div className='input-contact-container'>
                                                <div className={this.state.inputClass}>
                                                    <input className="input-box" placeholder="LAST NAME" value={this.state.inputLast} onChange={(event)=>{this.setField('inputLast',event.target.value)}}></input>
                                                </div>
                                            </div>
                                            <div className='input-contact-container'>
                                                <div className={this.state.inputClass}>
                                                    <input className="input-box" placeholder="EMAIL ADDRESS" value={this.state.inputEmail} onChange={(event)=>{this.setField('inputEmail',event.target.value)}}></input>
                                                </div>
                                            </div>
                                            <div id="input-remarks" className="">
                                                <input className="input-box" placeholder="YOUR REMARKS HERE" value={this.state.inputRemarks} onChange={(event)=>{this.setField('inputRemarks',event.target.value)}}></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* submit */}
                                <div className="">
                                    <div className="mt-2">
                                        <button className='btn-main'>SUBMIT</button>
                                    </div>
                                </div>
                            
                            </div>
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

export default connect(mapStateToProps)(Contact)