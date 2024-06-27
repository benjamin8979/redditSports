import React from 'react';
import styles from './App.module.css';
import { Navbar } from '../features/Navbar/Navbar';
import { Posts } from '../features/Posts/Posts';
import { Subreddits } from '../features/Subreddits/Subreddits';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Nav}>
        <Navbar />
      </div>
      <div className={styles.Post}>
        <Posts />
      </div>
      <div className={styles.Sub}>
        <Subreddits />
      </div>
      
     
      
    </div>
  );
}

export default App;
