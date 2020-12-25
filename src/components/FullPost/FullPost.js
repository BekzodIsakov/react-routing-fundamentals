import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedPost ||
        (!this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        axios
          .get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
          .then((response) => {
            this.setState({ loadedPost: response });
          });
      }
    }
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    }
    if (this.state.loadedPost) {
      post = <p style={{ textAlign: 'center' }}>Component's been uploaded</p>;
    }

    return post;
  }
}

export default FullPost;