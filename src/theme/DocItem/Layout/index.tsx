import React from "react";
import clsx from "clsx";

import useScrollStylingManager from "@site/src/hooks/useScrollStylingManager";
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
import PaginatorNavLink from "../../PaginatorNavLink";

import type { Props } from "@theme/DocItem/Layout";

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

  useScrollStylingManager();

  const hidePaginationAndBreadcrumb =
    previous === undefined || previous.title === "Home";

  return (
    <div className="row">
      <div className={clsx("col")}>
        {!hidePaginationAndBreadcrumb && (
          <div id="breadcrumbsArea">
            <div
              id="breadcrumbsContainer"
              className={styles.breadcrumbsContainer}
            >
              <DocBreadcrumbs />
            </div>
          </div>
        )}
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>

          {!hidePaginationAndBreadcrumb && (
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
          )}
        </div>
      </div>
      {docTOC.desktop && <div className={styles.toc}>{docTOC.desktop}</div>}
    </div>
  );
}

// questionable feature
