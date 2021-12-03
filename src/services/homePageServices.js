import axios from "axios";

export const getUserDetails = axios.get("http://localhost:5500/users");

export const getClickedUserDetails = (id) =>
  axios.get(`http://localhost:5500/users?id=${id}`);

export const saveUserDataCall = (payload) => {
  return axios.post(`http://localhost:5500/posts`, payload);
};

export const getPostsData = (id) =>
  axios.get(`http://localhost:5500/posts?post=${id}`);

export const deletePost = (id) => {
  return axios.delete(`http://localhost:5500/posts/${id}`);
};

export const fetchPostDetailsValue = (id, post) => {
  return axios.get(`http://localhost:5500/posts/${post}?id=${id}`);
};
