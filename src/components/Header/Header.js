import React from 'react';

import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="react-logo"
        className={styles.logo}
      />
      <div className={styles.title}>
        React Components
      </div>
    </header>
  );
}
