import React from "react"
import { connect } from "react-redux"
import { action } from "../redux/actions"


class Projects extends React.Component{


    render(){
        return <div>Projects Section</div>
    }
}

const mapStateToProps = state => ({
    property: state.property
})

// const mapDispatchToProps = { action }

export default connect(mapStateToProps)(Projects)