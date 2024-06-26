import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import "./MedicalFacility.scss";

class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-share section-medical-facility">
        <div className="section-container">
          <div className="section-header">
            <div className="title-section">Cơ sở y tế nổi bật</div>
            <div className="btn-section">xem thêm</div>
          </div>
          <div className="section-body">
            <Slider {...this.props.setting}>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <h3>Hệ thống y tế 1</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <h3>Hệ thống y tế 2</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <h3>Hệ thống y tế 3</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <h3>Hệ thống y tế 4</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
                <h3>Hệ thống y tế 5</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image section-medical-facility"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
