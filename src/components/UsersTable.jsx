import React, { Component } from "react";
import { connect } from "react-redux";
import { setUsers } from "../actions";
import axios from "axios";
import Spinner from "./Spinner";

class UsersTable extends Component {
	async componentDidMount() {
		const users = await axios.get("https://jsonplaceholder.typicode.com/users");

		this.props.setUsers(users.data);
	}

	renderResult = () => {
		if (this.props.users === null) {
			return <Spinner />;
		}

		return (
			<table className="ui celled table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Username</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Website</th>
					</tr>
				</thead>
				<tbody>
					{this.props.users.map(user => {
						return (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.username}</td>
								<td>{user.email}</td>
								<td>{user.phone}</td>
								<td>{user.website}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	};

	render() {
		return (
			<div className="ui segment">
				<h3 className="ui header">Users</h3>
				{this.renderResult()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { users: state.users };
};

export default connect(
	mapStateToProps,
	{ setUsers }
)(UsersTable);
