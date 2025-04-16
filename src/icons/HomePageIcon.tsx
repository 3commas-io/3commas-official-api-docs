import { homeIcons, type IconKeys } from "../utils/icons";

import type { FC } from "react";

type Props = {
  icon: IconKeys;
};

export const HomePageIcon: FC<Props> = ({ icon }) => homeIcons[icon];
