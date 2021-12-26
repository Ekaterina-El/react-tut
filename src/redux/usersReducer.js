const initState = {
  users: [],
  pageSize: 5,
  currentPage: 1,
  pages: 0,
  totalCount: 0,

  isFetching: true,
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
            followed: !user.followed,
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

    case SET_FETCHING_STATUS:
      return { ...state, isFetching: payload.status };

    default:
      return state;
  }
};

export default usersReducer;

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_FETCHING_STATUS = "SET_FETCHING_STATUS";

export const toggleFollow = (id) => ({
  type: TOGGLE_FOLLOW,
  payload: {
    id,
  },
});

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: {
    users,
  },
});

export const setTotalCount = (pages) => ({
  type: SET_TOTAL_COUNT,
  payload: {
    pages,
  },
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: {
    page,
  },
});

export const setFetchingStatus = (status) => ({
  type: SET_FETCHING_STATUS,
  payload: {
    status,
  },
});
