import React from "react";
import { connect } from "react-redux";
import { authMe } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }

  render() {
    return <Header {...this.props} />;
  }
}

export default connect(
  (state) => ({
    userData: {
      id: state.auth.id,
      email: state.auth.email,
      login: state.auth.login,
    },
  }),

  {
    authMe,
  }
)(HeaderContainer);
