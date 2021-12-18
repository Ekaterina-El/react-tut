import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
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
          src="https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        />
        Discription
      </div>
    </div>
  );
};

export default ProfileInfo;
