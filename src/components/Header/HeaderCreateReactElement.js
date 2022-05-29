import React from 'react';

import styles from './Header.module.scss';
import logo from '../../assets/images/logo.svg';

export const Header = React.createElement(
  'header',
  { className: styles.header },
  React.createElement(
    'img',
    {
      className: styles.logo,
      alt: 'react-logo',
      src: logo,
    }
  ),
  React.createElement(
    'div',
    { className: styles.title },
    'React Components'
  )
);
