import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postsReducer, //returned results from postsReducer
  users: usersReducer //returned results from usersReducer
});
