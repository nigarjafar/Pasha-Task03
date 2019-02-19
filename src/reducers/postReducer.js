import { POSTS_LOADED } from "../actions/types";

export default (state = null, action) => {
	switch (action.type) {
		case POSTS_LOADED:
			return action.payload;
		default:
			return state;
	}
};

 
