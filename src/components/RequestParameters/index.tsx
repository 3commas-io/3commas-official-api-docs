import styles from "./RequestParameters.module.css";

interface RequestParametersProps {
  items: { key: string; value: string }[];
}

const RequestParameters = ({ items = [] }: RequestParametersProps) => {
  return (
    <div className={styles.container}>
      {items.map(({ key, value }) => (
        <div className={styles.row} key={key}>
          <div className={styles.label}>
            <span>Parameter:</span>
            <span>{key}</span>
          </div>
          <div className={styles.value}>
            <span>Value:</span>
            <span>{value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestParameters;
