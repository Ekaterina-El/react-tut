import React from "react";

const AddMessage = ({ newMessageText, changeMessageText, sendMessage }) => {
  const handleChangeMessageText = (e) => {
    changeMessageText(e.target.value)
  };

  const handleSendMessage = () => sendMessage();

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
