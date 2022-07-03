import React from 'react';
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
  const renderOption = (option: string) => {
    return (
      <option key={option} value={option}>
        {options[option]}
      </option>
    );
  };

  const renderOptionsGroup = (group: { [key: string]: string }) => {
    const groupKeys = Object.keys(group);

    return groupKeys.map(renderOption);
  };

  return (
    <div className={styles.selectContainer}>
      <select
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={styles.select}
      >
        {placeholder && <option>{placeholder}</option>}
        {renderOptionsGroup(options)}
      </select>
      <Icon icon={iconArrow} className={styles.icon} />
    </div>
  );
};
