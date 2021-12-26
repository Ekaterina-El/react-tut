import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialogs,
    messages: state.dialogs.messages
  };
};

let DialogsContainer = connect(mapStateToProps, {})(Dialogs);

export default DialogsContainer;
