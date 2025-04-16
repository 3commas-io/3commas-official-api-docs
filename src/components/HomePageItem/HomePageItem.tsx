import Link from "@docusaurus/Link";
import clsx from "clsx";

import { HomePageIcon } from "@site/src/icons/HomePageIcon";
import styles from "./HomePageItem.module.css";

import type { IconKeys } from "@site/src/utils/icons";

export interface HomePageItemData {
  title: string;
  description: string;
  icon: IconKeys;
  link: string;
}

type Props = {
  data: HomePageItemData;
};

export const HomePageItem = ({ data }: Props) => (
  <Link to={data.link} className={clsx(styles.homePageItemLink, "home-line")}>
    <div className={styles.homePageItemIconWrapper}>
      <HomePageIcon icon={data.icon} />
    </div>
    <div className={styles.homePageItemContentWrapper}>
      <p className={styles.homePageItemTitle}>{data.title}</p>
      <p className={styles.homePageItemDescription}>{data.description}</p>
    </div>
  </Link>
);
