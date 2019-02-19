export const setPosts = posts => {
	return {
		type: "POSTS_LOADED",
		payload: posts
	};
};

export const setUsers = users => {
	return {
		type: "USERS_LOADED",
		payload: users
	};
};
