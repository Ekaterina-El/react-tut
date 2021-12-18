import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ posts, newPostText, addPost, changeNewPostText }) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        newPostText={newPostText}
        addPost={addPost}
        changeNewPostText={changeNewPostText}
      />
    </>
  );
};

export default Profile;
