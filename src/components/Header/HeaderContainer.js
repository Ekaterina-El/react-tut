import React from "react";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";
import { setUserData } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        this.props.setUserData(data.data);
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
