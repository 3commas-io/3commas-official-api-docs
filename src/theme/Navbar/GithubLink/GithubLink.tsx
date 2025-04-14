import Link from "@docusaurus/Link";

import { GitHub } from "../../Icon/Socials/GitHub";
import styles from "./styles.module.css";

import type { FunctionComponent } from "react";

export const GithubLink: FunctionComponent = () => {
  return (
    <Link
      href="https://github.com/3commas-io/3commas-official-api-docs"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <GitHub />
    </Link>
  );
};
