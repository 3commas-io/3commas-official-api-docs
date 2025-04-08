import React, { useRef } from "react";
import { useSidebarContext } from "@site/src/context/SidebarContext";
import styles from "./SidebarButton.module.css";
import clsx from "clsx";
import { SidebarButtonIcon } from "@site/src/icons/SidebarButtonIcon";
import { SidebarButtonIconActive } from "@site/src/icons/SidebarButtonIconActive";

export default function SidebarButton() {
  const {
    isOpen,
    isPinned,
    openSidebarAbsolute,
    togglePin,
    scheduleClose,
    cancelScheduledClose,
  } = useSidebarContext();

  const manualUnpinRef = useRef(false);

  const handleMouseEnter = () => {
    cancelScheduledClose();
    if (manualUnpinRef.current) return;
    if (!isPinned && !isOpen) {
      openSidebarAbsolute();
    }
  };

  const handleMouseLeave = () => {
    manualUnpinRef.current = false;
    if (!isPinned) {
      scheduleClose(500);
    }
  };

  const handleClick = () => {
    if (isPinned) {
      togglePin();
      manualUnpinRef.current = true;
    } else {
      togglePin();
    }
  };

  // @ts-ignore
  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={clsx(
        styles.sidebarOpenButton,
        isPinned && styles.sidebarOpenButtonPinned,
      )}
    >
      {isPinned ? <SidebarButtonIcon /> : <SidebarButtonIconActive />}
    </button>
  );
}
