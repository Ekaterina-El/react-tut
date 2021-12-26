export const ADD_POST = "ADD_POST";
export const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";
const CHANGE_PROFILE = "CHANGE_PROFILE"

const initState = {
  newPostText: "",
  posts: [
    {
      id: 1,
      text: "Post #1",
      photoUrl:
        "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: 2,
      text: "Post #2",
      photoUrl:
        "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: 3,
      text: "Post #3",
      photoUrl:
        "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  ],

  currentProfile: {}
};

const profileReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case ADD_POST: {
      const newPost = {
        id: new Date().getTime(),
        text: state.newPostText,
        photoUrl:
          "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      };

      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, newPost],
      };
    }

    case CHANGE_NEW_POST_TEXT: {

      return {
        ...state,
        newPostText: payload.text,
      };
    }

    case CHANGE_PROFILE: {
      debugger
      return {
        ...state,
        currentProfile: payload.profile
      }
    }

    default:
      return state;
  }
};

export default profileReducer;

export const addPost = () => ({
  type: ADD_POST,
});

export const changeNewPostText = (text) => {
  return {
    type: CHANGE_NEW_POST_TEXT,
    payload: {
      text
    },
  };
};

export const setCurrentProfile = (profile) => ({
  type: CHANGE_PROFILE,
  payload: {
    profile
  }
})
