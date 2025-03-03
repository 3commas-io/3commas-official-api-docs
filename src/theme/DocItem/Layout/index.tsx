import React from "react";
import clsx from "clsx";
import { useWindowSize } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import DocItemFooter from "@theme/DocItem/Footer";
import DocItemTOCMobile from "@theme/DocItem/TOC/Mobile";
import DocItemTOCDesktop from "@theme/DocItem/TOC/Desktop";
import DocItemContent from "@theme/DocItem/Content";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import ContentVisibility from "@theme/ContentVisibility";
import type { Props } from "@theme/DocItem/Layout";
import ScrollStylingManager from "@site/src/components/ScrollStylingManager/ScrollStylingManager";
import PaginatorNavLink from "../../PaginatorNavLink";

import styles from "./styles.module.css";

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();

  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;

  const desktop =
    canRender && (windowSize === "desktop" || windowSize === "ssr") ? (
      <DocItemTOCDesktop />
    ) : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
}

export default function DocItemLayout({ children }: Props): JSX.Element {
  const docTOC = useDocTOC();
  const { metadata } = useDoc();
  const { previous, next } = metadata;

  return (
    <div className="row">
      <ScrollStylingManager />
      <div className={clsx("col")}>
        <span className={styles.breadcrumbsContainer}>
          <DocBreadcrumbs />
        </span>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>

          <div className={styles.pagination}>
            <PaginatorNavLink
              isNext={false}
              permalink={previous?.permalink}
              title={previous?.title}
            />
            <PaginatorNavLink
              isNext={true}
              permalink={next?.permalink}
              title={next?.title}
            />
          </div>
        </div>
      </div>
      {docTOC.desktop && <div className={styles.toc}>{docTOC.desktop}</div>}
    </div>
  );
}

// questionable feature
