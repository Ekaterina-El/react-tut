import React from "react";
import s from "./ProfileInfo.module.css";
import emptyPhoto from '../../../assets/empty_photo.jpg'

const ProfileInfo = ({profile}) => {
  debugger
  return (
    <div className={s.header}>
      <img
        className={s.wallpaper}
        alt="wallpaper"
        src="https://wallpaperaccess.com/full/496807.jpg"
      />

      <div className={s.profile_info}>
        <img
          className={s.profile_photo}
          alt=""
          src={profile.photos?.large || emptyPhoto}
        />
        <div>
          <h2>{profile.fullName}</h2>
          <p>About me: {profile.aboutMe || "empty"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
