import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setCurrentProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    debugger
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
      .then(({ data }) => {
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
  }),

  {
    setCurrentProfile,
  }
)(withRouter(ProfileContainer));
