import React from "react";
import s from "./Loader.module.css"

const Loader = () => {
  return (
    <div class={s.spinner}>
      <div class={s.ldio}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
