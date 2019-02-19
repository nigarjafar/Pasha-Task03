import { USERS_LOADED } from "../actions/types";

export default (state = null, action) => {
	switch (action.type) {
		case USERS_LOADED:
			return action.payload;
		default:
			return state;
	}
};

