import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserData } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
      withCredentials: true
    }).then((res) => {
      debugger;
      if (res.data.resultCode === 0) {
        this.props.setUserData(res.data.data);
      }
    });
  }

  render() {
    debugger
    return <Header {...this.props} />;
  }
}

export default connect(
  (state) => ({
    userData: {
      id: state.auth.id,
      email: state.auth.email,
      login: state.auth.login,
    }
  }),

  {
    setUserData,
  }
)(HeaderContainer);
