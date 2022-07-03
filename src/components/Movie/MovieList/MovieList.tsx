import React, { useState } from 'react';
import { IMovieListProps } from './interfaces';
import { IMovieProps } from '../../../types/IMovieProps';
import { MovieCard } from '../MovieCard';
import { Modal } from '../../UI/Modal';
import { EditMovie } from '../EditMovie';
import { DeleteMovie } from '../DeleteMovie';

import styles from './MovieList.module.scss';

export const MovieList: React.FC<IMovieListProps> = ({ movies }) => {
  const [movieEditing, setMovieEditing] = useState(null);
  const [movieDeleting, setMovieDeleting] = useState(null);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

  const handlerEditMovie = (id: string) => {
    /**
     * TODO: Refactor this once a Modal hook is ready (Homework 5)
     */
    document.body.classList.add('overflow');
    setMovieEditing(id);
    setIsOpenEditModal(true);
  };

  const handlerDeleteMovie = (id: string) => {
    document.body.classList.add('overflow');
    setMovieDeleting(id);
    setIsOpenDeleteModal(true);
  };

  const renderCard = (movie: IMovieProps) => {
    return (
      <MovieCard
        key={movie.id}
        movie={movie}
        className={styles.card}
        onEdit={handlerEditMovie}
        onDelete={handlerDeleteMovie}
      />
    );
  };
  const renderList = (items: IMovieProps[]) => items.map(renderCard);

  return (
    <>
      <div className={styles.list}>{renderList(movies)}</div>

      <Modal isOpen={isOpenEditModal} handlerModal={setIsOpenEditModal}>
        <EditMovie movieId={movieEditing} />
      </Modal>

      <Modal isOpen={isOpenDeleteModal} handlerModal={setIsOpenDeleteModal}>
        <DeleteMovie id={movieDeleting} />
      </Modal>
    </>
  );
};
