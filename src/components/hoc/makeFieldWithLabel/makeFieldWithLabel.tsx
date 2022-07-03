import React from 'react';
import { IMakeFieldWithLabelProps } from './interfaces';

import styles from './FieldWithLabel.module.scss';

export const makeFieldWithLabel = <T extends object>(
  Component: React.ComponentType<T>,
): React.FC<T & IMakeFieldWithLabelProps> => {
  const displayName = Component.displayName || Component.name || 'Component';

  const FieldWithLabel = (props: T & IMakeFieldWithLabelProps) => {
    const { forId, label, ...rest } = props;

    return (
      <>
        <label htmlFor={forId} className={styles.label}>
          {label}
        </label>
        <Component {...(rest as T)} />
      </>
    );
  };

  FieldWithLabel.displayName = `FieldWithLabel(${displayName})`;

  return FieldWithLabel;
};
