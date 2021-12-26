import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
  return (
    <>
      <ProfileInfo />
      <MyPostsContainer />
    </>
  );
};

export default Profile;
