const initialState = {
  postDetailsValue: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POST_DETAILS_VALUE_SUCCESS":
      return {
        ...state,
        postDetailsValue: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
