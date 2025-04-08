import { InternalDocSearchHit, StoredDocSearchHit } from "@docsearch/react";
import Link from "@docusaurus/Link";
import React from "react";

type Props = {
  hit: InternalDocSearchHit | StoredDocSearchHit;
  children: React.ReactNode;
};

export const Hit: React.FC<Props> = ({ hit, children }) => {
  return <Link to={hit.url}>{children}</Link>;
};
