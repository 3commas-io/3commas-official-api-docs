import React from "react";
import clsx from "clsx";
import { useDocsSidebar } from "@docusaurus/plugin-content-docs/client";
import type { Props } from "@theme/DocRoot/Layout/Main";

import styles from "./styles.module.css";
import { useSidebarContext } from "@site/src/context/SidebarContext";

export default function DocRootLayoutMain({
  hiddenSidebarContainer,
  children,
}: Props): JSX.Element {
  const sidebar = useDocsSidebar();
  const { isPinned } = useSidebarContext();
  return (
    <main
      className={clsx(
        styles.docMainContainer,
        (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced,
        !isPinned && styles.docMainContainerWidth,
      )}
    >
      <div
        className={clsx(
          "container padding-top--md padding-bottom--lg",
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced,
        )}
      >
        {children}
      </div>
    </main>
  );
}
