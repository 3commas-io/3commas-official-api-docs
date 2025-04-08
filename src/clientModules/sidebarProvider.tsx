import React from "react";
import { SidebarProvider } from "@site/src/context/SidebarContext";

export function rootContainer({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
