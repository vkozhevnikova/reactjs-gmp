import * as React from 'react';
import cn from 'classnames';
import { IWrapperProps } from './interfaces';

import styles from './Wrapper.module.scss';

export const Wrapper: React.FC<IWrapperProps> = ({ children, className }) => {
  return <div className={cn(styles.wrapper, className)}>{children}</div>;
};
