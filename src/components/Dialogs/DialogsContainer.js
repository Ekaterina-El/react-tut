import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const state = store.getState().dialogs;
//         return <Dialogs dialogs={state.dialogs} messages={state.messages} />;
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialogs,
    messages: state.dialogs.messages
  };
};

let mapDispatchToProps = () => {
  return {};
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
