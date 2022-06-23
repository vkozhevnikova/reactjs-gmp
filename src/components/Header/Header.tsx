import * as React from 'react';
import { Wrapper } from '../Wrapper';
import { Button } from '../Button';
import { Search } from '../Search';
import { Icon } from '../Icon';

import styles from './Header.module.scss';

import logo from '../../assets/images/netflixroulette.svg';
import bgCover from '../../assets/images/movie-bg.jpg';
import plusIcon from '../../assets/sprites/plus.svg';

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.cover}>
      <span style={{ backgroundImage: `url(${bgCover})` }} className={styles.img} />
    </div>
    <Wrapper className={styles.container}>
      <div className={styles.topPanel}>
        <a href='/' className={styles.logo}>
          <img src={logo} alt='NetflixRoulette' />
        </a>

        <Button type='button' theme='info' className={styles.addMovieButton}>
          <Icon icon={plusIcon} /> Add movie
        </Button>
      </div>

      <Search />
    </Wrapper>
  </header>
);
