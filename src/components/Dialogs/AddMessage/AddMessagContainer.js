import React from "react";
import { connect } from "react-redux";
import {
  addMessageAC,
  changeNewMessageTextAC,
} from "../../../redux/dialogReducer";
import AddMessage from "./AddMessage";

// const AddMessageContainer = () => {
//   return <StoreContext.Consumer>
//     {store => {
//       const state = store.getState().dialogs

//       const handleChangeMessageText = text => {
//         store.dispatch(changeNewMessageTextAC(text));
//       };

//       const handleSendMessage = () => store.dispatch(addMessageAC());

//       return <AddMessage changeMessageText={handleChangeMessageText} sendMessage={handleSendMessage} newMessageText={state.newMessageText}  />
//     }}
//   </StoreContext.Consumer>
// };

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogs.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeMessageText: (text) => {
      dispatch(changeNewMessageTextAC(text));
    },

    sendMessage: () => dispatch(addMessageAC()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMessage);
