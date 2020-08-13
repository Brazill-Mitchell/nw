import React from "react"
import { connect } from "react-redux"
import { action } from "../redux/actions"


class Footer extends React.Component{


    render(){
        return <div>Footer Section</div>
    }
}

const mapStateToProps = state => ({
    property: state.property
})

// const mapDispatchToProps = { action }

export default connect(mapStateToProps)(Footer)