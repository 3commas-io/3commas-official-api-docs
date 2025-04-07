import { useNavigator } from "@site/src/theme/SearchBar/hooks/useNavigator";
import { useSearchParameters } from "@site/src/theme/SearchBar/hooks/useSearchParameters";
import { useTransformSearchClient } from "@site/src/theme/SearchBar/hooks/useTransformSearchClient";
import { useCallback, useRef, useState } from "react";
import { DocSearchProps } from "@site/src/theme/SearchBar/types/types";
import { useResultsFooterComponent } from "@site/src/theme/SearchBar/hooks/useResultsFooterComponent";
import { DocSearchButton, useDocSearchKeyboardEvents } from "@docsearch/react";
import Head from "@docusaurus/Head";
import translations from "@theme/SearchTranslations";
import { useTransformItems } from "@site/src/theme/SearchBar/hooks/useTransformItems";
import { createPortal } from "react-dom";
import { Hit } from "@site/src/theme/SearchBar/Hit/Hit";
import type { DocSearchModal as DocSearchModalType } from "@docsearch/react";

let DocSearchModal: typeof DocSearchModalType | null = null;

const importDocSearchModalIfNeeded = () => {
  if (DocSearchModal) {
    return Promise.resolve();
  }
  return Promise.all([
    import("@docsearch/react/modal") as Promise<
      typeof import("@docsearch/react")
    >,
    import("@docsearch/react/style"),
    import("../styles.css"),
  ]).then(([{ DocSearchModal: Modal }]) => {
    DocSearchModal = Modal;
  });
};
export const DocSearch = ({ externalUrlRegex, ...props }: DocSearchProps) => {
  const navigator = useNavigator({ externalUrlRegex });
  const searchParameters = useSearchParameters({ ...props });
  const transformItems = useTransformItems(props);
  const transformSearchClient = useTransformSearchClient();

  const searchContainer = useRef<HTMLDivElement | null>(null);
  // TODO remove "as any" after React 19 upgrade
  const searchButtonRef = useRef<HTMLButtonElement>(null as any);
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState<string | undefined>(
    undefined,
  );

  const prepareSearchContainer = useCallback(() => {
    if (!searchContainer.current) {
      const divElement = document.createElement("div");
      searchContainer.current = divElement;
      document.body.insertBefore(divElement, document.body.firstChild);
    }
  }, []);

  const openModal = useCallback(() => {
    prepareSearchContainer();
    importDocSearchModalIfNeeded().then(() => setIsOpen(true));
  }, [prepareSearchContainer]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    searchButtonRef.current?.focus();
    setInitialQuery(undefined);
  }, []);

  const handleInput = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "f" && (event.metaKey || event.ctrlKey)) {
        // ignore browser's ctrl+f
        return;
      }
      // prevents duplicate key insertion in the modal input
      event.preventDefault();
      setInitialQuery(event.key);
      openModal();
    },
    [openModal],
  );

  const resultsFooterComponent = useResultsFooterComponent({ closeModal });

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen: openModal,
    onClose: closeModal,
    onInput: handleInput,
    searchButtonRef,
  });
  const shouldRenderModal = isOpen && DocSearchModal && searchContainer.current;

  return (
    <>
      <Head>
        {/* This hints the browser that the website will load data from Algolia,
        and allows it to preconnect to the DocSearch cluster. It makes the first
        query faster, especially on mobile. */}
        <link
          rel="preconnect"
          href={`https://${props.appId}-dsn.algolia.net`}
          crossOrigin="anonymous"
        />
      </Head>

      <DocSearchButton
        onTouchStart={importDocSearchModalIfNeeded}
        onFocus={importDocSearchModalIfNeeded}
        onMouseOver={importDocSearchModalIfNeeded}
        onClick={openModal}
        ref={searchButtonRef}
        translations={props.translations?.button ?? translations.button}
      />
      {shouldRenderModal
        ? createPortal(
            <DocSearchModal
              onClose={closeModal}
              initialScrollY={window.scrollY}
              initialQuery={initialQuery}
              navigator={navigator}
              transformItems={transformItems}
              hitComponent={Hit}
              transformSearchClient={transformSearchClient}
              {...(props.searchPagePath && {
                resultsFooterComponent,
              })}
              placeholder={translations.placeholder}
              {...props}
              translations={props.translations?.modal ?? translations.modal}
              searchParameters={searchParameters}
            />,
            searchContainer.current,
          )
        : null}
    </>
  );
};
