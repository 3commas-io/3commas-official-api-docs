import React from "react";
import DocsRoot from "@theme-original/DocsRoot";
import type DocsRootType from "@theme/DocsRoot";
import type { WrapperProps } from "@docusaurus/types";
import { SidebarProvider } from "@site/src/context/SidebarContext";

type Props = WrapperProps<typeof DocsRootType>;

export default function DocsRootWrapper(props: Props): JSX.Element {
  return (
    <>
      <SidebarProvider>
        <DocsRoot {...props} />
      </SidebarProvider>
    </>
  );
}
