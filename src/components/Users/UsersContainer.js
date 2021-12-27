import { connect } from "react-redux";
import {
  setCurrentPage,
  setFetchingStatus,
  setTotalCount,
  setUsers,
  toggleFollow,
} from "../../redux/usersReducer";

import React from "react";
import Users from "./Users";

import Loader from "../Loader/Loader";
import { profileAPI, usersAPI } from "../../api/api";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.setFetchingStatus(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.setFetchingStatus(false);
      this.props.setUsers(data.items);
      this.props.setTotalCount(data.totalCount);
    });
  }

  handleChangePage = (page) => {
    if (page !== this.props.currentPage) {
      this.props.setCurrentPage(page);
      this.props.setFetchingStatus(true);

      usersAPI.getUsers(page, this.props.pageSize).then((data) => {
        this.props.setFetchingStatus(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
      });
    }
  };

  toggleFollow(status, id) {
    debugger;
    if (status) {
      profileAPI.unfollowUser(id).then((data) => {
        if (data.resultCode === 0) {
          this.props.toggleFollow(id);
        }
      });
    } else {
      profileAPI.followUser(id).then((data) => {
        if (data.resultCode === 0) {
          this.props.toggleFollow(id);
        }
      });
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
  }),

  {
    toggleFollow,
    setUsers,
    setTotalCount,
    setCurrentPage,
    setFetchingStatus,
  }
)(UsersAPIComponent);
