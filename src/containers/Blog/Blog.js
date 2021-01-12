import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from '../Posts/Posts';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    auth: false,
  };

  render() {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to='/posts'>Posts</NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post',
                    hash: '#here',
                  }}
                  {...this.props}
                >
                  New post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route path='new-post' component={NewPost} />
          ) : null}
          <Route render={() => <h1>Not Found</h1>} />
          {/*to catch unknown routes*/}
          <Route path='/posts' component={Posts} />
          {/*this doesn't work due to above route*/}
          <Redirect from='/' to='/posts' />
        </Switch>
      </div>
    );
  }
}

export default Blog;
