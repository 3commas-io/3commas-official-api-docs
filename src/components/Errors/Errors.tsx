import { ReactNode } from "react";

import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
}

export const Errors = ({children}: Props) => {
  return (
    <div className={styles.root}>{children}</div>
  )
}