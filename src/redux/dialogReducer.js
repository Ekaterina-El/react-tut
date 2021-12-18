export const ADD_MESSAGE = "ADD_MESSAGE";
export const CHANGE_NEW_MESSAGE_TEXT = "CHANGE_NEW_MESSAGE_TEXT";

const initState = {
  newMessageText: "",

  dialogs: [
    {
      userId: 1,
      userName: "Andraw",
    },

    {
      userId: 2,
      userName: "Dmitry",
    },

    {
      userId: 3,
      userName: "Sasha",
    },

    {
      userId: 4,
      userName: "Sveta",
    },

    {
      userId: 5,
      userName: "Valera",
    },

    {
      userId: 6,
      userName: "Victor",
    },
  ],

  messages: [
    {
      id: 1,
      text: "Hello",
    },

    {
      id: 2,
      text: "Yooo",
    },
  ],
};

const dialogReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.text,
      };
    }

    case ADD_MESSAGE: {
      const newMessage = {
        id: new Date().getTime(),
        text: state.newMessageText,
      };

      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    }

    default:
      return state;
  }
};

export default dialogReducer;

export const addMessageAC = () => ({
  type: ADD_MESSAGE,
});

export const changeNewMessageTextAC = (text) => ({
  type: CHANGE_NEW_MESSAGE_TEXT,
  text,
});
