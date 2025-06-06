import { CSSProperties, HTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./Separator.module.css";

interface SeparatorProps extends HTMLAttributes<HTMLElement> {
  type?: "default" | "additionalInformation";
  label?: string;
  labelBg?: { dark?: string; light?: string };
}

export const ADDITIONAL_INFORMATION_THEME: SeparatorProps["labelBg"] = {
  light: "#fdfdfe",
  dark: "#242526",
};

const Separator = ({
  label = "",
  labelBg,
  type = "default",
  ...props
}: SeparatorProps) => {
  return (
    <hr
      {...props}
      data-label={label}
      className={clsx(
        styles.separator,
        (label || type === "additionalInformation") && styles.example,
      )}
      style={
        {
          ...props.style,
          "--separator-text-bg-dark":
            labelBg?.dark || "var(--ifm-background-color)",
          "--separator-text-bg-light": labelBg?.light || "#fff",
        } as CSSProperties
      }
    />
  );
};

export default Separator;
