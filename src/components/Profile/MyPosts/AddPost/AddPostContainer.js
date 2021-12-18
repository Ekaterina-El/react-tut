import React from "react";
import { addPostAC, changeNewPostTextAC } from "../../../../redux/profileReducer";
import AddPost from "./AddPost";

const AddPostContainer = ({dispatch, ...props}) => {

  const handleChange = text => {
    dispatch(changeNewPostTextAC(text));
  };

  const handleAddPost = () => {
    dispatch(addPostAC());
  };

  return <AddPost addPost={handleAddPost} changeNewPostText={handleChange}  {...props} />
};

export default AddPostContainer;
