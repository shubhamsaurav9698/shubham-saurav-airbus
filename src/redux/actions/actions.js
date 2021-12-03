import {
  getUserDetails,
  getClickedUserDetails,
  getPostsData,
  saveUserDataCall,
  deletePost,
  fetchPostDetailsValue,
} from "../../services/homePageServices";

export const fetchUsers = () => {
  return (dispatch) => {
    getUserDetails
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
};

export const fetchUsersSuccess = (users) => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_USERS_SUCCESS",
      payload: users,
    });
  };
};

export const fetchClickedUser = (id) => {
  return (dispatch) => {
    getClickedUserDetails(id)
      .then((response) => {
        const clickedUser = response.data;
        dispatch(fetchClickedUsersSuccess(clickedUser));
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
};

export const fetchClickedUsersSuccess = (clickedUser) => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_CLICKED_USERS_SUCCESS",
      payload: clickedUser,
    });
  };
};

export const fetchingClickedUser = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCHING_CLICKED_USER",
      payload: "false",
    });
  };
};

export const saveUserData = (payload) => {
  return (dispatch) => {
    saveUserDataCall(payload)
      .then((response) => {
        const users = response.data;
        dispatch(saveUserdataSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
};

export const saveUserdataSuccess = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "SAVE_USER_DATA_SUCCESS",
      payload: payload,
    });
  };
};

export const fetchPostData = (id) => {
  return (dispatch) => {
    getPostsData(id)
      .then((response) => {
        const posts = response.data;
        dispatch(fetchPostDataSuccess(posts));
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
};

export const fetchPostDataSuccess = (posts) => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_POST_DATA_SUCCESS",
      payload: posts,
    });
  };
};

export const deletePostData = (id) => {
  return (dispatch) => {
    deletePost(id)
      .then((response) => {
        const res = response.data;
        dispatch(deletePostDataSuccess(res));
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
};

export const deletePostDataSuccess = (res) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_POST_DATA_SUCCESS",
      payload: res,
    });
  };
};

export const getPostDetailsValue = (id, post) => {
  return (dispatch) => {
    fetchPostDetailsValue(id, post)
      .then((response) => {
        const res = response.data;
        console.log(res);
        dispatch(getPostDetailsValueSuccess(res));
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
};

export const getPostDetailsValueSuccess = (res) => {
  return (dispatch) => {
    dispatch({
      type: "GET_POST_DETAILS_VALUE_SUCCESS",
      payload: res,
    });
  };
};
