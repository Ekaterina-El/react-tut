import { profileAPI, usersAPI } from "../api/api";

const initState = {
  users: [],
  pageSize: 5,
  currentPage: 1,
  pages: 0,
  totalCount: 0,

  isFetching: true,
  followingInProgress: [],
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

    case TOGGLE_FOLLOWING_IN_PROGRESS:
      if (state.followingInProgress.includes(payload.id)) {
        return {
          ...state,
          followingInProgress: state.followingInProgress.filter(
            (id) => id !== payload.id
          ),
        };
      } else {
        return {
          ...state,
          followingInProgress: [...state.followingInProgress, payload.id],
        };
      }

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

const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

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

export const toggleFollowingInProgress = (id) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  payload: {
    id,
  },
});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setCurrentPage(currentPage))
  dispatch(setFetchingStatus(true));

  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(setFetchingStatus(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
  });
};

export const unfollowUser = (id) => (dispatch) => {
  dispatch(toggleFollowingInProgress(id));

  profileAPI.unfollowUser(id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(toggleFollow(id));
    }
    dispatch(toggleFollowingInProgress(id));
  });
};

export const followUser = (id) => (dispatch) => {
  dispatch(toggleFollowingInProgress(id));

  profileAPI.followUser(id).then((data) => {
    if (data.resultCode === 0) {
      dispatch(toggleFollow(id));
    }
    dispatch(toggleFollowingInProgress(id));
  });
};
