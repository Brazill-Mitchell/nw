import React from "react"
import { connect } from "react-redux"
import { action } from "../redux/actions"


class Contact extends React.Component{


    render(){
        return <div>Contact Section</div>
    }
}

const mapStateToProps = state => ({
    property: state.property
})

// const mapDispatchToProps = { action }

export default connect(mapStateToProps)(Contact)