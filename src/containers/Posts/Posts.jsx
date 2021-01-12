import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import Post from '../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: [],
    hasNoError: true,
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get('/posts')
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => ({
          ...post,
          author: 'Max',
        }));
        this.setState({
          posts: updatedPosts,
        });
      })
      .catch(() => this.setState({ hasNoError: false }));
  }

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
    if (this.state.hasNoError) {
      posts = this.state.posts.map((post) => (
        <Link to={'/posts/' + post.id} key={post.id}>
          <Post
            title={post.title}
            author={post.author}
            {...this.props} //this passes props from parent container to child container
          />
        </Link>
      ));
    }

    return (
      <div>
        <div className='Posts'>{posts}</div>
        <Route path={this.props.match.url + '/:id'} component={FullPost} />
      </div>
    );
  }
}

export default Posts;
