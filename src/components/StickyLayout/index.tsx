import styles from "./StickyLayout.module.css";

type Props = {
  children: React.ReactNode;
};

export function Root({ children }: Props) {
  return <div className={styles.root}>{children}</div>;
}

export function Sticky({ children }: Props) {
  return <div className={styles.sticky}>{children}</div>;
}

export function Main({ children }: Props) {
  return <div>{children}</div>;
}
