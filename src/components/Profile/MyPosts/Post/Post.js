import React from "react";
import s from "./Post.module.css";

const Post = ({ text, photoUrl }) => {
  return (
    <div className={s.post_wrapper}>
      <img
        className={s.profile_photo}
        alt=""
        src={photoUrl}
      />
      <div className={s.post_text}>{text}</div>
    </div>
  );
};

export default Post;
