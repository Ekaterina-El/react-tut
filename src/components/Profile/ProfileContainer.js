import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setCurrentProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../api/api";

class ProfileContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id || this.props.authedId;
    profileAPI.getUserProfile(id).then((data) => {
      this.props.setCurrentProfile(data);
    });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

export default connect(
  (state) => ({
    currentProfile: state.profile.currentProfile,
    authedId: state.auth.id,
  }),

  {
    setCurrentProfile,
  }
)(withRouter(ProfileContainer));
