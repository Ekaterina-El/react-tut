import React from "react";
import NavLink from "react-router-dom/NavLink";
import s from "./Header.module.css";

const Header = ({ userData }) => {
  return (
    <header className={s.header}>
      <img
        alt=""
        src="
      https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png"
      />

      {userData.id != null ? (
        <div className={s.loginLink}>
          <div>{userData.email}</div>
          <div>Log out</div>
        </div>
      ) : (
        <NavLink to={"/login"} className={s.loginLink}>
          Login
        </NavLink>
      )}
    </header>
  );
};

export default Header;
