import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  render() {
    const isAuthed = this.props.authedId != null;
    return !isAuthed ? <div>Login</div> : <Redirect to={"/profile"} />;
  }
}

export default connect(
  (state) => ({
    authedId: state.auth.id,
  }),
  {}
)(Login);
