import { useState } from 'react';

const OVERFLOW_CLASS = 'overflow';

const useToggleModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { body } = document;

  const onToggleModal = () => {
    body.classList.toggle(OVERFLOW_CLASS);
    setIsOpenModal(!isOpenModal);
  };

  return { isOpenModal, onToggleModal };
};

export default useToggleModal;
