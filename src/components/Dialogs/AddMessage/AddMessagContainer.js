import React from "react";
import { addMessageAC, changeNewMessageTextAC } from "../../../redux/dialogReducer";
import AddMessage from "./AddMessage";

const AddMessageContainer = ({dispatch, ...props }) => {
  const handleChangeMessageText = text => {
    dispatch(changeNewMessageTextAC(text));
  };

  const handleSendMessage = () => dispatch(addMessageAC());

  return <AddMessage changeMessageText={handleChangeMessageText} sendMessage={handleSendMessage}  {...props}  />
};

export default AddMessageContainer;
