import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/PaginatorNavLink";

import styles from "./styles.module.css";

export default function PaginatorNavLink(props: Props): JSX.Element {
  const { permalink, title, isNext } = props;

  return (
    <Link
      className={clsx(
        styles["pagination-item"],
        isNext && styles["pagination-item--next"],
        isNext && !permalink && styles["pagination-item--disabled"],
        !isNext && !permalink && styles["pagination-item--disabled"],
        "pagination-link",
      )}
      to={permalink}
    >
      <div className={styles.pagination__arrow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M16.875 10H3.125"
            stroke="black"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.75 4.375L3.125 10L8.75 15.625"
            stroke="black"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={clsx(
          styles["pagination__info"],
          isNext && styles["pagination__info--next"],
        )}
      >
        <h3 className="pagination-nav__label">{title}</h3>
        <span>{isNext ? "Next" : "Previous"}</span>
      </div>
    </Link>
  );
}
