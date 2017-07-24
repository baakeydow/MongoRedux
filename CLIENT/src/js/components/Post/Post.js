import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "./actions/userActions"
import { fetchPosts } from "./actions/postsActions"


class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  fetchPosts() {
    this.props.dispatch(fetchPosts())
  }

  render() {
    const { user, posts } = this.props;
    const mappedPosts = posts.map(post => <li key={post.cuid}>{post.content}</li>)

    if (!posts.length) {
      return <button onClick={this.fetchPosts.bind(this)}>load Posts</button>
    }

    return <div>
      <h1>{user.name}</h1>
      <ul>{mappedPosts}</ul>
    </div>
  }
}

export default connect(state => ({
  user: state.user.user,
  userFetched: state.user.fetched,
  posts: state.posts.posts,
}))(Layout);
