import { useMemo } from "react";
import { DocSearchProps } from "@site/src/theme/SearchBar/types/types";
import { ResultsFooter } from "@site/src/theme/SearchBar/ResultsFooter/ResultsFooter";

export const useResultsFooterComponent = ({
  closeModal,
}: {
  closeModal: () => void;
}): DocSearchProps["resultsFooterComponent"] => {
  return useMemo(
    () =>
      ({ state }) => <ResultsFooter state={state} onClose={closeModal} />,
    [closeModal],
  );
};
