import { FC } from "react";

import { darkIcons, lightIcons } from "../utils/icons";

import styles from "./HomePageIcons.module.css";

type Props = {
  icon: string;
};

const HomePageIcons: FC<Props> = ({ icon }) => {
  return (
    <>
      <div className={styles["home__icon-light"]}>{lightIcons[icon]}</div>
      <div className={styles["home__icon-dark"]}> {darkIcons[icon]}</div>
    </>
  );
};

export default HomePageIcons;
