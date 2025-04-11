import Link from "@docusaurus/Link";
import TelegramIcon from "@site/src/icons/TelegramIcon";

import styles from "./TelegramLink.module.css";
import { FunctionComponent } from "react";
import clsx from "clsx";

type Props = {
  labeled?: boolean;
};

const TelegramLink: FunctionComponent<Props> = ({ labeled = false }) => {
  return (
    <Link
      href="https://t.me/Community_3Commas"
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(styles.link, { [styles.labeled]: labeled })}
    >
      <TelegramIcon />

      {labeled && (
        <span className={styles.label}>Join the 3Commas Community</span>
      )}
    </Link>
  );
};

export default TelegramLink;
