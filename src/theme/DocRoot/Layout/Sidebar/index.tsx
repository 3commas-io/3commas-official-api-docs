import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import clsx from "clsx";
import type SidebarType from "@theme/DocRoot/Layout/Sidebar";
import Sidebar from "@theme-original/DocRoot/Layout/Sidebar";
import type { WrapperProps } from "@docusaurus/types";

import { useSidebarContext } from "@site/src/context/SidebarContext";
import SidebarHoverZone from "@site/src/components/SidebarHoverZone/SidebarHoverZone";

import styles from "./styles.module.css";

type Props = WrapperProps<typeof SidebarType>;

export default function SidebarWrapper(props: Props): JSX.Element {
  const { isOpen, isPinned, scheduleClose, cancelScheduledClose } =
      useSidebarContext();

  const handleMouseEnter = () => {
    cancelScheduledClose();
  };

  const handleMouseLeave = () => {
    if (!isPinned) {
      scheduleClose(500);
    }
  };

  return (
      <BrowserOnly fallback={<Sidebar {...props} />}>
        {() => (
            <>
              {window.innerWidth > 996 ? (
                  <>
                    {!isOpen && !isPinned && <SidebarHoverZone />}
                    <div
                        className={clsx(
                            styles.sidebarBase,
                            isPinned ? styles.sidebarPinned : styles.sidebarUnpinned,
                        )}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                      <div
                          className={clsx(
                              styles.sidebarAnimated,
                              isOpen
                                  ? styles.sidebarAnimatedOpen
                                  : styles.sidebarAnimatedClosed,
                          )}
                      >
                        {isOpen && <Sidebar {...props} />}
                      </div>
                    </div>
                  </>
              ) : (
                  <Sidebar {...props} />
              )}
            </>
        )}
      </BrowserOnly>
  );
}