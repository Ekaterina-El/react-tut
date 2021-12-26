import { connect } from "react-redux";
import { sendMessage, changeMessageText } from "../../../redux/dialogReducer";
import AddMessage from "./AddMessage";

export default connect(
  (state) => {
    return {
      newMessageText: state.dialogs.newMessageText,
    };
  },
  {
    changeMessageText,
    sendMessage,
  }
)(AddMessage);
