import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { ResultsFooterProps } from "@site/src/theme/SearchBar/types/types";
import { useSearchLinkCreator } from "@docusaurus/theme-common";

export const ResultsFooter = ({ state, onClose }: ResultsFooterProps) => {
  const createSearchLink = useSearchLinkCreator();

  return (
    <Link to={`/search?q=${state.query}`} onClick={onClose}>
      <Translate
        id="theme.SearchBar.seeAll"
        values={{ count: state.context.nbHits }}
      >
        {"See all {count} results"}
      </Translate>
    </Link>
  );
};
