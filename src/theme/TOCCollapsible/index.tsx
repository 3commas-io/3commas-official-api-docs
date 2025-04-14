import React, { MouseEventHandler, type ReactNode } from "react";
import { useCollapsible, Collapsible } from "@docusaurus/theme-common";
import CollapseButton from "@theme/TOCCollapsible/CollapseButton";
import clsx from "clsx";

import { useOutsideClick } from "@site/src/hooks/useOutsideClick";
import TOCItems from "@theme/TOCItems";
import styles from "./styles.module.css";

import type { Props } from "@theme/TOCCollapsible";

export default function TOCCollapsible({
  toc,
  className,
  minHeadingLevel,
  maxHeadingLevel,
}: Props): ReactNode {
  const { collapsed, toggleCollapsed } = useCollapsible({
    initialState: true,
  });

  const hideCollasible = () => {
    if (!collapsed) {
      toggleCollapsed();
    }
  };

  const { ref } = useOutsideClick<HTMLDivElement>(hideCollasible);

  const collapseButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    toggleCollapsed();
  };

  return (
    <div
      ref={ref}
      onClick={hideCollasible}
      className={clsx(
        styles.tocCollapsible,
        !collapsed && styles.tocCollapsibleExpanded,
        className,
      )}
    >
      <Collapsible
        lazy
        className={styles.tocCollapsibleContent}
        collapsed={collapsed}
      >
        <TOCItems
          toc={toc}
          linkClassName={styles.tocLink}
          linkActiveClassName={styles.tocLinkActive}
          minHeadingLevel={minHeadingLevel}
          maxHeadingLevel={maxHeadingLevel}
        />
      </Collapsible>
      <CollapseButton collapsed={collapsed} onClick={collapseButtonClick} />
    </div>
  );
}
