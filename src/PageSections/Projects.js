import React from "react"
import { connect } from "react-redux"
import { action } from "../redux/actions"
import project1 from "../assets/jasonBriscoeUv81e0oxxwqUnsplash.png";
import project2 from "../assets/danielMcculloughHtblqdxfg9kUnsplash9f2c92ca.png";
import project3 from "../assets/annieGrayWewtgkpuvt0Unsplash.png";
import { screenSizes } from "../constants"


class Projects extends React.Component{
    constructor(){
        super()
        this.state = {
            cardClass: 'project-card mx-2 elevation-low rounded'
        }
    }

    componentDidUpdate(prevprops){
        if(prevprops.screenSize !== this.props.screenSize){
            const screen = this.props.screenSize
            if (screen === screenSizes.MOBILE){
                this.setState({
                    cardClass: "project-card-sm mx-2 elevation-low rounded mb-2"
                })
            }else if (screen === screenSizes.TABLET){
                this.setState({
                    cardClass: "project-card-md mx-2 elevation-low rounded mb-2"
                })
            }else if (screen === screenSizes.COMPUTER){
                this.setState({
                    cardClass: "project-card mx-2 elevation-low rounded mb-2"
                })
            }
        }
    }

    render(){
        return (
            <div>
                {/* Featured Projects */}

                <div className="row d-flex justify-content-center">
                    <span className="title-one">FEATURED</span>
                    <span className="title-two">PROJECTS</span>
                    </div>
                    
                    <div className="container-fluid mb-5">
                    {/* samples */}
                    <div className="row d-flex justify-content-around mx-4">
                        
                        {/* project1 */}
                        <div className={this.state.cardClass}>
                            <img className='img rounded-top' src={project1} alt=''></img>
                            <div className="project-title text-left mx-3">PROJECT TITLE</div>
                            <div className="project-description text-left mx-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>

                        {/* project2 */}
                        <div className={this.state.cardClass}>
                            <img className='img rounded-top' src={project2} alt=''></img>
                            <div className="project-title text-left mx-3">PROJECT TITLE</div>
                            <div className="project-description text-left mx-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        
                        {/* project3 */}
                        <div className={this.state.cardClass}>
                            <img className='img rounded-top' src={project3} alt=''></img>
                            <div className="project-title text-left mx-3">PROJECT TITLE</div>
                            <div className="project-description text-left mx-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    screenSize: state.screenSize
})

// const mapDispatchToProps = { action }

export default connect(mapStateToProps)(Projects)