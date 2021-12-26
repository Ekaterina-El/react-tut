import { connect } from "react-redux";
import {
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
  toggleFollowAC,
} from "../../redux/usersReducer";

import React from 'react'
import axios from "axios";
import Users from './Users'

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  handleChangePage = (page) => {
    this.props.setCurrentPage(page);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  };

  render() {
    debugger
    return <Users {...this.props} handleChangePage={this.handleChangePage} />;
  }
}

export default connect(
  (state) => ({
    users: state.users.users,
    currentPage: state.users.currentPage,
    totalCount: state.users.totalCount,
    pageSize: state.users.pageSize,
    pages: state.users.pages,
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
  })
)(UsersAPIComponent);
