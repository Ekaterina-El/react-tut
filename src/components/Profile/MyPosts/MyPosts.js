import React from "react";
import AddPost from "./AddPost/AddPost";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  const state = {
    posts: [
      {
        id: 1,
        text: "Post #1",
        photoUrl:
          "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: 2,
        text: "Post #2",
        photoUrl:
          "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: 3,
        text: "Post #3",
        photoUrl:
          "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
    ],
  };

  return (
    <div className={s.my_posts_wrapper}>
      My posts
      <AddPost />
      <div>
        {state.posts.map((post) => {
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
