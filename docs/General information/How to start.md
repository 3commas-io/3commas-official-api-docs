
All requests to the 3Commas API require authentication unless explicitly stated.

### Get Your 3Commas API Key

We offer two ways to generate API Key:

- System generated;
- Self-generated using an RSA asymmetric encryption method.
We recommend the second method as it provides a more secure connection for your apps.

### Create a Signature

<code>SIGNED</code> endpoints require an additional <code>Signature</code> header to ensure the authenticity of the request.

### Signed Endpoint

To authenticate, pass your 3Commas `API Key` and the `Signature` header in the request.

### Test authentication

 The quickest way to test your authentication setup is by sending a request to the <code>/ver1/validate</code> endpoint. This endpoint verifies the validity of your API credentials and returns the status of your authentication.

API credentials validity check

<code><mark style={{ color: "blue" }}>GET</mark></code>
<span style={{ fontFamily: "'Courier New', monospace" }}>/ver1/validate</span>

#### Responce

 If successful, 3Commas returns:

```json
{
    "valid": true
}
```

    If authentication fails, 3Commas returns a <code>401</code> Unauthorized error with the following payload:

```json
{
    "error": "signature_invalid",
    "error_description": "Provided signature is invalid"
}
```
