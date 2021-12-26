import { connect } from "react-redux";
import {
  setCurrentPage,
  setFetchingStatus,
  setTotalCount,
  setUsers,
  toggleFollow,
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
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true
        }
      )
      .then((response) => {
        this.props.setFetchingStatus(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  handleChangePage = (page) => {
    if (page !== this.props.currentPage) {
      this.props.setCurrentPage(page);
      this.props.setFetchingStatus(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
          {
            withCredentials: true
          }
        )
        .then((response) => {
          this.props.setFetchingStatus(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalCount(response.data.totalCount);
        });
    }
  };

  toggleFollow(status, id) {
    debugger;
    if (status) {
      axios
        .delete(
          `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
          {
            withCredentials: true,
            headers: {
              "API-KEY": "21f9c0f6-fe2f-4bf6-9268-2442c02b9574",
            },
          }
        )
        .then((res) => {
          debugger;
          if (res.data.resultCode === 0) {
            this.props.toggleFollow(id);
          }
        });
    } else {
      axios
        .post(
          `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
          {},
          {
            withCredentials: true,
            headers: {
              "API-KEY": "21f9c0f6-fe2f-4bf6-9268-2442c02b9574",
            },
          }
        )
        .then((res) => {
          debugger;
          if (res.data.resultCode === 0) {
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
