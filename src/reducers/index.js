import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import countReducer from "./countReducer";

export default combineReducers({
	posts: postReducer,
	users: userReducer,
	count: countReducer
});
