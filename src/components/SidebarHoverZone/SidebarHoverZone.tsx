import React, { useRef } from "react";
import { useSidebarContext } from "@site/src/context/SidebarContext";
import styles from "./styles.module.css";

export default function SidebarHoverZone() {
  const { openSidebarAbsolute, cancelScheduledClose } = useSidebarContext();
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    hoverTimerRef.current = setTimeout(() => {
      openSidebarAbsolute();
      cancelScheduledClose();
    }, 500);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  return (
    <div
      className={styles.hoverZone}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}
