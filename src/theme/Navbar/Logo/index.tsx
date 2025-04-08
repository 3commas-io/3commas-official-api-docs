import React from "react";
import Logo from "@theme/Logo";
import SidebarButton from "@site/src/components/SidebarButton/SidebarButton";
import clsx from "clsx";
import { useSidebarContextOptional } from "@site/src/context/SidebarContext";

export default function NavbarLogo(): JSX.Element {
  const context = useSidebarContextOptional();
  if (!context) {
    return <div>Loading...</div>;
  }
  const { isPinned } = context;
  return (
      <div
          className={clsx(
              "navbar__left__content",
              isPinned && "navbar__left__content__pinned",
          )}
      >
        <Logo
            className="navbar__brand"
            imageClassName="navbar__logo"
            titleClassName="navbar__title text--truncate"
        />
        <SidebarButton />
      </div>
  );
}