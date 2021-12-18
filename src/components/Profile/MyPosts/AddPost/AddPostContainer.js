import React from "react";
import {
  addPostAC,
  changeNewPostTextAC,
} from "../../../../redux/profileReducer";
import StoreContext from "../../../../StoreContext";
import AddPost from "./AddPost";

const AddPostContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const handleChange = (text) => {
          store.dispatch(changeNewPostTextAC(text));
        };
      
        const handleAddPost = () => {
          store.dispatch(addPostAC());
        };

        return (
          <AddPost newPostText={store.getState().profile.newPostText} addPost={handleAddPost} changeNewPostText={handleChange} />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default AddPostContainer;
