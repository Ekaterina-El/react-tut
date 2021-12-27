import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "21f9c0f6-fe2f-4bf6-9268-2442c02b9574",
  },
});

export const authAPI = {
  authMe() {
    return axiosInstance.get("auth/me").then((res) => res.data);
  },
};

export const profileAPI = {
  getUserProfile(id) {
    return axiosInstance.get(`profile/${id}`).then((res) => res.data);
  },

  followUser(id) {
    return axiosInstance.post(`follow/${id}`, {}).then((res) => res.data);
  },

  unfollowUser(id) {
    return axiosInstance.delete(`follow/${id}`).then((res) => res.data);
  },
};

export const usersAPI = {
  getUsers(page = 1, pageSize = 10) {
    return axiosInstance
      .get(`users?page=${page}&count=${pageSize}`)
      .then((res) => res.data);
  },
};
