import React, { useState } from "react";
import { addPost, changeNewPostText } from "../../../../redux/state";
import s from "./AddPost.module.css";

const AddPost = ({newPostText}) => {

  return (
    <div>
      <textarea value={newPostText} onChange={(e) => changeNewPostText(e.target.value)} />
      <button
        onClick={() => {
          addPost();
        }}
      >
        Add post
      </button>
    </div>
  );
};

export default AddPost;
