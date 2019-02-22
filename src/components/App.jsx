import React from "react";
import PostsTable from "./PostsTable";
import UsersTable from "./UsersTable";
import { connect } from "react-redux";

const App = props => {
	return (
		<div className="ui container" style={{ marginTop: "20px" }}>
			<h1>{props.count}</h1>
			<UsersTable />
			<PostsTable />
		</div>
	);
};

const mapStateToProps = state => {
	return { count: state.count };
};

export default connect(
	mapStateToProps,
	{}
)(App);
