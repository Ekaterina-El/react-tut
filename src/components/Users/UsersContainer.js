import { connect } from "react-redux";
import {
  setCurrentPageAC,
  setFetchingStatusAC,
  setTotalCountAC,
  setUsersAC,
  toggleFollowAC,
} from "../../redux/usersReducer";

import React from "react";
import axios from "axios";
import Users from "./Users";

import Loader from "../Loader/Loader";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.setFetchingStatus(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setFetchingStatus(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  handleChangePage = (page) => {
    if (page != this.props.currentPage) {
      this.props.setCurrentPage(page);
      this.props.setFetchingStatus(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.setFetchingStatus(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalCount(response.data.totalCount);
        });
    }
  };

  render() {
    return this.props.isFetching ? (
      <Loader />
    ) : (
      <Users {...this.props} handleChangePage={this.handleChangePage} />
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

  (dispatch) => ({
    toggleFollow: (userId) => {
      dispatch(toggleFollowAC(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },

    setTotalCount: (pages) => {
      dispatch(setTotalCountAC(pages));
    },

    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },

    setFetchingStatus: (status) => dispatch(setFetchingStatusAC(status)),
  })
)(UsersAPIComponent);
