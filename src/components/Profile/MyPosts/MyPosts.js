import React from "react";
import AddPostContainer from "./AddPost/AddPostContainer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ posts }) => {
  return (
    <div className={s.my_posts_wrapper}>
      My posts
      <AddPostContainer />
      <div>
        {posts.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
};

export default MyPosts;
