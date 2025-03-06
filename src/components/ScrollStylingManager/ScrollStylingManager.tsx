import { useEffect, useState } from "react";

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

const ScrollStylingManager = () => {
  const [endpointEdge, setEndpointEdge] = useState<{
    edge: number;
    desktop: boolean;
  } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isExcluded = excludedRoutes.includes(window.location.pathname);

      const breadcrumbs = document.querySelector(".breadcrumbsContainer_Ar0W");
      const endpoint = document.querySelector(".container_eK_a");

      const h1 = document.querySelector(".theme-doc-markdown header h1");
      const header = document.querySelector(".theme-doc-markdown header");

      if (
        (endpoint && endpointEdge === null) ||
        (endpointEdge !== null &&
          window.innerWidth >= 1261 !== endpointEdge?.desktop)
      ) {
        const rect = endpoint.getBoundingClientRect();
        setEndpointEdge({
          edge: Math.max(rect.top - 15, 115),
          desktop: window.innerWidth >= 1261,
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
          endpointPlaceholder = endpoint.cloneNode(true) as HTMLElement;
          endpointPlaceholder.id = "endpointPlaceholder";
          endpointPlaceholder.classList.add("scrolledClass");
          header.appendChild(endpointPlaceholder);
        }

        if (!headingPlaceholder && h1 && window.innerWidth > 996) {
          headingPlaceholder = document.createElement("h1");
          headingPlaceholder.id = "headingPlaceholder";
          headingPlaceholder.textContent = h1.textContent || "";
          headingPlaceholder.dataset.mock = "true";

          if (isExcluded) {
            headingPlaceholder.classList.add("scrolledClassMain");
            header.appendChild(headingPlaceholder);
          } else if (!isExcluded && window.innerWidth >= 1920) {
            headingPlaceholder.classList.add("scrolledClass");
            header.appendChild(headingPlaceholder);
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

  return null;
};

export default ScrollStylingManager;
