import { connect } from "react-redux";
import {
  getUsers,
  unfollowUser,
  followUser
} from "../../redux/usersReducer";

import React from "react";
import Users from "./Users";

import Loader from "../Loader/Loader";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  handleChangePage = (page) => {
    if (page !== this.props.currentPage) {
      this.props.getUsers(page, this.props.pageSize);
    }
  };

  toggleFollow(status, id) {
    debugger
    if (!this.props.followingInProgress.includes(id)) {
      if (status) {
        this.props.unfollowUser(id)
      } else {
        this.props.followUser(id)
      }
    }
  }

  render() {
    return this.props.isFetching ? (
      <Loader />
    ) : (
      <Users
        {...this.props}
        toggleFollow={this.toggleFollow.bind(this)}
        handleChangePage={this.handleChangePage}
      />
    );
  }
}

export default connect(
  (state) => ({
    users: state.users.users,
    currentPage: state.users.currentPage,
    totalCount: state.users.totalCount,
    pageSize: state.users.pageSize,
    pages: state.users.pages,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress,
  }),

  {
    getUsers,
    unfollowUser,
    followUser
  }
)(UsersAPIComponent);
