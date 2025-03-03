import Heading from "@theme/Heading";
import { FunctionComponent } from "react";
import styles from "./CollapseAllHeading.module.css";

type Props = { children: React.ReactNode };

export const CollapseAllHeading: FunctionComponent = ({ children }: Props) => (
  <Heading as="h3" className={styles.heading}>
    {children}
  </Heading>
);
