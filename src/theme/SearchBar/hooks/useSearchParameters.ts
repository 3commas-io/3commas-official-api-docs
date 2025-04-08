import { DocSearchProps } from "@site/src/theme/SearchBar/types/types";
import { FacetFilters } from "algoliasearch/lite";
import { useAlgoliaContextualFacetFilters } from "@docusaurus/theme-search-algolia/client";

export const useSearchParameters = ({
  contextualSearch,
  ...props
}: DocSearchProps): DocSearchProps["searchParameters"] => {
  function mergeFacetFilters(f1: FacetFilters, f2: FacetFilters): FacetFilters {
    const normalize = (f: FacetFilters): FacetFilters =>
      typeof f === "string" ? [f] : f;
    return [...normalize(f1), ...normalize(f2)];
  }

  const contextualSearchFacetFilters =
    useAlgoliaContextualFacetFilters() as FacetFilters;

  const configFacetFilters: FacetFilters =
    props.searchParameters?.facetFilters ?? [];

  const facetFilters: FacetFilters = contextualSearch
    ? // Merge contextual search filters with config filters
      mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
    : // ... or use config facetFilters
      configFacetFilters;

  // We let users override default searchParameters if they want to
  return {
    ...props.searchParameters,
    facetFilters,
  };
};
