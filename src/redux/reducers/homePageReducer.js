const initialState = {
  usersData: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      return {
        usersData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
