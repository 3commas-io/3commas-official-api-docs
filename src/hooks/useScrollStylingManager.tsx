import { useEffect, useRef, useState } from "react";

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

const BREADCRUMBS_LAST_BREAKPOINT = 1534; // you can verify this breakpoint here: src/theme/DocItem/Layout/styles.module.css

const useScrollStylingManager = () => {
  const containerInitialized = useRef<boolean>(false);

  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const endpoint = useRef<HTMLElement | null>(null);
  const [endpointEdge, setEndpointEdge] = useState<{
    edge: number;
    desktop: boolean;
  } | null>(null);

  useEffect(() => {
    const endpointEl = document.querySelector(".container_eK_a");
    const h1El = document.querySelector(".theme-doc-markdown header h1");

    if (endpointEl) {
      endpoint.current = endpointEl as HTMLElement;

      const rect = endpointEl.getBoundingClientRect();
      setEndpointEdge({
        edge: rect.top - 12, // 12 is the approximate bottom space of the headerContentContainer element
        desktop: window.innerWidth >= BREADCRUMBS_LAST_BREAKPOINT,
      });
    }

    h1Ref.current = h1El as HTMLHeadingElement;

    const headerContentContainer = document.createElement("div");
    headerContentContainer.id = "headerContentContainer";
    document
      .querySelector(".theme-doc-markdown header")
      .appendChild(headerContentContainer);

    containerInitialized.current = true;
  }, []);

  useEffect(() => {
    if (!containerInitialized.current || endpointEdge === null) return;

    const handleScroll = () => {
      const isExcluded = excludedRoutes.includes(window.location.pathname);

      const breadcrumbs = document.querySelector(".breadcrumbsContainer_Ar0W");
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
        (endpointEdge !== null && window.scrollY >= endpointEdge.edge) ||
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

        if (breadcrumbs) breadcrumbs.classList.add("scrolledClass");
      } else {
        const endpointPlaceholder = document.querySelector(
          "#endpointPlaceholder",
        );
        const headingPlaceholder = document.querySelector(
          "#headingPlaceholder",
        );

        if (endpointPlaceholder) endpointPlaceholder.remove();
        if (headingPlaceholder) headingPlaceholder.remove();

        if (breadcrumbs) breadcrumbs.classList.remove("scrolledClass");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [endpointEdge]);
};

export default useScrollStylingManager;
