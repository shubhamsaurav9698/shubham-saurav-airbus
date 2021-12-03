import { combineReducers } from "redux";
import homePageReducer from "./homePageReducer";
import userDetailsReducer from "./userDetailsReducer";
import postDetailsReducer from "./postDetailsReducer";

const reducers = combineReducers({
  homePage: homePageReducer,
  clickedUser: userDetailsReducer,
  postDetails: postDetailsReducer,
});

export default reducers;
