import React from "react";
import { addMessageAC, changeNewMessageTextAC } from "../../../redux/dialogReducer";
import StoreContext from "../../../StoreContext";
import AddMessage from "./AddMessage";

const AddMessageContainer = () => {
  return <StoreContext.Consumer>
    {store => {
      const state = store.getState().dialogs

      const handleChangeMessageText = text => {
        store.dispatch(changeNewMessageTextAC(text));
      };
    
      const handleSendMessage = () => store.dispatch(addMessageAC());

      return <AddMessage changeMessageText={handleChangeMessageText} sendMessage={handleSendMessage} newMessageText={state.newMessageText}  />
    }}
  </StoreContext.Consumer>
};

export default AddMessageContainer;
