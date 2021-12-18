import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ posts, newPostText, dispatch }) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        newPostText={newPostText}
        dispatch={dispatch}
      />
    </>
  );
};

export default Profile;
