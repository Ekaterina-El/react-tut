import { connect } from "react-redux";
import { setCurrentPageAC, setPagesAC, setTotalCountAC, setUsersAC, toggleFolowAC } from "../../redux/usersReducer";
import Users from "./Users";

export default connect(
  (state) => ({
    users: state.users.users,
    currentPage: state.users.currentPage,
    totalCount: state.users.totalCount,
    pageSize: state.users.pageSize,
    pages: state.users.pages
  }),

  (dispatch) => ({
    toggleFolow: (userId) => {
      dispatch(toggleFolowAC(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },

    setTotalCount: (pages) => {
      dispatch(setTotalCountAC(pages))
    },

    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page))
    }
  })
)(Users);
