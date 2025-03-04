import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

import styles from "./FormField.module.css";

interface BaseProps {
  id: string;
  label: string;
  placeholder?: string;
  isRequired?: boolean;
  isTextarea?: boolean;
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

type FormFieldProps = InputProps | TextareaProps;

export const FormField = ({
  id,
  label,
  placeholder = "",
  isRequired = true,
  isTextarea = false,
  ...props
}: FormFieldProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {isRequired && <span> *</span>}
      </label>
      {isTextarea ? (
        <textarea
          className={styles.field}
          id={id}
          placeholder={placeholder}
          {...(props as TextareaProps)}
        />
      ) : (
        <input
          className={styles.field}
          id={id}
          placeholder={placeholder}
          {...(props as InputProps)}
        />
      )}
    </div>
  );
};
