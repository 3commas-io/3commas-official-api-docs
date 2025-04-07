import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useCallback } from "react";
import {
  DocSearchTransformClient,
  DocSearchModalProps,
} from "@docsearch/react";

export const useTransformSearchClient =
  (): DocSearchModalProps["transformSearchClient"] => {
    const {
      siteMetadata: { docusaurusVersion },
    } = useDocusaurusContext();
    return useCallback(
      (searchClient: DocSearchTransformClient) => {
        searchClient.addAlgoliaAgent("docusaurus", docusaurusVersion);
        return searchClient;
      },
      [docusaurusVersion],
    );
  };
