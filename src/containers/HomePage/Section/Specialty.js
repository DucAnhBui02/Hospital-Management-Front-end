import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Specialty.scss";

class Specialty extends Component {
  render() {
    return (
      <div className="section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <div className="title-section">Chuyên khoa phổ biến</div>
            <div className="btn-section">xem thêm</div>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image"></div>
                <h3>Cơ xương khớp 1</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image"></div>
                <h3>Cơ xương khớp 2</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image"></div>
                <h3>Cơ xương khớp 3</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image"></div>
                <h3>Cơ xương khớp 4</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image"></div>
                <h3>Cơ xương khớp 5</h3>
              </div>
              <div className="section-customize">
                <div className="bg-image"></div>
                <h3>Cơ xương khớp 6</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
