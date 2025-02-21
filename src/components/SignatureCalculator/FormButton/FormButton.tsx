import { ButtonHTMLAttributes } from "react";

import styles from "./FormButton.module.css";

type FormButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const FormButton = ({ children, ...props }: FormButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default FormButton;
