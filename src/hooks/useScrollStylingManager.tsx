import { useEffect, useLayoutEffect, useRef, useState } from "react";

const excludedRoutes = [
  // general-information
  "/general-information",
  "/general-information/overview",
  "/general-information/security-and-permission-types",
  "/general-information/how-to-start",
  "/general-information/get-an-api-key",
  "/general-information/how-to-create-an-rsa-key-pair",
  "/general-information/signing-a-request-using-rsa",
  "/general-information/signing-a-request-using-hmac-sha256",
  "/general-information/generating-signature-hmac-sha256",
  "/general-information/dates-and-times",
  "/general-information/errors",
  "/general-information/limits",
  // account
  "/account/",
  "/account/account-entity",
  // market-data
  "/market-data/",
  // dca-bot
  "/dca-bot/",
  "/dca-bot/dca-bot-entity",
  // deals
  "/dca-bot/deals/",
  "/dca-bot/deals/deal-entity",
  // grid-bot
  "/grid-bot/",
  "/grid-bot/grid-bot-entity",
  // smart-trade
  "/smart-trade/",
  "/smart-trade/smart-trade-entity",
  // trades
  "/smart-trade/trades/",
  "/smart-trade/trades/trade-entity",
];

const BREADCRUMBS_LAST_BREAKPOINT = 1200;

const useScrollStylingManager = () => {
  const containerInitialized = useRef<boolean>(false);

  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const endpoint = useRef<HTMLElement | null>(null);
  const breadcrumbs = useRef<HTMLElement | null>(null);
  const [isExcluded, setIsExcluded] = useState<boolean | null>(null);
  const [endpointEdge, setEndpointEdge] = useState<{
    edge: number;
    desktop: boolean;
  } | null>(null);

  useLayoutEffect(() => {
    const isExcludedRoute = excludedRoutes.includes(window.location.pathname);

    setIsExcluded(isExcludedRoute);

    const breadcrumbsEl = document.querySelector("#breadcrumbsContainer");
    const endpointEl = document.querySelector(".container_eK_a");
    const h1El = document.querySelector(".theme-doc-markdown header h1");

    if (endpointEl && !isExcludedRoute) {
      endpoint.current = endpointEl as HTMLElement;

      const rect = endpointEl.getBoundingClientRect();
      setEndpointEdge({
        edge: rect.top - 12, // 12 is the approximate bottom space of the headerContentContainer element
        desktop: window.innerWidth >= BREADCRUMBS_LAST_BREAKPOINT,
      });
    }

    breadcrumbs.current = breadcrumbsEl as HTMLElement;
    h1Ref.current = h1El as HTMLHeadingElement;

    const headerContentContainer = document.createElement("div");
    headerContentContainer.id = "headerContentContainer";
    document
      .querySelector(".theme-doc-markdown header")
      .appendChild(headerContentContainer);

    containerInitialized.current = true;
  }, []);

  useEffect(() => {
    if (
      !containerInitialized.current ||
      isExcluded === null ||
      breadcrumbs === null
    )
      return;

    const handleScroll = () => {
      let currentEdge = endpointEdge.edge;

      if (window.innerWidth >= 1200 && window.innerWidth < 1534) {
        currentEdge = currentEdge + 41;
      }

      const headerContent = document.querySelector("#headerContentContainer");

      if (
        endpointEdge !== null &&
        window.innerWidth >= BREADCRUMBS_LAST_BREAKPOINT !==
          endpointEdge?.desktop
      ) {
        const rect = endpoint.current.getBoundingClientRect();
        setEndpointEdge({
          edge: rect.top + window.scrollY, // here we need to add the scrollY because the rect.top is relative to the viewport
          desktop: window.innerWidth >= BREADCRUMBS_LAST_BREAKPOINT,
        });
      }

      if (
        (endpointEdge !== null && window.scrollY >= currentEdge) ||
        (isExcluded && window.scrollY >= 95)
      ) {
        let endpointPlaceholder = document.querySelector(
          "#endpointPlaceholder",
        ) as HTMLElement;
        let headingPlaceholder = document.querySelector(
          "#headingPlaceholder",
        ) as HTMLElement;

        if (
          !endpointPlaceholder &&
          endpoint &&
          !isExcluded &&
          window.innerWidth > 996
        ) {
          endpointPlaceholder = endpoint.current.cloneNode(true) as HTMLElement;
          endpointPlaceholder.id = "endpointPlaceholder";
          endpointPlaceholder.classList.add("scrolledClass");
          headerContent.appendChild(endpointPlaceholder);
        }

        if (!headingPlaceholder && h1Ref.current && window.innerWidth > 996) {
          headingPlaceholder = document.createElement("h1");
          headingPlaceholder.id = "headingPlaceholder";
          headingPlaceholder.textContent = h1Ref.current.textContent || "";

          if (isExcluded) {
            headingPlaceholder.classList.add("scrolledClassMain");
            headerContent.appendChild(headingPlaceholder);
          } else if (!isExcluded && window.innerWidth >= 1920) {
            headingPlaceholder.classList.add("scrolledClass");
            headerContent.appendChild(headingPlaceholder);
          }
        }

        if (breadcrumbs.current) {
          breadcrumbs.current.classList.add("scrolledClass");
        }
      } else {
        const endpointPlaceholder = document.querySelector(
          "#endpointPlaceholder",
        );
        const headingPlaceholder = document.querySelector(
          "#headingPlaceholder",
        );

        if (endpointPlaceholder) endpointPlaceholder.remove();
        if (headingPlaceholder) headingPlaceholder.remove();

        if (breadcrumbs.current)
          breadcrumbs.current.classList.remove("scrolledClass");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [endpointEdge, isExcluded]);
};

export default useScrollStylingManager;
