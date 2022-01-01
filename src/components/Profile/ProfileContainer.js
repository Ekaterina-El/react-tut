import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getProfile } from "../../redux/profileReducer";
import { Redirect, withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id || this.props.authedId;
    this.props.getProfile(id);
  }

  render() {
    return this.props.authedId !== null ? <Profile {...this.props} /> : <Redirect to={"/login"} />
  }
}

export default connect(
  (state) => ({
    currentProfile: state.profile.currentProfile,
    authedId: state.auth.id,
  }),

  {
    getProfile,
  }
)(withRouter(ProfileContainer));
