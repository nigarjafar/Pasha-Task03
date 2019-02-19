import React, { Component } from "react";
import { connect } from "react-redux";
import { setPosts } from "../actions";
import axios from "axios";
import Spinner from "./Spinner";

class PostsTable extends Component {
	async componentDidMount() {
		const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

		this.props.setPosts(posts.data);
	}

	renderResult() {
		if (this.props.posts === null) {
			return <Spinner />;
		}

		return (
			<table className="ui celled table">
				<thead>
					<tr>
						<th>Id</th>
						<th>Title</th>
						<th>Body</th>
					</tr>
				</thead>
				<tbody>
					{this.props.posts.map(post => {
						return (
							<tr key={post.id}>
								<td>{post.id}</td>
								<td>{post.title}</td>
								<td>{post.body}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}

	render() {
		return (
			<div className="ui segment">
				<h3 className="ui header">Posts</h3>
				{this.renderResult()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { posts: state.posts };
};

export default connect(
	mapStateToProps,
	{ setPosts }
)(PostsTable);
