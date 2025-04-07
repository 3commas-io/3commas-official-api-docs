import { AutocompleteState } from "@algolia/autocomplete-core";
import { DocSearchModalProps, InternalDocSearchHit } from "@docsearch/react";

export type ResultsFooterProps = {
  state: AutocompleteState<InternalDocSearchHit>;
  onClose: () => void;
};

export type DocSearchProps = Omit<
  DocSearchModalProps,
  "onClose" | "initialScrollY"
> & {
  contextualSearch?: string;
  externalUrlRegex?: string;
  searchPagePath: boolean | string;
};
