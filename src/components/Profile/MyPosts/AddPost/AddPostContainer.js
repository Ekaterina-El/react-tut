import React from "react";
import { connect } from "react-redux";
import {
  addPostAC,
  changeNewPostTextAC,
} from "../../../../redux/profileReducer";
import AddPost from "./AddPost";

export default connect(
  state => {
    return {
      newPostText: state.profile.newPostText
    }
  },

  dispatch => {
    return {
      addPost: () => dispatch(addPostAC()),
      changeNewPostTextAC: (text) => dispatch(changeNewPostTextAC(text))
    }
  }
)(AddPost);
