import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { actionTypes, useGlobalContext } from '../../core/store';
import { LOCALE, I18Y } from '../../core/i18y';

import useToggleModal from '../../hooks/useToggleModal';

import { Wrapper } from '../Wrapper';
import { Button } from '../UI/Button';
import { Search } from '../Search';
import { Icon } from '../UI/Icon';
import { Modal } from '../UI/Modal';
import { AddMovie } from '../Movie/AddMovie';
import { MovieDetails } from '../Movie/MovieDetails';

import styles from './Header.module.scss';

import logo from '../../assets/images/netflixroulette.svg';
import bgCover from '../../assets/images/movie-bg.jpg';
import plusIcon from '../../assets/sprites/plus.svg';
import searchIcon from '../../assets/sprites/search.svg';

export const Header: React.FC = () => {
  const { state, dispatch } = useGlobalContext();
  const { isOpenModal, onToggleModal } = useToggleModal();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isShowSearch, setIsShowSearch] = useState<boolean>(true);

  useEffect(() => {
    if (state.movieDetails) {
      setMovieDetails(state.movieDetails);
      setIsShowSearch(false);
    }
  }, [state.movieDetails]);

  const handlerShowSearch = () => {
    setIsShowSearch(true);
    setMovieDetails(null);

    dispatch({
      type: actionTypes.SET_MOVIE_DETAILS,
      payload: null,
    });
  };

  return (
    <header className={cn(styles.header, { [styles.isShowMovie]: !isShowSearch })}>
      <div className={styles.cover}>
        <span style={{ backgroundImage: `url(${bgCover})` }} className={styles.img} />
      </div>
      <Wrapper className={styles.container}>
        <div className={styles.topPanel}>
          <a href='/' className={styles.logo}>
            <img src={logo} alt={I18Y[LOCALE].LOGOTYPE_ALT} />
          </a>

          <Button
            type='button'
            theme='info'
            className={styles.addMovieButton}
            onClick={() => onToggleModal()}
          >
            <Icon icon={plusIcon} /> {I18Y[LOCALE].BUTTON_ADD_MOVIE}
          </Button>

          <Modal isOpen={isOpenModal} onClose={onToggleModal}>
            <AddMovie />
          </Modal>

          <Button
            type='button'
            theme='invisible'
            className={styles.showSearchButton}
            onClick={handlerShowSearch}
          >
            <Icon icon={searchIcon} />
          </Button>
        </div>

        {isShowSearch && <Search className={styles.search} />}
        {movieDetails && <MovieDetails movie={movieDetails} />}
      </Wrapper>
    </header>
  );
};
