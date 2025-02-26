import { ReactNode } from "react";
import styles from "./styles.module.css";

interface ErrorTextProps {
  code: string;
  children: ReactNode;
}

export const ErrorText = ({ code, children }: ErrorTextProps) => {
  return (
    <div className={styles.error}>
      <code>{code}</code>
      <span>{children}</span>
    </div>
  );
};