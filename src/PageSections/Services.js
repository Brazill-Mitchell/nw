import React from "react";
import { connect } from "react-redux";
// import { action } from "../redux/actions"
import { services } from "./samples";
import { screenSizes } from "../constants";
import Slide from "react-reveal/Slide";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceDisplayed: services.drywall,
    };
  }

  // TODO: Set and remove background color for selected services
  changeService(serviceName) {
    this.setState({
      serviceDisplayed: serviceName,
    });
  }

  // Handles Responsiveness
  componentDidUpdate(prevprops) {
    if (prevprops.screenSize !== this.props.screenSize) {
      const screen = this.props.screenSize;
      if (screen === screenSizes.MOBILE) {
        this.setState({
          navClass: "",
        });
      } else if (screen === screenSizes.TABLET) {
        this.setState({
          navClass: "",
        });
      } else {
        this.setState({
          navClass: "",
        });
      }
    }
  }

  render() {
    return (
      <div ref={this.props.refServices}>
        <Slide right>
          {/* Our Services */}
          <div className="container">
            <div className="row our-services">
              <div className="title-one mx-2">OUR</div>
              <div className="title-two mx-2">SERVICES</div>
            </div>

            <div className="services-bar no-gutters mb-2">
              <div
                className={
                  this.state.serviceDisplayed === services.drywall
                    ? "service-option-selected"
                    : "services-options"
                }
                onClick={() => {
                  this.changeService(services.drywall);
                }}
              >
                DRYWALL
              </div>
              <div
                className={
                  this.state.serviceDisplayed === services.taping
                    ? "service-option-selected"
                    : "services-options"
                }
                onClick={() => {
                  this.changeService(services.taping);
                }}
              >
                TAPING
              </div>
              <div
                className={
                  this.state.serviceDisplayed === services.framing
                    ? "service-option-selected"
                    : "services-options"
                }
                onClick={() => {
                  this.changeService(services.framing);
                }}
              >
                FRAMING
              </div>
              <div
                className={
                  this.state.serviceDisplayed === services.renovation
                    ? "service-option-selected"
                    : "services-options"
                }
                onClick={() => {
                  this.changeService(services.renovation);
                }}
              >
                RENOVATION
              </div>
            </div>

            {/* Services Summary */}
            <div
              id="service-preview-container"
              className="elevation rounded d-flex"
            >
              <div
                id="service-preview"
                className="d-flex flex-row"
                style={
                  this.props.screenSize !== screenSizes.MOBILE
                    ? { height: "50vh" }
                    : {}
                }
              >
                <div
                  className="service-summary mt-3"
                  style={
                    this.props.screenSize !== screenSizes.MOBILE
                      ? { flex: "0 40%" }
                      : { flex: "0 100%" }
                  }
                >
                  <div className="container justify-content-start">
                    <div className="row d-flex flex-column">
                      <div className="col service-preview-title title-secondary">
                        {this.state.serviceDisplayed.title}
                      </div>
                      <p className="service-preview-text">
                        {this.state.serviceDisplayed.description}
                      </p>
                      <div className="col mb-3">
                        <button className="btn-text">CONTACT US</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* image */}
                {this.props.screenSize !== screenSizes.MOBILE ? (
                  <div
                    className="service-preview-image rounded-right"
                    style={{
                      backgroundImage: `url(${this.state.serviceDisplayed.image})`,
                    }}
                  ></div>
                ) : (
                  []
                )}
              </div>
            </div>
          </div>
        </Slide>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  screenSize: state.screenSize,
  // refList: state.refList
});

// const mapDispatchToProps = { action }

export default connect(mapStateToProps)(Services);
