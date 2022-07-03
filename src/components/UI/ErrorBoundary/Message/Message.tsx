import React from 'react';

import styles from './Message.module.scss';

import icon from '../../../../assets/images/warning.png';

export const Message: React.FC = () => {
  return (
    <div className={styles.error}>
      <img src={icon} alt='error icon' />
      <span className={styles.title}>Oh!</span>
      <p>something has gone terribly wrong but we already fix it</p>
    </div>
  );
};
