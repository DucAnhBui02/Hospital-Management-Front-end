import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import "./Login.scss";
import userServices from "../../services/userServices";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
    };
  }

  handleChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleShowhidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });

    try {
      let data = await userServices(this.state.username, this.state.password);
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message,
        });
      }

      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
      }
    } catch (error) {
      if (error.respone) {
        if (error.respone.data) {
          this.setState({
            errMessage: error.respone.data.message,
          });
        }
      }
    }
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(event) => this.handleChangeUsername(event)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password</label>
              <div className="custom-password">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={(event) => this.handleChangePassword(event)}
                />
                <span onClick={() => this.handleShowhidePassword()}>
                  <i
                    className={
                      this.state.isShowPassword
                        ? "far fa-eye"
                        : "far fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <div className="col-12">
              <button
                className="btn-login"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your passowrd?</span>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="text-other-login">Or login with:</span>
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
    //UserLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
