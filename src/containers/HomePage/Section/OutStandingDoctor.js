import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import "./OutStandingDoctor.scss";

class OutStandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-outstanding-doctor">
        <div className="section-container">
          <div className="section-header">
            <div className="title-section">Bác nổi bật tuần qua</div>
            <div className="btn-section">xem thêm</div>
          </div>
          <div className="section-body">
            <Slider {...this.props.setting}>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor"></div>
                  </div>
                  <div className="position text-center">
                    <h3>Hệ thống y tế 1</h3>
                  </div>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor"></div>
                  </div>
                </div>
                <div className="position text-center">
                  <h3>Hệ thống y tế 2</h3>
                </div>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor"></div>
                  </div>
                </div>
                <h3>Hệ thống y tế 3</h3>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor"></div>
                  </div>
                </div>
                <h3>Hệ thống y tế 4</h3>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor"></div>
                  </div>
                </div>
                <h3>Hệ thống y tế 5</h3>
              </div>
              <div className="section-customize">
                <div className="customize-border">
                  <div className="outer-bg">
                    <div className="bg-image section-outstanding-doctor"></div>
                  </div>
                </div>
                <h3>Hệ thống y tế 6</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
