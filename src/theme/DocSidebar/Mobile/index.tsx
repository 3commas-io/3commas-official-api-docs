import React from "react";
import clsx from "clsx";
import {
  NavbarSecondaryMenuFiller,
  type NavbarSecondaryMenuComponent,
  ThemeClassNames,
  useColorMode,
} from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import DocSidebarItems from "@theme/DocSidebarItems";
import type { Props } from "@theme/DocSidebar/Mobile";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import styles from "./styles.module.css";
import TelegramLink from "@site/src/theme/Navbar/TelegramLink/TelegramLink";

const DocSidebarMobileSecondaryMenu: NavbarSecondaryMenuComponent<Props> = ({
  sidebar,
  path,
}) => {
  const mobileSidebar = useNavbarMobileSidebar();
  const { colorMode, setColorMode } = useColorMode();

  const handleColorModeChange = () => {
    const newMode = colorMode === "light" ? "dark" : "light";

    setColorMode(newMode);
  };

  const currentTheme = colorMode === "light" ? "Light mode" : "Dark mode";

  return (
    <>
      <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, "menu__list")}>
        <DocSidebarItems
          items={sidebar}
          activePath={path}
          onItemClick={(item) => {
            // Закриваємо мобільне меню, якщо категорія має посилання або це звичайне посилання
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
      <div className={styles.options}>
        <TelegramLink labeled />
        <button className={styles.row} onClick={handleColorModeChange}>
          <NavbarColorModeToggle className="themeChangeButton" />
          <span>{currentTheme}</span>
        </button>
      </div>
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
