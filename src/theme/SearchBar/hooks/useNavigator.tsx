import { DocSearchProps } from "@site/src/theme/SearchBar/types/types";
import { useHistory } from "@docusaurus/router";
import { useState } from "react";
import { DocSearchModalProps } from "@docsearch/react";
import { isRegexpStringMatch } from "@docusaurus/theme-common";

export const useNavigator = ({
  externalUrlRegex,
}: Pick<DocSearchProps, "externalUrlRegex">) => {
  const history = useHistory();
  const [navigator] = useState<DocSearchModalProps["navigator"]>(() => {
    return {
      navigate(params) {
        // Algolia results could contain URL's from other domains which cannot
        // be served through history and should navigate with window.location
        if (isRegexpStringMatch(externalUrlRegex, params.itemUrl)) {
          window.location.href = params.itemUrl;
        } else {
          history.push(params.itemUrl);
        }
      },
    };
  });
  return navigator;
};
