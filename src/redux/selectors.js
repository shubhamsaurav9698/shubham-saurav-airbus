export const getUsersInfo = (state) => state.homePage.usersData || [];

export const getClickedUsersInfo = (state) =>
  state.clickedUser.clickedUserData[0] || {};

export const getFetchingData = (state) => state.clickedUser.loading || false;

export const getPostData = (state) => state.clickedUser.postData || [];

export const getPostDetailsData = (state) =>
  state.postDetails.postDetailsValue || {};
