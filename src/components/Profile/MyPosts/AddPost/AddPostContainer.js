import { connect } from "react-redux";
import { addPost, changeNewPostText } from "../../../../redux/profileReducer";
import AddPost from "./AddPost";

export default connect(
  (state) => {
    return {
      newPostText: state.profile.newPostText,
    };
  },

  {
    addPost,
    changeNewPostText,
  }
)(AddPost);
