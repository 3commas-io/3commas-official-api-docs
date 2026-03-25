import React from "react";
import { Method } from "@site/src/components/Endpoint";
import { METHODS } from "@site/src/components/Endpoint/Method";
import type { Method as MethodType } from "@site/src/components/Endpoint/Method";

export default function CodeBlockTitle({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  if (typeof children !== "string") {
    return <>{children}</>;
  }

  const parts = children.split(" ");

  if (METHODS.includes(parts[0] as MethodType)) {
    return (
      <>
        <Method variant="text" align="right" inCodeBlock>
          {parts[0]}
        </Method>
        <span>{parts.slice(1).join(" ")}</span>
      </>
    );
  }

  return <>{children}</>;
}
