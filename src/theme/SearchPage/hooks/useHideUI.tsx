import { useEffect } from "react";

const useHideUI = (selectors: string | string[]) => {
  useEffect(() => {
    const selectorArray = Array.isArray(selectors) ? selectors : [selectors];

    const elements: HTMLElement[] = selectorArray
      .flatMap((selector) => Array.from(document.querySelectorAll(selector)))
      .filter((el) => el instanceof HTMLElement) as HTMLElement[];
    elements.forEach((el) => (el.style.display = "none"));

    return () => {
      elements.forEach((el) => (el.style.display = "none"));
    };
  }, [selectors]);
};

export default useHideUI;
