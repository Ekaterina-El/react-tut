import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";


const Nav = () => {
  return (
    <nav className={s.nav}>
      <NavLink className={s.item} activeClassName={s.active} to="/profile">
        Profile
      </NavLink>
      <NavLink className={s.item} activeClassName={s.active} to="/dialogs">
        Dialogs
      </NavLink>
      <a href="#" className={s.item}>
        News
      </a>
      <a href="#" className={s.item}>
        Music
      </a>

      <NavLink className={s.item} activeClassName={s.active} to="/users/">
        Find users
      </NavLink>
      <a href="#" className={s.item}>
        Settings
      </a>
    </nav>
  );
};

export default Nav;
