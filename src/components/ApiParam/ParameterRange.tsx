import clsx from "clsx";

import styles from "./styles.module.css";

interface ParameterRangeProps {
  min?: number | string;
  max?: number | string;
  defaultVal?: number | string;
  labels?: {
    min?: string;
    max?: string;
    default?: string;
  };
}

export const ParameterRange = ({
  defaultVal,
  max,
  min,
  labels = { default: "default", min: "min", max: "max" },
}: ParameterRangeProps) => {
  return (
    <div className={styles["parameter-range"]}>
      {min !== undefined && (
        <div className={clsx(styles.min, styles.value)}>
          {labels.min}: <code>{min}</code>
        </div>
      )}
      {max !== undefined && (
        <div className={clsx(styles.max, styles.value)}>
          {labels.max}: <code>{max}</code>
        </div>
      )}
      {defaultVal !== undefined && (
        <div className={clsx(styles.default, styles.value)}>
          {labels.default}: <code>{defaultVal}</code>
        </div>
      )}
    </div>
  );
};
