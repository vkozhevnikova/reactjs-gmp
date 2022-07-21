import React from 'react';
import ReactDOM from 'react-dom';
import { IModalProps } from './interfaces';
import { Icon } from '../Icon';

import styles from './Modal.module.scss';

import closeIcon from '../../../assets/sprites/close.svg';

const modalRoot = document.getElementById('modal-root');

export const Modal: React.FC<IModalProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} />

      <div className={styles.modal}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <button className={styles.close} type='button' onClick={onClose}>
              <Icon icon={closeIcon} />
            </button>

            {children}
          </div>
        </div>
      </div>
    </>,
    modalRoot,
  );
};
