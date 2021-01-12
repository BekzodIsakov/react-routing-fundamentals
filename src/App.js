import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename='/my-app'> // If you forgot what's basename, go to the tutorial folder named Multi-page feeling../Routing and Server Deployment.mp4
      <BrowserRouter>
        <div className='App'>
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
