import axios from "axios";

export function fetchPosts() {
  return function(dispatch) {
    dispatch({type: "FETCH_POSTS"});
    var url = process.env.NODE_ENV === 'development' ? '/posts/listposts' : 'https://yourAwesomeDomain.com/posts/listposts';

    axios.get(url)
      .then((response) => {
        dispatch({type: "FETCH_POSTS_FULFILLED", payload: response.data.posts})
      })
      .catch((err) => {
        dispatch({type: "FETCH_POSTS_REJECTED", payload: err})
      })
  }
}

export function addPost(id, post) {
  return {
    type: 'ADD_POST',
    payload: {
      id,
      post,
    },
  }
}

export function updatePOST(id, post) {
  return {
    type: 'UPDATE_POST',
    payload: {
      id,
      post,
    },
  }
}

export function deletePOST(id) {
  return { type: 'DELETE_POST', payload: id}
}
