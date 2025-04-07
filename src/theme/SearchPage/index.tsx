/* eslint-disable jsx-a11y/no-autofocus */

import React, { type ReactNode } from "react";
import { HtmlClassNameProvider } from "@docusaurus/theme-common";
import { SearchPageContent } from "@site/src/theme/SearchPage/SearchPageContent/SearchPageContent";

export default function SearchPage(): ReactNode {
  return (
    <HtmlClassNameProvider className="search-page-wrapper">
      <SearchPageContent />
    </HtmlClassNameProvider>
  );
}
