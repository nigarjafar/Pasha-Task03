import { POSTS_LOADED, USERS_LOADED } from "../actions/types";

export default (state = 0, action) => {
	if (action.type == POSTS_LOADED || action.type == USERS_LOADED)
		return ++state;

	return state;
};
