import React from "react";
import { NavLink } from "react-router-dom";
import AddMessageContainer from "./AddMessage/AddMessagContainer";
import s from "./Dialogs.module.css";

const DialogItem = ({ userId, userName }) => {
  return (
    <NavLink
      className={s.userItem}
      activeClassName={s.active}
      to={"/dialogs/" + userId}
    >
      {userName}
    </NavLink>
  );
};

const MessageItem = ({ text }) => {
  return <div className={s.dialogItem}>{text}</div>;
};

const Dialogs = ({ dialogs, messages, dispatch, newMessageText }) => {
  debugger
  return (
    <div className={s.wrapper}>
      <div className={s.title}>Dialogs</div>
      <div className={s.content}>
        <div className={s.usersList}>
          {dialogs.map((dialog) => {
            return <DialogItem key={dialog.userId} {...dialog} />;
          })}
        </div>

        <div className={s.dialog}>
          {messages.map((message) => {
            return <MessageItem key={message.id} {...message} />;
          })}

          <AddMessageContainer
            dispatch={dispatch}
            newMessageText={newMessageText}
          />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
