import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "./actions/userActions"
import { fetchPosts } from "./actions/postsActions"
import './css/Post.css';

class Post extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  fetchPosts() {
    this.props.dispatch(fetchPosts())
  }

  render() {
    const { user, posts } = this.props;
    const mappedPosts = posts.map(post => <div className="postContent" key={post.cuid}>{post.content}</div>)

    if (!posts.length) {
      return <button className="btn btn-info posts" onClick={this.fetchPosts.bind(this)}>Load Posts</button>
    }

    return (
        <div>
          <h1>{user.name}</h1>
          <div className="posts">
            {mappedPosts}
          </div>
        </div>
    );
  }
}

export default connect(state => ({
  user: state.user.user,
  userFetched: state.user.fetched,
  posts: state.posts.posts,
}))(Post);
