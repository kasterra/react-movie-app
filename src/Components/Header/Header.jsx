import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default () => (
  <header className={styles.navList}>
    <ul>
      <li>
        <Link to="/">Movies</Link>
      </li>
      <li>
        <Link to="/detail">Detail</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
    </ul>
  </header>
);
