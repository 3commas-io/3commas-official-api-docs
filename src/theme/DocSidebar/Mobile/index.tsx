import React from "react";
import clsx from "clsx";
import {
  NavbarSecondaryMenuFiller,
  type NavbarSecondaryMenuComponent,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import DocSidebarItems from "@theme/DocSidebarItems";
import type { Props } from "@theme/DocSidebar/Mobile";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import { useColorMode } from "@docusaurus/theme-common";

const DocSidebarMobileSecondaryMenu: NavbarSecondaryMenuComponent<Props> = ({
  sidebar,
  path,
}) => {
  const mobileSidebar = useNavbarMobileSidebar();
  const { colorMode, setColorMode } = useColorMode();

  const handleColorModeChange = (newMode: "light" | "dark") => {
    setColorMode(newMode);
  };

  return (
    <>
      <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, "menu__list")}>
        <DocSidebarItems
          items={sidebar}
          activePath={path}
          onItemClick={(item) => {
            // Close the mobile menu if the category has a link or it's just a regular link
            if (
              (item.type === "category" && item.href) ||
              item.type === "link"
            ) {
              mobileSidebar.toggle();
            }
          }}
          level={1}
        />
      </ul>
      <NavbarColorModeToggle className="themeChangeButton" />
    </>
  );
};

function DocSidebarMobile(props: Props) {
  return (
    <NavbarSecondaryMenuFiller
      component={DocSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

export default React.memo(DocSidebarMobile);
