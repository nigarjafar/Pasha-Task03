import { combineReducers } from "redux";

const postsReducer = (state = null, action) => {
	switch (action.type) {
		case "POSTS_LOADED":
			return action.payload;
		default:
			return state;
	}
};

const usersReducer = (state = null, action) => {
	switch (action.type) {
		case "USERS_LOADED":
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({
	posts: postsReducer,
	users: usersReducer
});
