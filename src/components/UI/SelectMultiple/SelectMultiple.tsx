import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import { ISelectMultipleProps } from './interfaces';
import useClickOutside from '../../../hooks/useClickOutside';

import { Icon } from '../Icon';
import { Input } from '../Input';

import styles from './SelectMultiple.module.scss';

import checkIcon from '../../../assets/sprites/indicator.svg';

export const SelectMultiple: React.FC<ISelectMultipleProps> = ({
  options,
  value,
  className,
  onChange,
  ...inputProps
}) => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [choosenOptions, setChoosenOptions] = useState([]);
  const [optionsValue, setOptionsValue] = useState('');

  useClickOutside(ref, () => setIsOpen(false));

  useEffect(() => {
    if (value) {
      setChoosenOptions(value);
    }
  }, [value]);

  useEffect(() => {
    setOptionsValue(choosenOptions.map(item => options[item]).join(', '));
  }, [choosenOptions, options]);

  const handlerOpen = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const handlerOnClickOption = (option: string) => {
    if (choosenOptions.includes(option)) {
      setChoosenOptions(choosenOptions.filter(item => item !== option));
    } else {
      setChoosenOptions([...choosenOptions, option]);
    }
  };

  const renderOption = (option: string) => {
    const isActiveOption = choosenOptions.includes(option);

    return (
      <div
        key={option}
        className={cn(styles.option, { [styles.isActive]: isActiveOption })}
        onClick={() => handlerOnClickOption(option)}
        role='button'
        aria-hidden='true'
      >
        <span className={styles.check}>
          <Icon icon={checkIcon} className={styles.checkIcon} />
        </span>
        {options[option]}
      </div>
    );
  };

  const renderList = (optionsGroup: { [key: string]: string }) => {
    const optionKeys = Object.keys(optionsGroup);

    return optionKeys.map(renderOption);
  };

  return (
    <div ref={ref} className={cn(styles.select, className)}>
      <div className={styles.field} onClick={handlerOpen} role='button' aria-hidden='true'>
        <Input
          value={optionsValue}
          onChange={onChange}
          readonly
          className={styles.input}
          {...inputProps}
        />
      </div>
      {isOpen && <div className={styles.list}>{renderList(options)}</div>}
    </div>
  );
};
