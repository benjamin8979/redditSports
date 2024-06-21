import React from 'react';
import styles from './App.module.css';
import { Navbar } from '../features/Navbar/Navbar';
import { Posts } from '../features/Posts/Posts';
import { Subreddits } from '../features/Subreddits/Subreddits';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Posts />
      <Subreddits />
    </div>
  );
}

export default App;
