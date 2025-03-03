import React, { useEffect } from "react";
import Link from "@docusaurus/Link";
import styles from "./HomePageItem.module.css";
import HomePageIcons from "@site/src/icons/HomePageIcons";
import clsx from "clsx";

interface HomePageItemData {
  title: string;
  description: string;
  icon: string;
  link: string;
}

type Props = {
  data: HomePageItemData;
};

const HomePageItem = ({ data }: Props) => {
  useEffect(() => {
    const paginatorNav = document.querySelector(
      ".pagination_zBJ0",
    ) as HTMLElement;

    if (paginatorNav) {
      paginatorNav.style.setProperty("display", "none", "important");
    }
    const breadcrumbs = document.querySelector(
      ".breadcrumbsContainer_Ar0W",
    ) as HTMLElement;

    if (breadcrumbs) {
      breadcrumbs.style.display = "none";
    }
  }, []);

  return (
    <Link to={data.link} className={clsx(styles.homePageItemLink, "home-line")}>
      <div className={styles.homePageItemIconWrapper}>
        <HomePageIcons icon={data.icon} />
      </div>
      <div className={styles.homePageItemContentWrapper}>
        <p className={styles.homePageItemTitle}>{data.title}</p>
        <p className={styles.homePageItemDescription}>{data.description}</p>
      </div>
    </Link>
  );
};

export default HomePageItem;
