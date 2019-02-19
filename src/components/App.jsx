import React from "react";
import PostsTable from "./PostsTable";
import UsersTable from "./UsersTable";

const App = () => {
	return (
		<div className="ui container" style={{ marginTop: "20px" }}>
			<UsersTable />
			<PostsTable />
		</div>
	);
};

export default App;
