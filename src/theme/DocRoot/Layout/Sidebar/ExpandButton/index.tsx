import React from "react";
import { translate } from "@docusaurus/Translate";
import IconArrow from "@theme/Icon/Arrow";
import type { Props } from "@theme/DocRoot/Layout/Sidebar/ExpandButton";

import styles from "./styles.module.css";

export default function DocRootLayoutSidebarExpandButton({
  toggleSidebar,
}: Props): JSX.Element {
  return (
    <div
      className={styles.expandButton}
      title={translate({
        id: "theme.docs.sidebar.expandButtonTitle",
        message: "Expand sidebar",
        description:
          "The ARIA label and title attribute for expand button of doc sidebar",
      })}
      aria-label={translate({
        id: "theme.docs.sidebar.expandButtonAriaLabel",
        message: "Expand sidebar",
        description:
          "The ARIA label and title attribute for expand button of doc sidebar",
      })}
      tabIndex={0}
      role="button"
      onKeyDown={toggleSidebar}
      onMouseEnter={toggleSidebar}
    >
      <IconArrow className={styles.expandButtonIcon} />
    </div>
  );
}
