const initState = {
  users: [],
};

const usersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id !== payload.id) {
            return user;
          }
          return {
            ...user,
            isFolowed: !user.isFolowed,
          };
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...payload.users],
      };

    default:
      return state;
  }
};

export default usersReducer;

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";

export const toggleFolowAC = (id) => ({
  type: TOGGLE_FOLLOW,
  payload: {
    id,
  },
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  payload: {
    users,
  },
});
