import { connect } from "react-redux";
import { setUsersAC, toggleFolowAC } from "../../redux/usersReducer";
import Users from "./Users";

export default connect(
  (state) => ({
    users: state.users.users,
  }),

  (dispatch) => ({
    toggleFolow: (userId) => {
      dispatch(toggleFolowAC(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  })
)(Users);
