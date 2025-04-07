import { DocSearchProps } from "@site/src/theme/SearchBar/types/types";
import { useSearchResultUrlProcessor } from "@docusaurus/theme-search-algolia/client";
import { useState } from "react";
import { DocSearchHit, DocSearchModalProps } from "@docsearch/react";

export const useTransformItems = (
  props: Pick<DocSearchProps, "transformItems">,
) => {
  const processSearchResultUrl = useSearchResultUrlProcessor();
  const [transformItems] = useState<DocSearchModalProps["transformItems"]>(
    () => {
      return (items: DocSearchHit[]) =>
        props.transformItems
          ? // Custom transformItems
            props.transformItems(items)
          : // Default transformItems
            items.map((item) => ({
              ...item,
              url: processSearchResultUrl(item.url),
            }));
    },
  );
  return transformItems;
};
