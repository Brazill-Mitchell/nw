import React from "react"
import { connect } from "react-redux"
import { action } from "../redux/actions"


class Nav extends React.Component{


    render(){
        return (
            <div>
                <div className="row d-flex flex-row justify-content-start">

                    {/* Logo */}
                    <div className='logo-head col-2'>
                    <div className='container'>
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

                    {/* Nav */}
                    <div id="nav-bar" className='col-9'>
                    <div className="container-fluid">
                        {" "}
                        <div className="row d-flex flex-row"> 
                        <span className="col 1 nav-item">HOME</span>
                        <span className="col 1 nav-item">ABOUT</span>
                        <span className="col 1 nav-item">SERVICES</span>
                        <span className="col 1 nav-item">PROJECTS</span>
                        <span className="col 1 nav-item">CONTACT</span>
                        </div>
                    </div>
                    </div>
                    <div className="col-1">
                    {/* <div className="x9876543210">9876543210</div> */}
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