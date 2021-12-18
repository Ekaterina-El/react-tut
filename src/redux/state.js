import { rerenderEntireTree } from "./render";

let state = {
  profile: {
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
  },

  dialogs: {
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
  },
};

export default state;

export const changeNewPostText = (text) => {
  state.profile.newPostText = text;
  rerenderEntireTree(state);
}

export const addPost = () => {
  const newPost = {
    id: new Date().getTime(),
    text: state.profile.newPostText,
    photoUrl:
          "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  }
  changeNewPostText("")


  state.profile.posts.push(newPost)
  rerenderEntireTree(state)
};


