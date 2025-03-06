import { ReactNode, useState } from "react";

import { Method } from "./Method";
import styles from "./Endpoint.module.css";
import { Tooltip } from "@site/src/components/Tooltip";
import clsx from "clsx";

type Props = {
  url?: string;
  method?: Method;
  permissions?: ReactNode;
  endpointsList?: Props[];
};

export function Endpoint({ url, method, permissions, endpointsList }: Props) {
  const [copied, setCopied] = useState(false);
  let endpointContent: ReactNode;

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setCopied(false);
    }
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
    });
  };

  if (endpointsList) {
    endpointContent = endpointsList.map((endpoint) => (
      <>
        {endpoint.method ? (
          <Method variant="text" align="right">
            {endpoint.method}
          </Method>
        ) : null}

        <Tooltip
          onOpenChange={handleOpenChange}
          content={copied ? "Copied!" : "Copy"}
        >
          <span className={styles.url} onClick={() => handleCopy(endpoint.url)}>
            {endpoint.url}
          </span>
        </Tooltip>
      </>
    ));
  } else {
    endpointContent = (
      <>
        {method ? <Method>{method}</Method> : null}

        <Tooltip
          onOpenChange={handleOpenChange}
          content={copied ? "Copied!" : "Copy"}
        >
          <span
            className={clsx(styles.url, method ? "" : styles.urlOnly)}
            onClick={() => handleCopy(url)}
          >
            {url}
          </span>
        </Tooltip>
      </>
    );
  }

  return (
    <div className={styles.root}>
      <div
        className={clsx(
          styles.container,
          endpointsList && styles.endpointsListContainer,
        )}
      >
        {endpointContent}
      </div>

      <div className={styles.permissions}>{permissions}</div>
    </div>
  );
}
