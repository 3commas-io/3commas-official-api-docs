import styles from "./FormField.module.css";

interface FormFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  isRequired?: boolean;
  type?: "text" | "password";
  isTextarea?: boolean;
}

const FormField = ({
  id,
  label,
  placeholder = "",
  isRequired = true,
  type = "text",
  isTextarea = false,
}: FormFieldProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {isRequired && <span> *</span>}
      </label>
      {isTextarea ? (
        <textarea className={styles.field} id={id} placeholder={placeholder} />
      ) : (
        <input
          className={styles.field}
          id={id}
          placeholder={placeholder}
          type={type}
        />
      )}
    </div>
  );
};

export default FormField;
