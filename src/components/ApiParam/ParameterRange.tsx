import clsx from 'clsx';

import styles from './styles.module.css';

interface ParameterRangeProps {
  min?: number | string;
  max?: number | string;
  defaultVal?: number | string;
}

export const ParameterRange = ({ defaultVal, max, min }: ParameterRangeProps) => {
  return (
    <div className={styles['parameter-range']}>
      {min !== undefined && (
        <div className={clsx(styles.min, styles.value)}>
          min: <code>{min}</code>
        </div>
      )}
      {max !== undefined && (
        <div className={clsx(styles.max, styles.value)}>
          max: <code>{max}</code>
        </div>
      )}
      {defaultVal !== undefined && (
        <div className={clsx(styles.default, styles.value)}>
          default: <code>{defaultVal}</code>
        </div>
      )}
    </div>
  );
};