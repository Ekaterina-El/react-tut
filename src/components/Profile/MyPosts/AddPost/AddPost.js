import React from "react";
// import s from "./AddPost.module.css";

const AddPost = ({ newPostText, addPost, changeNewPostText }) => {
  debugger;

  const handleChange = (e) => {
    changeNewPostText(e.target.value)
  };

  const handleAddPost = () => {
    addPost();
  };

  return (
    <div>
      <textarea value={newPostText} onChange={handleChange} />
      <button onClick={handleAddPost}>Add post</button>
    </div>
  );
};

export default AddPost;
