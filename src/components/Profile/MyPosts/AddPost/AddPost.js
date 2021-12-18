import React from "react";
import s from "./AddPost.module.css";

const AddPost = ({newPostText, addPost, changeNewPostText}) => {
  debugger
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
