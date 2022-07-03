import { range } from 'lodash';
import { getYear } from '../utils/date';

export const MONTH = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const YEARS = range(1700, getYear(new Date()) + 1, 1);
