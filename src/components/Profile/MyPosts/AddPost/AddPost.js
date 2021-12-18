import React from "react";
import { ADD_POST, CHANGE_NEW_POST_TEXT } from "../../../../redux/state";
import s from "./AddPost.module.css";

const AddPost = ({ newPostText, dispatch }) => {
  debugger;

  const handleChange = (e) => {
    const action = {
      type: CHANGE_NEW_POST_TEXT,
      text: e.target.value,
    };
    dispatch(action);
  };

  const handleAddPost = () => {
    const action = {
      type: ADD_POST,
    };
    dispatch(action);
  };

  return (
    <div>
      <textarea value={newPostText} onChange={handleChange} />
      <button onClick={handleAddPost}>Add post</button>
    </div>
  );
};

export default AddPost;
