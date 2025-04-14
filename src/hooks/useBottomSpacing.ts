import { useLayoutEffect } from "react";

const BOTTOM_SPACING = 52;

export const useBottomSpacing = (addSpacing: boolean) => {
  useLayoutEffect(() => {
    const content = document.querySelector(".docsWrapper_hBAB") as HTMLElement;

    if (addSpacing && window.innerWidth < 997 && content) {
      content.style.paddingBottom = `${BOTTOM_SPACING}px`;
    }

    return () => {
      if (content) {
        content.style.paddingBottom = "";
      }
    };
  }, [addSpacing]);
};
