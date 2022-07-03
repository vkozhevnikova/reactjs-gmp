import React, { useState } from 'react';
import { Wrapper } from '../Wrapper';
import { Button } from '../UI/Button';
import { Search } from '../Search';
import { Icon } from '../UI/Icon';
import { Modal } from '../UI/Modal';
import { AddMovie } from '../Movie/AddMovie';

import styles from './Header.module.scss';

import logo from '../../assets/images/netflixroulette.svg';
import bgCover from '../../assets/images/movie-bg.jpg';
import plusIcon from '../../assets/sprites/plus.svg';

export const Header: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handlerOpenModal = () => {
    /**
     * TODO: Create a hook for Modal (Homework 5)
     */
    document.body.classList.add('overflow');
    setIsOpenModal(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.cover}>
        <span style={{ backgroundImage: `url(${bgCover})` }} className={styles.img} />
      </div>
      <Wrapper className={styles.container}>
        <div className={styles.topPanel}>
          <a href='/' className={styles.logo}>
            <img src={logo} alt='NetflixRoulette' />
          </a>

          <Button
            type='button'
            theme='info'
            className={styles.addMovieButton}
            onClick={handlerOpenModal}
          >
            <Icon icon={plusIcon} /> Add movie
          </Button>

          <Modal isOpen={isOpenModal} handlerModal={setIsOpenModal}>
            <AddMovie />
          </Modal>
        </div>

        <Search />
      </Wrapper>
    </header>
  );
};
