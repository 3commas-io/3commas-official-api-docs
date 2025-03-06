import React from "react";
import styles from "./Steps.module.css";

type Props = { children: React.ReactNode; restrictedWidth?: number };

export const Steps = ({ children, restrictedWidth }: Props) => (
  <div
    className={styles.steps}
    style={{ maxWidth: restrictedWidth ? `${restrictedWidth}px` : "none" }}
  >
    {children}
  </div>
);
