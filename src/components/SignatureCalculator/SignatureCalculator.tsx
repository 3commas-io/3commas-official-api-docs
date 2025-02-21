import { useState } from "react";

import { SignatureCalculatorForm } from "./SignatureCalculatorForm/SignatureCalculatorForm";

import { Informer } from "@site/src/components/Informer/Informer";
import CodeBlock from "@theme/CodeBlock";

export interface GenerateSignatureArgs {
  apiSecret: string;
  apiKey: string;
  requestPath: string;
  params: { query: string | null; requestBody: string | null };
}

export const SignatureCalculator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [headersObj, setHeadersObj] = useState("");

  const generateHMACSHA256Signature = async ({
    apiKey,
    apiSecret,
    requestPath,
    params: { query, requestBody },
  }: GenerateSignatureArgs): Promise<void> => {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(apiSecret);

    const sortedQuery = query
      ? sortQuery(query, "&")
      : sortQuery(requestBody, "\n");

    console.log(sortedQuery);
    const data = encoder.encode(requestPath + sortedQuery);

    const key = await crypto.subtle.importKey(
      "raw",
      keyData,
      {
        name: "HMAC",
        hash: "SHA-256",
      },
      false,
      ["sign"]
    );

    const signature = await crypto.subtle.sign("HMAC", key, data);
    const signatureArray = new Uint8Array(signature);
    const signatureHex = Array.from(signatureArray)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setHeadersObj(`{
  Apikey: "${apiKey}",
  Signature: "${signatureHex}"
}`);
  };

  const sortQuery = (queryString: string, separator: "&" | "\n"): string => {
    if (queryString.startsWith("?") && separator === "&") {
      queryString = queryString.slice(1);
    }

    const paramsArray = queryString.split(separator);
    const paramsObject = paramsArray.reduce((acc, param) => {
      const [key, value] = param.split("=");
      acc[key] = value;
      return acc;
    }, {});

    const sortedParams = Object.keys(paramsObject)
      .sort()
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`
      );

    return `?${sortedParams.join("&")}`;
  };

  return (
    <div>
      <CodeBlock language="json" title="Headers" showLineNumbers>
        {headersObj
          ? headersObj
          : `No signature generated yet. Please fill out the form and generate one.`}
      </CodeBlock>
      <Informer variant="warning">
        You can either pass Search Params or Request Body
      </Informer>
      <SignatureCalculatorForm
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        generateSignature={generateHMACSHA256Signature}
      />
    </div>
  );
};