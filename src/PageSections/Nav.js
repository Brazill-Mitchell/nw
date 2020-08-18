import React from "react";
import { connect } from "react-redux";
import phoneImg from "../assets/phone.png";
import { screenSizes } from "../constants";
import Fade from "react-reveal/Fade";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navClass: "",
      navHeight: "",
    };
  }

  jumpTo(sectionRef) {
    // sectionRef.current.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
    window.scrollTo({
        top: sectionRef.current.offsetTop - this.state.navHeight,
        behavior: "smooth"
    })
  }

  componentDidUpdate(prevprops) {
    if (prevprops.screenSize !== this.props.screenSize) {
      const screen = this.props.screenSize;
      if (screen === screenSizes.MOBILE) {
        this.setState({
          navClass: "",
          navHeight: this.props.refList.refNav.current.clientHeight
        });
      } else {
        this.setState({
          navClass: "",
          navHeight: this.props.refList.refNav.current.clientHeight
        });
      }
    }
  }

  componentDidMount() {
    this.setState({
      navHeight: this.props.refList.refNav.current.clientHeight
    });
  }

  render() {
    return (
      <div className="sticky-top bg-white" ref={this.props.refList.refNav}>
        <Fade>
            <div
              className="row d-flex flex-row justify-content-start mt-3 mx-2 mb-3"
              style={
                this.props.screenSize !== screenSizes.MOBILE
                  ? { flexWrap: "nowrap" }
                  : {}
              }
            >
              {/* Logo */}
              <div
                className="logo-head mb-2"
                style={
                  this.props.screenSize === screenSizes.MOBILE
                    ? {
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }
                    : {}
                }
              >
                <div className="container-fluid">
                  <div className="row d-flex flex-column">
                    <div className="nw-logo">NW</div>
                    <div className="living-construction">
                      LIVING
                      <br />
                      CONSTRUCTION
                    </div>
                  </div>
                </div>

                {/* display phone icon for mobile */}
                {this.props.screenSize === screenSizes.MOBILE ? (
                  <div className="phone mt-3 mr-2">
                    <div className="btn-phone">
                      <img
                        src={phoneImg}
                        className="my-1 phone-image"
                        alt=""
                      ></img>
                    </div>
                  </div>
                ) : (
                  []
                )}
              </div>

              {/* TODO: Justify start for larger screen, center for small screen */}
              {/* Nav */}
              <div
                id="nav-bar"
                className={
                  this.props.screenSize === screenSizes.MOBILE
                    ? "mt-4"
                    : "ml-5 mt-4"
                }
              >
                <div className="container-fluid d-flex">
                  <div className="row w-100 d-flex flex-row justify-content-center">
                    <span
                      className="nav-item"
                      onClick={() => {
                        this.jumpTo(this.props.refList.refHome);
                      }}
                    >
                      HOME
                    </span>
                    <span
                      className="nav-item"
                      onClick={() => {
                        this.jumpTo(this.props.refList.refAbout);
                      }}
                    >
                      ABOUT
                    </span>
                    <span
                      className="nav-item"
                      onClick={() => {
                        this.jumpTo(this.props.refList.refServices);
                      }}
                    >
                      SERVICES
                    </span>
                    <span
                      className="nav-item"
                      onClick={() => {
                        this.jumpTo(this.props.refList.refProjects);
                      }}
                    >
                      PROJECTS
                    </span>
                    <span
                      className="nav-item"
                      onClick={() => {
                        this.jumpTo(this.props.refList.refContact);
                      }}
                    >
                      CONTACT
                    </span>
                  </div>
                </div>
              </div>

              <div>
                {this.props.screenSize === screenSizes.MOBILE ? (
                  []
                ) : (
                  <div className="phone mt-3">
                    <div className="btn-phone">
                      <img src={phoneImg} className="phone-image" alt=""></img>
                      9876543210
                    </div>
                  </div>
                )}
              </div>
            </div>
        </Fade>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  screenSize: state.screenSize,
});

// const mapDispatchToProps = { action }

export default connect(mapStateToProps)(Nav);
