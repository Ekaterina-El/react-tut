const initState = {
  users: [],
  pageSize: 5,
  currentPage: 1,
  pages: 0,
  totalCount: 0,
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
        users: payload.users,
      };

    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: payload.pages,
        pages: Math.ceil(payload.pages / state.pageSize),
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload.page,
      };

    default:
      return state;
  }
};

export default usersReducer;

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

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

export const setTotalCountAC = (pages) => ({
  type: SET_TOTAL_COUNT,
  payload: {
    pages,
  },
});

export const setCurrentPageAC = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: {
    page,
  },
});
