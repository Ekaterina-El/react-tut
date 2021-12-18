import React from "react";
import AddPost from "./AddPost/AddPost";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({posts, newPostText}) => {

  return (
    <div className={s.my_posts_wrapper}>
      My posts
      <AddPost newPostText={newPostText} />
      <div>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              {...post} />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
