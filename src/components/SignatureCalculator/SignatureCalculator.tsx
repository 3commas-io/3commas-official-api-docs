import { useState } from "react";

import SignatureCalculatorForm from "./SignatureCalculatorForm/SignatureCalculatorForm";

import { Informer } from "@site/src/components/Informer/Informer";
import CodeBlock from "@theme/CodeBlock";

const SignatureCalculator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [headersObj, setHeadersObj] = useState("");

  const generateHMACSHA256Signature = async (
    apiSecret: string,
    apiKey: string,
    requestPath: string,
    { query, requestBody }: { query: string | null; requestBody: string | null }
  ): Promise<void> => {
    console.log(query, requestBody);
    const encoder = new TextEncoder();
    const keyData = encoder.encode(apiSecret);
    const data = encoder.encode(requestPath + (query ?? `?${requestBody}`));

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

export default SignatureCalculator;
