import Link from "@docusaurus/Link";

import TelegramIcon from "@site/src/icons/TelegramIcon";
import styles from "./TelegramLink.module.css";

import type { FunctionComponent } from "react";

const TelegramLink: FunctionComponent = () => {
  return (
    <Link
      href="https://t.me/Community_3Commas"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <TelegramIcon />
    </Link>
  );
};

export default TelegramLink;
