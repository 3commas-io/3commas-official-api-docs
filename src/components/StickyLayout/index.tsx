import clsx from "clsx";

import styles from "./StickyLayout.module.css";

type Props = {
  children: React.ReactNode;
};

export function Root({ children }: Props) {
  return <div className={styles.root}>{children}</div>;
}

export function Sticky({
  children,
  entity = false,
}: Props & { entity?: boolean }) {
  return (
    <div className={clsx(styles.sticky, entity && styles.entity)}>
      {children}
    </div>
  );
}

export function Main({ children }: Props) {
  return <div>{children}</div>;
}
