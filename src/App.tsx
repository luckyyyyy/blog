import React, { Component } from 'react';
import Header from './components/Header';
import PostList from './pages/PostList';

import './styles/app.css';

class App extends Component {
  render() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <PostList />
      </main>
    </div>
  );
  }
}

export default App;
