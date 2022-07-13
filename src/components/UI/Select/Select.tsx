import React, { useState } from 'react';
import cn from 'classnames';
import { ISelectProps } from './interfaces';

import { Icon } from '../Icon';

import styles from './Select.module.scss';

import iconArrow from '../../../assets/sprites/arrow.svg';

export const Select: React.FC<ISelectProps> = ({
  options,
  id,
  name,
  placeholder,
  value,
  disabled,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlerOpen = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const handleClickOption = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const renderOption = (option: string) => {
    const isActive = value === option;
    return (
      <button
        key={option}
        type='button'
        className={cn(styles.option, { [styles.isActive]: isActive })}
        onClick={() => handleClickOption(option)}
      >
        {options[option]}
      </button>
    );
  };

  const renderOptionsGroup = (group: { [key: string]: string }) => {
    const groupKeys = Object.keys(group);

    return groupKeys.map(renderOption);
  };

  return (
    <div className={cn(styles.select, { [styles.disabled]: disabled })}>
      <div className={styles.toggle} onClick={handlerOpen} role='button' aria-hidden='true'>
        <Icon icon={iconArrow} className={styles.icon} />
        <input type='hidden' value={value} id={id} name={name} disabled={disabled} />
        {options[value]}
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {placeholder && (
            <button type='button' className={cn(styles.option, styles.placeholder)}>
              {placeholder}
            </button>
          )}
          {renderOptionsGroup(options)}
        </div>
      )}
    </div>
  );
};
