import { ReactNode, useEffect, useReducer, useRef, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  useAlgoliaThemeConfig,
  useSearchResultUrlProcessor,
} from "@docusaurus/theme-search-algolia/client";
import { useEvent, useSearchQueryString } from "@docusaurus/theme-common";
import useHideUI from "@site/src/theme/SearchPage/hooks/useHideUI";
import { liteClient } from "algoliasearch/lite";
import algoliaSearchHelper from "algoliasearch-helper";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { useTitleFormatter } from "@docusaurus/theme-common/internal";
import Heading from "@theme/Heading";
import styles from "@site/src/theme/SearchPage/styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import {
  ResultDispatcher,
  ResultDispatcherState,
} from "@site/src/theme/SearchPage/types/types";
import { useDocumentsFoundPlural } from "@site/src/theme/SearchPage/hooks/useDocumentsFoundPlural";
import { useDocsSearchVersionsHelpers } from "@site/src/theme/SearchPage/hooks/useDocsSearchVersionsHelpers";
import { SearchVersionSelectList } from "@site/src/theme/SearchPage/SearchVersionSelectList/SearchVersionSelectList";

export const SearchPageContent = (): ReactNode => {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  const {
    algolia: { appId, apiKey, indexName, contextualSearch },
  } = useAlgoliaThemeConfig();

  const processSearchResultUrl = useSearchResultUrlProcessor();
  const documentsFoundPlural = useDocumentsFoundPlural();

  const docsSearchVersionsHelpers = useDocsSearchVersionsHelpers();
  const [searchQuery, setSearchQuery] = useSearchQueryString();
  const initialSearchResultState: ResultDispatcherState = {
    items: [],
    query: null,
    totalResults: null,
    totalPages: null,
    lastPage: null,
    hasMore: null,
    loading: null,
  };
  const [searchResultState, searchResultStateDispatcher] = useReducer(
    (prevState: ResultDispatcherState, data: ResultDispatcher) => {
      switch (data.type) {
        case "reset": {
          return initialSearchResultState;
        }
        case "loading": {
          return { ...prevState, loading: true };
        }
        case "update": {
          if (searchQuery !== data.value.query) {
            return prevState;
          }

          return {
            ...data.value,
            items:
              data.value.lastPage === 0
                ? data.value.items
                : prevState.items.concat(data.value.items),
          };
        }
        case "advance": {
          const hasMore = prevState.totalPages! > prevState.lastPage! + 1;

          return {
            ...prevState,
            lastPage: hasMore ? prevState.lastPage! + 1 : prevState.lastPage,
            hasMore,
          };
        }
        default:
          return prevState;
      }
    },
    initialSearchResultState,
  );
  useHideUI([
    "#breadcrumbsArea",
    ".pagination_zBJ0",
    ".theme-doc-markdown header h1",
  ]);
  // respect settings from the theme config for facets
  const disjunctiveFacets = contextualSearch
    ? ["language", "docusaurus_tag"]
    : [];

  const algoliaClient = liteClient(appId, apiKey);
  const algoliaHelper = algoliaSearchHelper(algoliaClient, indexName, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: why errors happens after upgrading to TS 5.5 ?
    hitsPerPage: 15,
    advancedSyntax: true,
    disjunctiveFacets,
  });

  algoliaHelper.on(
    "result",
    ({ results: { query, hits, page, nbHits, nbPages } }) => {
      if (query === "" || !Array.isArray(hits)) {
        searchResultStateDispatcher({ type: "reset" });
        return;
      }

      const sanitizeValue = (value: string) =>
        value.replace(
          /algolia-docsearch-suggestion--highlight/g,
          "search-result-match",
        );

      const items = hits.map(
        ({
          url,
          _highlightResult: { hierarchy },
          _snippetResult: snippet = {},
        }: {
          url: string;
          _highlightResult: { hierarchy: { [key: string]: { value: string } } };
          _snippetResult: { content?: { value: string } };
        }) => {
          const titles = Object.keys(hierarchy).map((key) =>
            sanitizeValue(hierarchy[key]!.value),
          );
          return {
            title: titles.pop()!,
            url: processSearchResultUrl(url),
            summary: snippet.content
              ? `${sanitizeValue(snippet.content.value)}...`
              : "",
            breadcrumbs: titles,
          };
        },
      );

      searchResultStateDispatcher({
        type: "update",
        value: {
          items,
          query,
          totalResults: nbHits,
          totalPages: nbPages,
          lastPage: page,
          hasMore: nbPages > page + 1,
          loading: false,
        },
      });
    },
  );

  const [loaderRef, setLoaderRef] = useState<HTMLDivElement | null>(null);
  const prevY = useRef(0);
  const observer = useRef(
    ExecutionEnvironment.canUseIntersectionObserver &&
      new IntersectionObserver(
        (entries) => {
          const {
            isIntersecting,
            boundingClientRect: { y: currentY },
          } = entries[0]!;

          if (isIntersecting && prevY.current > currentY) {
            searchResultStateDispatcher({ type: "advance" });
          }

          prevY.current = currentY;
        },
        { threshold: 1 },
      ),
  );

  const getTitle = () =>
    searchQuery
      ? translate(
          {
            id: "theme.SearchPage.existingResultsTitle",
            message: 'Search results for "{query}"',
            description: "The search page title for non-empty query",
          },
          {
            query: searchQuery,
          },
        )
      : translate({
          id: "theme.SearchPage.emptyResultsTitle",
          message: "Search the documentation",
          description: "The search page title for empty query",
        });

  const makeSearch = useEvent((page: number = 0) => {
    if (contextualSearch) {
      algoliaHelper.addDisjunctiveFacetRefinement("docusaurus_tag", "default");
      algoliaHelper.addDisjunctiveFacetRefinement("language", currentLocale);

      Object.entries(docsSearchVersionsHelpers.searchVersions).forEach(
        ([pluginId, searchVersion]) => {
          algoliaHelper.addDisjunctiveFacetRefinement(
            "docusaurus_tag",
            `docs-${pluginId}-${searchVersion}`,
          );
        },
      );
    }

    algoliaHelper.setQuery(searchQuery).setPage(page).search();
  });

  useEffect(() => {
    if (!loaderRef) {
      return undefined;
    }
    const currentObserver = observer.current;
    if (currentObserver) {
      currentObserver.observe(loaderRef);
      return () => currentObserver.unobserve(loaderRef);
    }
    return () => true;
  }, [loaderRef]);

  useEffect(() => {
    searchResultStateDispatcher({ type: "reset" });

    if (searchQuery) {
      searchResultStateDispatcher({ type: "loading" });

      setTimeout(() => {
        makeSearch();
      }, 300);
    }
  }, [searchQuery, docsSearchVersionsHelpers.searchVersions, makeSearch]);

  useEffect(() => {
    if (!searchResultState.lastPage || searchResultState.lastPage === 0) {
      return;
    }

    makeSearch(searchResultState.lastPage);
  }, [makeSearch, searchResultState.lastPage]);

  const handleArticleClick = (
    e: React.MouseEvent<HTMLElement>,
    url: string,
  ): void => {
    if ((e.target as HTMLElement).tagName.toLowerCase() === "a") {
      return;
    }
    window.location.href = url;
  };
  const noResults =
    !searchResultState.items.length &&
    !searchResultState.loading &&
    searchQuery;
  return (
    <Layout>
      <Head>
        <title>{useTitleFormatter(getTitle())}</title>
        {/*
         We should not index search pages
          See https://github.com/facebook/docusaurus/pull/3233
        */}
        <meta property="robots" content="noindex, follow" />
      </Head>

      <div
        className={`container margin-vert--lg ${styles.searchPageContainer}`}
        id={"searchPageContainer"}
      >
        <Heading as="h1" className={styles.searchPageTitle}>
          {getTitle()}
        </Heading>

        <form
          className={clsx("row", styles.inputContainer)}
          onSubmit={(e) => e.preventDefault()}
        >
          <div
            className={clsx("col", styles.searchQueryColumn, {
              "col--9": docsSearchVersionsHelpers.versioningEnabled,
              "col--12": !docsSearchVersionsHelpers.versioningEnabled,
            })}
          >
            <input
              type="search"
              name="q"
              className={styles.searchQueryInput}
              placeholder={translate({
                id: "theme.SearchPage.inputPlaceholder",
                message: "Type your search here",
                description: "The placeholder for search page input",
              })}
              aria-label={translate({
                id: "theme.SearchPage.inputLabel",
                message: "Search",
                description: "The ARIA label for search page input",
              })}
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              autoComplete="off"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className={styles.clearButton}
              ></button>
            )}
          </div>

          {contextualSearch && docsSearchVersionsHelpers.versioningEnabled && (
            <SearchVersionSelectList
              docsSearchVersionsHelpers={docsSearchVersionsHelpers}
            />
          )}
        </form>

        <div className={clsx("row", styles.searchResultContainer)}>
          <div className={clsx("col", "col--8", styles.searchResultsColumn)}>
            {!!searchResultState.totalResults &&
              documentsFoundPlural(searchResultState.totalResults)}
            {!!noResults && (
              <div className={styles.noResultsContainer}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_711_5166"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="2"
                    y="2"
                    width="16"
                    height="16"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C10.7073 15.8333 12.1258 15.3108 13.2547 14.4332L15.6607 16.8393C15.9862 17.1647 16.5138 17.1647 16.8393 16.8393C17.1647 16.5138 17.1647 15.9862 16.8393 15.6607L14.4332 13.2547C15.3108 12.1258 15.8333 10.7073 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5ZM4.16667 9.16667C4.16667 6.40524 6.40524 4.16667 9.16667 4.16667C11.9281 4.16667 14.1667 6.40524 14.1667 9.16667C14.1667 11.9281 11.9281 14.1667 9.16667 14.1667C6.40524 14.1667 4.16667 11.9281 4.16667 9.16667Z"
                      fill="#19191A"
                    />
                  </mask>
                  <g mask="url(#mask0_711_5166)">
                    <rect width="20" height="20" fill="#E7596A" />
                  </g>
                  <mask
                    id="mask1_711_5166"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="6"
                    y="6"
                    width="6"
                    height="6"
                  >
                    <path
                      d="M7.49709 7.14418C7.39946 7.04655 7.24117 7.04655 7.14354 7.14418C7.0459 7.24181 7.0459 7.4001 7.14354 7.49773L8.64614 9.00033L7.14354 10.5029C7.04591 10.6006 7.04591 10.7589 7.14354 10.8565C7.24117 10.9541 7.39946 10.9541 7.49709 10.8565L8.99969 9.35389L10.5023 10.8565C10.5999 10.9541 10.7582 10.9541 10.8558 10.8565C10.9535 10.7589 10.9535 10.6006 10.8558 10.5029L9.35324 9.00033L10.8558 7.49773C10.9535 7.4001 10.9535 7.24181 10.8558 7.14418C10.7582 7.04655 10.5999 7.04655 10.5023 7.14418L8.99969 8.64678L7.49709 7.14418Z"
                      fill="black"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </mask>
                  <g mask="url(#mask1_711_5166)">
                    <rect x="6" y="6" width="6" height="6" fill="#E7596A" />
                  </g>
                </svg>

                <p key="no-results">
                  <Translate
                    id="theme.SearchPage.noResultsText"
                    description="The paragraph for empty search result"
                  >
                    No results found
                  </Translate>
                </p>
              </div>
            )}
          </div>

          <div
            className={clsx(
              "col",
              "col--4",
              "text--right",
              styles.searchLogoColumn,
            )}
          >
            <Link
              to="https://www.algolia.com/"
              aria-label={translate({
                id: "theme.SearchPage.algoliaLabel",
                message: "Search by Algolia",
                description: "The ARIA label for Algolia mention",
              })}
            >
              <svg
                width="115"
                height="12"
                viewBox="0 0 115 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.03418 8.08105C5.03418 8.50423 4.92839 8.86719 4.7168 9.16992C4.50846 9.4694 4.21387 9.69889 3.83301 9.8584C3.45215 10.0179 2.99967 10.0977 2.47559 10.0977C2.21191 10.0977 1.95964 10.083 1.71875 10.0537C1.48112 10.0277 1.25977 9.98861 1.05469 9.93652C0.849609 9.88444 0.664062 9.81934 0.498047 9.74121V8.79395C0.768229 8.90462 1.08073 9.00879 1.43555 9.10645C1.79036 9.20085 2.15658 9.24805 2.53418 9.24805C2.86296 9.24805 3.13802 9.2041 3.35938 9.11621C3.58398 9.02507 3.75326 8.89811 3.86719 8.73535C3.98112 8.57259 4.03809 8.37728 4.03809 8.14941C4.03809 7.92155 3.98275 7.73112 3.87207 7.57812C3.76139 7.42188 3.58561 7.27865 3.34473 7.14844C3.1071 7.01823 2.7946 6.87988 2.40723 6.7334C2.13704 6.63574 1.89128 6.52507 1.66992 6.40137C1.44857 6.27441 1.25651 6.12956 1.09375 5.9668C0.934245 5.80404 0.810547 5.61361 0.722656 5.39551C0.634766 5.17415 0.59082 4.92025 0.59082 4.63379C0.59082 4.23991 0.686849 3.90299 0.878906 3.62305C1.07422 3.3431 1.34603 3.12988 1.69434 2.9834C2.04264 2.83366 2.44629 2.75879 2.90527 2.75879C3.28288 2.75879 3.63444 2.79622 3.95996 2.87109C4.28874 2.94596 4.60124 3.0485 4.89746 3.17871L4.58008 4.00879C4.30339 3.89486 4.02507 3.80208 3.74512 3.73047C3.46517 3.65885 3.17546 3.62305 2.87598 3.62305C2.59928 3.62305 2.36491 3.66374 2.17285 3.74512C1.98405 3.8265 1.83919 3.94206 1.73828 4.0918C1.64062 4.24154 1.5918 4.41895 1.5918 4.62402C1.5918 4.85514 1.64388 5.0472 1.74805 5.2002C1.85221 5.35319 2.0166 5.49154 2.24121 5.61523C2.46582 5.73893 2.75879 5.87077 3.12012 6.01074C3.52702 6.16699 3.87207 6.33301 4.15527 6.50879C4.44173 6.68457 4.65983 6.89616 4.80957 7.14355C4.95931 7.39095 5.03418 7.70345 5.03418 8.08105ZM10.8541 10H6.84531V2.86133H10.8541V3.7207H7.84629V5.84473H10.6734V6.69434H7.84629V9.13574H10.8541V10ZM17.2648 10L16.4738 7.87598H13.676L12.8947 10H11.8547L14.5793 2.83203H15.6047L18.3146 10H17.2648ZM16.1955 7.00684L15.4436 4.90234C15.4208 4.83073 15.385 4.72331 15.3361 4.58008C15.2906 4.43685 15.2434 4.28874 15.1945 4.13574C15.149 3.98275 15.1115 3.85579 15.0822 3.75488C15.0497 3.88835 15.0122 4.02995 14.9699 4.17969C14.9276 4.32617 14.8853 4.46452 14.843 4.59473C14.8039 4.72168 14.7714 4.82422 14.7453 4.90234L13.9836 7.00684H16.1955ZM21.6541 2.86133C22.2563 2.86133 22.7527 2.9362 23.1434 3.08594C23.5372 3.23242 23.8302 3.45703 24.0223 3.75977C24.2143 4.05924 24.3104 4.4401 24.3104 4.90234C24.3104 5.26693 24.2436 5.57454 24.1102 5.8252C23.9767 6.07585 23.8009 6.28092 23.5828 6.44043C23.368 6.59993 23.1368 6.72526 22.8895 6.81641L24.8865 10H23.7391L22.0008 7.08008H20.6873V10H19.6863V2.86133H21.6541ZM21.5906 3.71094H20.6873V6.24512H21.659C22.2221 6.24512 22.6339 6.13607 22.8943 5.91797C23.1548 5.69661 23.285 5.37109 23.285 4.94141C23.285 4.49544 23.1466 4.17969 22.8699 3.99414C22.5932 3.80534 22.1668 3.71094 21.5906 3.71094ZM29.4125 3.62305C29.0447 3.62305 28.7143 3.68815 28.4213 3.81836C28.1316 3.94531 27.8858 4.13249 27.684 4.37988C27.4822 4.62402 27.3275 4.91862 27.2201 5.26367C27.1127 5.60872 27.059 5.99772 27.059 6.43066C27.059 7.00684 27.1436 7.50488 27.3129 7.9248C27.4854 8.34473 27.7442 8.66862 28.0893 8.89648C28.4343 9.12435 28.8689 9.23828 29.393 9.23828C29.7055 9.23828 30.0033 9.21061 30.2865 9.15527C30.573 9.09668 30.8578 9.02181 31.141 8.93066V9.79004C30.8676 9.89421 30.5844 9.9707 30.2914 10.0195C30.0017 10.0716 29.6615 10.0977 29.2709 10.0977C28.5417 10.0977 27.9346 9.94629 27.4496 9.64355C26.9678 9.34082 26.6081 8.91602 26.3705 8.36914C26.1329 7.81901 26.0141 7.17122 26.0141 6.42578C26.0141 5.88542 26.0889 5.39225 26.2387 4.94629C26.3884 4.49707 26.6081 4.1097 26.8979 3.78418C27.1876 3.4554 27.5424 3.20312 27.9623 3.02734C28.3855 2.84831 28.8721 2.75879 29.4223 2.75879C29.7803 2.75879 30.1286 2.79785 30.4672 2.87598C30.809 2.95085 31.1231 3.05664 31.4096 3.19336L31.0385 4.02832C30.8008 3.9209 30.5453 3.8265 30.2719 3.74512C30.0017 3.66374 29.7152 3.62305 29.4125 3.62305ZM38.6064 10H37.6055V6.7041H34.085V10H33.084V2.86133H34.085V5.83984H37.6055V2.86133H38.6064V10ZM43.923 2.86133H45.9934C46.9016 2.86133 47.5852 2.99479 48.0441 3.26172C48.5031 3.52865 48.7326 3.986 48.7326 4.63379C48.7326 4.91048 48.6822 5.15788 48.5812 5.37598C48.4803 5.59408 48.3339 5.77474 48.1418 5.91797C47.9497 6.0612 47.7137 6.15885 47.4338 6.21094V6.25977C47.7268 6.30859 47.9872 6.39648 48.215 6.52344C48.4429 6.65039 48.6219 6.83105 48.7521 7.06543C48.8856 7.29655 48.9523 7.5944 48.9523 7.95898C48.9523 8.39518 48.8498 8.76628 48.6447 9.07227C48.4396 9.375 48.1483 9.60612 47.7707 9.76562C47.3964 9.92188 46.9504 10 46.4328 10H43.923V2.86133ZM44.924 5.86426H46.1691C46.7453 5.86426 47.1441 5.76986 47.3654 5.58105C47.5868 5.39225 47.6975 5.11719 47.6975 4.75586C47.6975 4.38151 47.5656 4.11296 47.302 3.9502C47.0383 3.78418 46.62 3.70117 46.0471 3.70117H44.924V5.86426ZM44.924 6.68945V9.15527H46.2863C46.8755 9.15527 47.2906 9.03971 47.5314 8.80859C47.7756 8.57747 47.8977 8.2666 47.8977 7.87598C47.8977 7.62858 47.8423 7.41699 47.7316 7.24121C47.6242 7.06217 47.4484 6.92546 47.2043 6.83105C46.9602 6.73665 46.6314 6.68945 46.218 6.68945H44.924ZM52.7703 6.2793L54.5672 2.86133H55.6414L53.2684 7.22656V10H52.2674V7.27051L49.8895 2.86133H50.9832L52.7703 6.2793Z"
                  fill="#B4C2CE"
                />
                <g clipPath="url(#clip0_711_4722)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M89.3688 6.6072V0.14184C89.3688 0.0547204 89.2951 -0.0115196 89.2136 0.00192038L88.0648 0.19248C87.9994 0.20328 87.9512 0.2628 87.9512 0.33264L87.955 6.88992C87.955 7.2 87.955 9.11472 90.14 9.18168C90.2158 9.18408 90.2786 9.11976 90.2786 9.03984V8.06112C90.2786 7.99008 90.2287 7.92888 90.162 7.92096C89.3686 7.82472 89.3686 6.77928 89.3686 6.60768L89.3688 6.6072Z"
                    fill="#B4C2CE"
                  />
                  <path
                    d="M108.315 2.51355H107.159C107.085 2.51355 107.024 2.57695 107.024 2.65515V9.04155C107.024 9.11975 107.085 9.18315 107.159 9.18315H108.315C108.389 9.18315 108.449 9.11975 108.449 9.04155V2.65515C108.449 2.57695 108.389 2.51355 108.315 2.51355Z"
                    fill="#B4C2CE"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M107.159 1.71311H108.315C108.389 1.71311 108.449 1.64975 108.449 1.57151V0.141591C108.449 0.0547113 108.375 -0.0117687 108.294 0.00167126L107.138 0.192471C107.073 0.203271 107.024 0.262551 107.024 0.332391V1.57127C107.024 1.64951 107.085 1.71287 107.159 1.71287L107.159 1.71311Z"
                    fill="#B4C2CE"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M105.161 6.6072V0.14184C105.161 0.0547204 105.087 -0.0115196 105.006 0.00192038L103.857 0.19248C103.791 0.20328 103.743 0.2628 103.743 0.33264L103.747 6.88992C103.747 7.2 103.747 9.11472 105.932 9.18168C106.008 9.18408 106.071 9.11976 106.071 9.03984V8.06112C106.071 7.99008 106.021 7.92888 105.954 7.92096C105.161 7.82472 105.161 6.77928 105.161 6.60768L105.161 6.6072Z"
                    fill="#B4C2CE"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M102.154 3.4253C101.9 3.1313 101.589 2.9057 101.225 2.74586C100.863 2.58914 100.468 2.50946 100.04 2.50946C99.6124 2.50946 99.2169 2.58554 98.8579 2.74586C98.503 2.9057 98.1911 3.13106 97.9299 3.4253C97.6688 3.71882 97.466 4.07018 97.3207 4.48202C97.1755 4.8941 97.1104 5.3789 97.1104 5.88266C97.1104 6.38642 97.183 6.76754 97.3278 7.1837C97.473 7.59938 97.6725 7.95434 97.9299 8.24834C98.187 8.54186 98.4952 8.76722 98.8543 8.93138C99.2133 9.0953 99.7677 9.1793 100.047 9.1829C100.326 9.1829 100.885 9.09122 101.247 8.93138C101.609 8.77106 101.918 8.54186 102.175 8.24834C102.432 7.95434 102.632 7.59938 102.773 7.1837C102.915 6.76754 102.983 6.38642 102.983 5.88266C102.983 5.3789 102.907 4.8941 102.755 4.48202C102.61 4.06994 102.41 3.71882 102.153 3.4253H102.154ZM101.142 7.3553C100.881 7.7333 100.515 7.9241 100.047 7.9241C99.5796 7.9241 99.2135 7.7369 98.9524 7.3553C98.6913 6.9773 98.5606 6.53906 98.5606 5.8865C98.5606 5.24114 98.6878 4.70714 98.949 4.32962C99.2097 3.95162 99.576 3.76514 100.043 3.76514C100.511 3.76514 100.877 3.95186 101.138 4.32962C101.399 4.7033 101.533 5.24114 101.533 5.8865C101.533 6.53906 101.403 6.9737 101.142 7.3553H101.142Z"
                    fill="#B4C2CE"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M85.3628 2.51355H84.2397C83.1387 2.51355 82.17 3.12507 81.6045 4.05195C81.2739 4.59387 81.0811 5.24307 81.0811 5.94147C81.0811 7.01883 81.5393 7.97955 82.2556 8.60787C82.3223 8.67027 82.3933 8.72739 82.4675 8.77923C82.7603 8.98299 83.1075 9.10251 83.4811 9.10251C83.5091 9.10251 83.5371 9.10179 83.5649 9.10035C83.5731 9.09987 83.5811 9.09915 83.5893 9.09867C83.6091 9.09747 83.6291 9.09603 83.6489 9.09387C83.6566 9.09315 83.6644 9.09195 83.6721 9.09099C83.6928 9.08859 83.7136 9.08595 83.7343 9.08283C83.7391 9.08211 83.7438 9.08115 83.7486 9.08043C84.4974 8.95875 85.1501 8.34075 85.3628 7.57299V8.96091C85.3628 9.03915 85.4229 9.10251 85.4971 9.10251H86.645C86.7192 9.10251 86.7793 9.03915 86.7793 8.96091V2.65515C86.7793 2.57691 86.7192 2.51355 86.645 2.51355H85.3628ZM85.3628 7.47963C85.085 7.72347 84.726 7.81515 84.3419 7.84251C84.3383 7.84275 84.3344 7.84323 84.3308 7.84347C84.3053 7.84515 84.2798 7.84587 84.2543 7.84587C83.2926 7.84587 82.4985 6.98451 82.4985 5.94099C82.4985 5.69499 82.5431 5.46075 82.6219 5.24547C82.8773 4.54659 83.5046 4.05171 84.2397 4.05171H85.3628V7.47963Z"
                    fill="#B4C2CE"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M113.583 2.51355H112.46C111.359 2.51355 110.391 3.12507 109.825 4.05195C109.495 4.59387 109.302 5.24307 109.302 5.94147C109.302 7.01883 109.76 7.97955 110.476 8.60787C110.543 8.67027 110.614 8.72739 110.688 8.77923C110.981 8.98299 111.328 9.10251 111.702 9.10251C111.73 9.10251 111.758 9.10179 111.786 9.10035C111.794 9.09987 111.802 9.09915 111.81 9.09867C111.83 9.09747 111.85 9.09603 111.87 9.09387C111.877 9.09315 111.885 9.09195 111.893 9.09099C111.914 9.08859 111.934 9.08595 111.955 9.08283C111.96 9.08211 111.965 9.08115 111.969 9.08043C112.718 8.95875 113.371 8.34075 113.583 7.57299V8.96091C113.583 9.03915 113.644 9.10251 113.718 9.10251H114.866C114.94 9.10251 115 9.03915 115 8.96091V2.65515C115 2.57691 114.94 2.51355 114.866 2.51355H113.583ZM113.583 7.47963C113.306 7.72347 112.947 7.81515 112.563 7.84251C112.559 7.84275 112.555 7.84323 112.551 7.84347C112.526 7.84515 112.5 7.84587 112.475 7.84587C111.513 7.84587 110.719 6.98451 110.719 5.94099C110.719 5.69499 110.764 5.46075 110.843 5.24547C111.098 4.54659 111.725 4.05171 112.46 4.05171H113.583V7.47963Z"
                    fill="#B4C2CE"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M94.9165 2.51355H93.7934C92.6924 2.51355 91.7237 3.12507 91.1582 4.05195C90.8898 4.49211 90.7119 5.00331 90.6548 5.55411C90.6416 5.68131 90.6348 5.81043 90.6348 5.94147C90.6348 6.07251 90.6418 6.20907 90.6559 6.33963C90.7534 7.25379 91.1828 8.05827 91.8093 8.60811C91.876 8.67051 91.947 8.72763 92.0213 8.77947C92.314 8.98323 92.6612 9.10275 93.0348 9.10275C93.4444 9.10275 93.8228 8.96043 94.1313 8.71947C94.5021 8.44155 94.7888 8.03451 94.9163 7.57347V8.77971H94.9137V9.04563C94.9137 9.56979 94.7838 9.96411 94.519 10.2303C94.2547 10.4962 93.8123 10.6294 93.1928 10.6294C92.9397 10.6294 92.5374 10.6152 92.1319 10.5715C92.0675 10.5646 92.0076 10.6075 91.9892 10.6728L91.6982 11.7075C91.675 11.7905 91.7271 11.8759 91.8082 11.8882C92.2981 11.9621 92.7762 12.0005 93.0524 12.0005C94.1659 12.0005 94.9912 11.7425 95.5314 11.2275C96.0204 10.7616 96.2861 10.0541 96.3328 9.10299V2.65515C96.3328 2.57691 96.2727 2.51355 96.1985 2.51355H94.9163H94.9165ZM94.9165 4.05195C94.9165 4.05195 94.9313 7.39107 94.9165 7.49259C94.6415 7.72707 94.2993 7.81875 93.9264 7.84539C93.9227 7.84563 93.9188 7.84611 93.9152 7.84635C93.8897 7.84803 93.8642 7.84875 93.8387 7.84875C93.8087 7.84875 93.7788 7.84803 93.749 7.84635C92.829 7.79571 92.0524 6.95211 92.0524 5.94123C92.0524 5.69523 92.0971 5.46099 92.1758 5.24571C92.4313 4.54683 93.0585 4.05195 93.7936 4.05195H94.9167H94.9165Z"
                    fill="#B4C2CE"
                  />
                  <path
                    d="M70.6877 0C67.5794 0 65.0455 2.64216 65.0006 5.90784C64.9551 9.2244 67.5077 11.9726 70.6542 11.9918C71.6259 11.9978 72.5618 11.7473 73.3931 11.2711C73.4741 11.2248 73.4866 11.1072 73.4176 11.0429L72.8854 10.5456C72.7772 10.4446 72.6233 10.416 72.4901 10.4755C71.91 10.7357 71.2796 10.8686 70.6299 10.8602C68.0873 10.8274 66.0331 8.59728 66.0736 5.9172C66.1137 3.27096 68.1681 1.13136 70.6877 1.13136H75.3023V9.77784L72.6841 7.32552C72.5994 7.24608 72.4696 7.26168 72.4013 7.35696C71.9811 7.94352 71.2965 8.30832 70.5361 8.25312C69.4813 8.17632 68.6266 7.28112 68.5476 6.16968C68.4532 4.84392 69.4499 3.7332 70.6877 3.7332C71.8074 3.7332 72.7294 4.6416 72.8257 5.796C72.8344 5.89872 72.8783 5.99448 72.9514 6.06288L73.6332 6.70008C73.7106 6.77232 73.8334 6.72816 73.8525 6.62088C73.9017 6.34368 73.919 6.05496 73.8996 5.7588C73.7899 4.07064 72.4926 2.71248 70.8905 2.60856C69.0537 2.48928 67.5181 4.00392 67.4694 5.90256C67.4218 7.75296 68.86 9.348 70.6155 9.3888C71.3484 9.40584 72.0277 9.16296 72.5766 8.742L75.9975 11.9388C76.1442 12.0758 76.3757 11.9662 76.3757 11.7595V0.22752C76.3755 0.102 76.2789 0 76.1596 0H70.6877Z"
                    fill="#B4C2CE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_711_4722">
                    <rect
                      width="50"
                      height="12"
                      fill="white"
                      transform="translate(65)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>

        {searchResultState.items.length > 0 ? (
          <main>
            {searchResultState.items.map(
              ({ title, url, summary, breadcrumbs }, i) => (
                <Link to={url} key={i}>
                  <article className={styles.searchResultItem}>
                    <Heading as="h2" className={styles.searchResultItemHeading}>
                      <Link
                        to={url}
                        dangerouslySetInnerHTML={{ __html: title }}
                      />
                    </Heading>

                    {breadcrumbs.length > 0 && (
                      <nav aria-label="breadcrumbs">
                        <ul
                          className={clsx(
                            "breadcrumbs",
                            styles.searchResultItemPath,
                          )}
                        >
                          {breadcrumbs.map((html, index) => (
                            <li
                              key={index}
                              className="breadcrumbs__item"
                              // Developer provided the HTML, so assume it's safe.
                              // eslint-disable-next-line react/no-danger
                              dangerouslySetInnerHTML={{ __html: html }}
                            />
                          ))}
                        </ul>
                      </nav>
                    )}

                    {summary && (
                      <p
                        className={styles.searchResultItemSummary}
                        // Developer provided the HTML, so assume it's safe.
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: summary }}
                      />
                    )}
                  </article>
                </Link>
              ),
            )}
          </main>
        ) : (
          [
            !!searchResultState.loading && (
              <div key="spinner" className={styles.loadingSpinner} />
            ),
          ]
        )}

        {searchResultState.hasMore && (
          <div className={styles.loader} ref={setLoaderRef}>
            <Translate
              id="theme.SearchPage.fetchingNewResults"
              description="The paragraph for fetching new search results"
            >
              Fetching new results...
            </Translate>
          </div>
        )}
      </div>
    </Layout>
  );
};
