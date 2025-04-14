import React, { type ReactNode } from "react";
import Translate from "@docusaurus/Translate";
import clsx from "clsx";

import styles from "./styles.module.css";

import type { Props } from "@theme/TOCCollapsible/CollapseButton";

export default function TOCCollapsibleCollapseButton({
  collapsed,
  ...props
}: Props): ReactNode {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        "clean-btn",
        styles.tocCollapsibleButton,
        !collapsed && styles.tocCollapsibleButtonExpanded,
        props.className,
      )}
    >
      <Translate
        id="theme.TOCCollapsible.toggleButtonLabel"
        description="The label used by the button on the collapsible TOC component"
      >
        On this page
      </Translate>
    </button>
  );
}
