import React from "react";

import styles from "./Steps.module.css";

type Props = { children: React.ReactNode; maxWidth?: number };

export const Steps = ({ children, maxWidth }: Props) => (
  <div
    className={styles.steps}
    style={{ maxWidth: maxWidth ? `${maxWidth}px` : "none" }}
  >
    {children}
  </div>
);
