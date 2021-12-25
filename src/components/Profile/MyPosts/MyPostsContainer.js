import React from "react";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
//   return <StoreContext.Consumer>
//     {store => <MyPosts posts={store.getState().profile.posts} />}
//   </StoreContext.Consumer>
// };

export default connect(
  (state) => {
    return {
      posts: state.profile.posts,
    };
  },

  {}
)(MyPosts);
