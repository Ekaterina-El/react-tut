import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setCurrentProfile } from "../../redux/profileReducer";

class ProfileContainer extends Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/2")
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
)(ProfileContainer);
