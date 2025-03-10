import { FC } from "react";
import clsx from "clsx";

import styles from "./StickyLayout.module.css";

type RootProps = {
  children: React.ReactNode;
};

export function Root({ children }: RootProps) {
  return <div className={styles.root}>{children}</div>;
}

type StickyProps = {
  children: React.ReactNode;
  entity?: boolean;
};

export const Sticky: FC<StickyProps> = ({ children, entity = false }) => {
  return (
    <div className={clsx(styles.sticky, entity && styles.entity)}>
      {children}
    </div>
  );
};

export function Main({ children }: RootProps) {
  return <div>{children}</div>;
}
