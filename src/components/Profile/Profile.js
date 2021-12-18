import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts, newPostText}) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts posts={posts} newPostText={newPostText}/>
    </>
  );
};

export default Profile;
