import { connect } from "react-redux";
import MyPosts from "./MyPosts";

export default connect(
  (state) => {
    return {
      posts: state.profile.posts,
    };
  },

  {}
)(MyPosts);
