import React, { useEffect } from "react";

const ScrollStylingManager = () => {
  useEffect(() => {
    const excludedRoutes = [
      "/account/",
      "/account/account-entity",
      "/dca-bot",
      "/dca-bot/deals/",
      "/dca-bot/dca-bot-entity",
      "/dca-bot/deals/deal-entity",
      "/general-information",
      "/general-information/dates-and-times",
      "/general-information/errors",
      "/general-information/get-an-api-key",
      "/general-information/how-to-create-an-rsa-key-pair",
      "/general-information/how-to-start",
      "/general-information/limits",
      "/general-information/overview",
      "/general-information/security-and-permission-types",
      "/general-information/signing-a-request-using-hmac-sha256",
      "/general-information/signing-a-request-using-rsa",
      "/grid-bot",
      "/grid-bot/grid-bot-entity",
      "/market-data",
      "/smart-trade/",
      "/smart-trade/smart-trade-entity",
      "/smart-trade/trades/trade-entity",
    ];

    const handleScroll = () => {
      const isExcluded = excludedRoutes.includes(window.location.pathname);

      const breadcrumbs = document.querySelector(".breadcrumbsContainer_Ar0W");
      const container = document.querySelector(".container_eK_a");
      const header = document.querySelector(".theme-doc-markdown header h1");

      if (window.scrollY >= 140) {
        if (breadcrumbs) breadcrumbs.classList.add("scrolledClass");
        if (header) {
          if (isExcluded) {
            header.classList.add("scrolledClassMain");
            header.classList.remove("scrolledClass");
          } else {
            header.classList.add("scrolledClass");
            header.classList.remove("scrolledClassMain");
          }
        }
        if (!isExcluded && container) {
          container.classList.add("scrolledClass");
        }
      } else {
        if (breadcrumbs) breadcrumbs.classList.remove("scrolledClass");
        if (header) {
          header.classList.remove("scrolledClass");
          header.classList.remove("scrolledClassMain");
        }
        if (container) container.classList.remove("scrolledClass");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default ScrollStylingManager;
