import React from "react";
import { addPostAC, changeNewPostTextAC } from "../../../../redux/profileReducer";
import s from "./AddPost.module.css";

const AddPost = ({ newPostText, dispatch }) => {
  debugger;

  const handleChange = (e) => {
    dispatch(changeNewPostTextAC(e.target.value));
  };

  const handleAddPost = () => {
    dispatch(addPostAC());
  };

  return (
    <div>
      <textarea value={newPostText} onChange={handleChange} />
      <button onClick={handleAddPost}>Add post</button>
    </div>
  );
};

export default AddPost;
