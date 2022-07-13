import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import DatePicker from 'react-datepicker';
import { MONTH, YEARS } from '../../../core/constants';
import { getYear, getMonth } from '../../../utils/date';
import { IDatePickerInputProps } from './interfaces';
import { Icon } from '../Icon';

import 'react-datepicker/dist/react-datepicker.css';
import './ReactDatepickerCustom.css';
import styles from './DatePickerInput.module.scss';

import calendarIcon from '../../../assets/sprites/calendar.svg';
import arrowIcon from '../../../assets/sprites/arrow.svg';

export const DatePickerInput: React.FC<IDatePickerInputProps> = ({
  id,
  placeholder,
  startDateCurrent,
  onChange,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  useEffect(() => {
    const date = startDateCurrent ? new Date(startDateCurrent) : null;

    setStartDate(date);
  }, [startDateCurrent]);

  const renderOption = (option: string) => (
    <option key={option} value={option}>
      {option}
    </option>
  );

  const renderOptionsGroup = (list: string[]) => {
    return list.map(renderOption);
  };

  const renderSelect = (
    list: string[],
    value: string | number,
    onChangeOption: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  ) => {
    return (
      <select value={value} onChange={onChangeOption} className={styles.select}>
        {renderOptionsGroup(list)}
      </select>
    );
  };

  const renderCustomHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => {
    const currentYear = getYear(date);
    const currentMonth = MONTH[getMonth(date)];

    const handlerChangeYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const {
        target: { value },
      } = event;

      return changeYear(value);
    };

    const handlerChangeMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const {
        target: { value },
      } = event;

      return changeMonth(MONTH.indexOf(value));
    };

    return (
      <div className={styles.header}>
        <button
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
          type='button'
          className={cn(styles.btn, styles.btnPrev)}
        >
          <Icon icon={arrowIcon} />
        </button>

        {renderSelect(YEARS, currentYear, handlerChangeYear)}
        {renderSelect(MONTH, currentMonth, handlerChangeMonth)}

        <button
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
          type='button'
          className={cn(styles.btn, styles.btnNext)}
        >
          <Icon icon={arrowIcon} />
        </button>
      </div>
    );
  };

  return (
    <div className={styles.datepicker}>
      <DatePicker
        renderCustomHeader={renderCustomHeader}
        selected={startDate}
        onChange={onChange}
        placeholderText={placeholder}
        id={id}
      />
      <Icon icon={calendarIcon} className={styles.calendarIcon} />
    </div>
  );
};
