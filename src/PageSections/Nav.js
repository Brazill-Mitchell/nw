import React from "react"
import { connect } from "react-redux"
import phoneImg from "../assets/phone.png"
// import { action } from "../redux/actions"


class Nav extends React.Component{


    render(){
        return (
            <div>
                <div className="row d-flex flex-row justify-content-start mt-3 ml-1 mb-3">

                    {/* Logo */}
                    <div className='logo-head'>
                        <div className='container-fluid'>
                            <div className='row d-flex flex-column'>
                            <div id="nw-logo" className="">NW</div>
                            <div className="living-construction">
                                LIVING
                                <br />
                                CONSTRUCTION
                            </div>
                            </div>
                        </div>
                    </div>

                    {/* TODO: Justify start for larger screen, center for small screen */}
                    {/* Nav */}
                    <div id="nav-bar" className=' ml-5 mt-3'>
                        <div className="container-fluid d-flex">
                            <div className="row w-100 d-flex flex-row justify-content-start"> 
                            <span className="nav-item">HOME</span>
                            <span className="nav-item">ABOUT</span>
                            <span className="nav-item">SERVICES</span>
                            <span className="nav-item">PROJECTS</span>
                            <span className="nav-item">CONTACT</span>
                            </div>
                        </div>
                    </div>
                    <div className='phone mt-3'>
                        <div className='btn-phone'>
                            <img src={phoneImg} className="phone-image" alt=""></img>
                            9876543210
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

export default connect(mapStateToProps)(Nav)