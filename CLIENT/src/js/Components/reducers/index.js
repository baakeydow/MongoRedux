import { combineReducers } from "redux"

import posts from "./postsReducer"
import user from "./userReducer"
import lang from "./langReducer"

export default combineReducers({
  posts,
  user,
  lang,
})
