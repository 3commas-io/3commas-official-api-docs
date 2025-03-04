import styles from "./NoContentEndpoint.module.css";

import { Method } from "./Method";
import CopyButton from "@site/src/theme/CodeBlock/CopyButton";

interface NoContentEndpointProps {
  method: Method;
  endpoint: string;
}

//! Use this component when you need to only display the method and path of the endpoint, without content.
export function NoContentEndpoint({
  endpoint,
  method,
}: NoContentEndpointProps) {
  return (
    <div className={styles.container}>
      <div className={styles.codeBlockTitle}>
        <Method variant="text" align="right">
          {method}
        </Method>
        <span>{endpoint}</span>
        <div className={styles.buttonGroup}>
          <CopyButton code={endpoint} />
        </div>
      </div>
    </div>
  );
}
