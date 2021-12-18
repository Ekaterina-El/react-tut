import React from "react";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  return <StoreContext.Consumer>
    {store => <MyPosts posts={store.getState().profile.posts} />}    
  </StoreContext.Consumer>
};

export default MyPostsContainer;
