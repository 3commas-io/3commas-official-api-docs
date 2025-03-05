import React from "react";
import type { Props } from "@theme/Icon/Copy";

export default function IconCopy(props: Props): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <mask
        id="mask0_96_17508"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="16"
        height="16"
      >
        <path
          d="M6.25 2.5C5.78976 2.5 5.41667 2.8731 5.41667 3.33333C5.41667 3.79357 5.78976 4.16667 6.25 4.16667H15.8333V13.75C15.8333 14.2102 16.2064 14.5833 16.6667 14.5833C17.1269 14.5833 17.5 14.2102 17.5 13.75V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5H6.25Z"
          fill="#19191A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.75 5.83333C3.05964 5.83333 2.5 6.39298 2.5 7.08333V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H12.9167C13.607 17.5 14.1667 16.9404 14.1667 16.25V7.08333C14.1667 6.39298 13.607 5.83333 12.9167 5.83333H3.75ZM4.16667 15.8333V7.5H12.5V15.8333H4.16667Z"
          fill="#19191A"
        />
      </mask>
      <g mask="url(#mask0_96_17508)">
        <rect width="20" height="20" fill="#00A59A" />
      </g>
    </svg>
  );
}
