import React, { Component } from 'react'

// import Button from 'react-bootstrap/Button';

import { Provider } from 'react-redux'
import store from './store';

import './App.css';

import Nav from './components/Nav'
import Posts from './components/Posts'
import PostForm from './components/PostForm';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }


  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>Home puge</h1>
            <Nav />
          </header>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
