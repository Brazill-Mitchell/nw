import React from "react"
import { connect } from "react-redux"
import { action } from "../redux/actions"
import project2 from "../assets/danielMcculloughHtblqdxfg9kUnsplash9f2c92ca.png";



class Contact extends React.Component{
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

    render(){
        return (
            <div>
                {/* Contact Us */}
                <div id="contact-section" className='mb-5'>

                    {/* Title */}
                    <div className="d-flex justify-content-center">
                        <span className="title-two">CONTACT US</span>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            {/* contact form */}
                            <div id="contact-content" className="d-flex justify-content-center">

                                {/* form */}
                                <div id="contact-form" className='position-absolute d-flex flex-column justify-content-center'>
                                    <div className="contact-form-items">
                                        <div className='container'>
                                            <div className='row d-flex flex-row justify-content-center'>
                                                <div className="col-sm-12 col-md-5 mb-3 input-contact">
                                                    <input placeholder="FIRST NAME" value={this.state.inputFirst} onChange={(event)=>{this.setField('inputFirst',event.target.value)}}></input>
                                                </div>
                                                <div className="col-sm-12 col-md-5 mb-3 input-contact">
                                                    <input placeholder="PHONE NUMBER" value={this.state.inputPhone} onChange={(event)=>{this.setField('inputPhone',event.target.value)}}></input>
                                                </div>
                                                <div className="col-sm-12 col-md-5 mb-3 input-contact">
                                                    <input placeholder="LAST NAME" value={this.state.inputLast} onChange={(event)=>{this.setField('inputLast',event.target.value)}}></input>
                                                </div>
                                                <div className="col-sm-12 col-md-5 mb-3 input-contact">
                                                    <input placeholder="EMAIL ADDRESS" value={this.state.inputEmail} onChange={(event)=>{this.setField('inputEmail',event.target.value)}}></input>
                                                </div>
                                                <div id="input-remarks" className="col-12 mx-3 input-contact">
                                                    <input placeholder="YOUR REMARKS HERE" value={this.state.inputRemarks} onChange={(event)=>{this.setField('inputRemarks',event.target.value)}}></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* submit */}
                                    <div className="">
                                        <div className=" submit">
                                            <button className='btn-main'>SUBMIT</button>
                                        </div>
                                    </div>
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
            </div>
        )
    }
}

const mapStateToProps = state => ({
    property: state.property
})

// const mapDispatchToProps = { action }

export default connect(mapStateToProps)(Contact)