import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import clsx from "clsx";

import TOCCollapsible from "@theme/TOCCollapsible";
import { useBottomSpacing } from "@site/src/hooks/useBottomSpacing";
import styles from "./styles.module.css";

import type { ReactNode } from "react";

export default function DocItemTOCMobile(): ReactNode {
  const { toc, frontMatter } = useDoc();

  useBottomSpacing(toc.length > 0);

  return (
    <TOCCollapsible
      toc={toc}
      minHeadingLevel={frontMatter.toc_min_heading_level}
      maxHeadingLevel={frontMatter.toc_max_heading_level}
      className={clsx(ThemeClassNames.docs.docTocMobile, styles.tocMobile)}
    />
  );
}
