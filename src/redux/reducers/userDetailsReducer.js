const initialState = {
  clickedUserData: {},
  loading: true,
  postData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CLICKED_USERS_SUCCESS":
      return {
        ...state,
        clickedUserData: action.payload,
      };
    case "FETCHING_CLICKED_USER":
      return {
        loading: false,
      };
    case "FETCH_POST_DATA_SUCCESS":
      return {
        ...state,
        postData: action.payload,
      };
    case "SAVE_USER_DATA_SUCCESS":
      return {
        ...state,
        postData: [...state.postData, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
