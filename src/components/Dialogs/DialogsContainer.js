import React from "react";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext'

const DialogsContainer = () => {
  return <StoreContext.Consumer>
    {store => {
      const state = store.getState().dialogs;
      return <Dialogs dialogs={state.dialogs} messages={state.messages}/>
    }}
  </StoreContext.Consumer>
};

export default DialogsContainer;
