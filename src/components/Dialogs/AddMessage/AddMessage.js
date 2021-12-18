import React from "react";
import { addMessageAC, changeNewMessageTextAC } from "../../../redux/dialogReducer";

const AddMessage = ({ newMessageText, dispatch }) => {
  const handleChangeMessageText = (e) => {
    dispatch(changeNewMessageTextAC(e.target.value));
  };

  const handleSendMessage = () => dispatch(addMessageAC());

  return (
    <div>
      <div>
        <textarea value={newMessageText} onChange={handleChangeMessageText} />
      </div>
      <button onClick={handleSendMessage}>Send message</button>
    </div>
  );
};

export default AddMessage;
