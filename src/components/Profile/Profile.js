import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

export const Profile = ({currentProfile}) => {
  return (
    <>
      <ProfileInfo profile={currentProfile} />
      <MyPostsContainer />
    </>
  );
};

export default Profile;
