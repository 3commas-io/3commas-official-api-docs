<code>SIGNED</code> endpoints require an additional <code>Signature</code> header to verify the authenticity of the request.

Follow the steps below to compute a signature using <code>HMAC SHA256</code>.

### How to compute the signature with HMAC SHA256

The signature is generated using the <code>HMAC SHA256</code> algorithm. This method combines your <code>SecretKey</code> and the <code>uri?totalParams</code> to produce a unique code.

<code>totalParams</code> consists of the <code>query string</code> (parameters in the URL) concatenated with the <code>request body</code> (payload).

    Important notes:

- The signature is **not case sensitive**.
- Your `secretKey` should remain private and never be included in the request.

This ensures the security of your API interactions by validating the sender and protecting against unauthorized requests.

### Prepare the payload

Concatenate the query string and the request body to create the signature payload <code>totalParams</code>.
Ensure the data is formatted consistently.

### Generate the binary signature

Use the HMAC SHA256 algorithm with your secretKey as the key and totalParams as the data.

### Encode the signature

Convert the binary output of the HMAC operation to a hexadecimal string.

### How to send a signed API request

Once the signature is computed, include it in the API request as follows:

### Add the Signature to the request header

Include the computed signature in the Signature header of your request.

Include your API Key:
Add your 3Commas APIKey in the request header.

Send the request:
Ensure the request method, headers, and payload are identical to those used during signature computation to avoid mismatches.

:::warning
Keep in mind, the signature is not case sensitive.

### Look [here](https://3commas-io.github.io/public-api-signature-calculator-example/) for some examples

<details>
<summary>POST /public/api/ver1/users/change_mode</summary>
Here is a step-by-step example of how to send a valid signed payload from the Linux command line using <code>echo</code>, <code>openssl</code>, and <code>curl</code>.

Key | Value
------------ | ------------
api_key | vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A
secret | NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j

Parameter | Value
------------ | ------------
mode | paper

### Examples

### Example 1, as a query string

- **queryString:** mode=paper
- **HMAC SHA256 signature:**

    ```
    [linux]$ echo -n "/public/api/ver1/users/change_mode?mode=paper" | openssl dgst -sha256 -hmac "NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j"
    (stdin)= bca8d8c10acfbe8e76c5335d3efbe0a550487170a8bb7aaea0a13efabab55316
    ```

- **curl command:**

    ```
    (HMAC SHA256)
    [linux]$ curl -H "Apikey: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: bca8d8c10acfbe8e76c5335d3efbe0a550487170a8bb7aaea0a13efabab55316" -X POST 'https://api.3commas.io/public/api/ver1/users/change_mode?mode=paper'
    ```

### Example 2, as a request body

- **requestBody:** mode=paper
- **HMAC SHA256 signature:**

    ```
    [linux]$ echo -n "/public/api/ver1/users/change_mode?mode=paper" | openssl dgst -sha256 -hmac "NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j"
    (stdin)= bca8d8c10acfbe8e76c5335d3efbe0a550487170a8bb7aaea0a13efabab55316
    ```

- **curl command:**

    ```
    (HMAC SHA256)
    [linux]$ curl -H "Apikey: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: bca8d8c10acfbe8e76c5335d3efbe0a550487170a8bb7aaea0a13efabab55316" -X POST 'https://api.3commas.io/public/api/ver1/users/change_mode' -d 'mode=paper' 
    ```
  
### Example 3, as a raw json

- **requestBody:** ```json'{"mode": "paper"}'```
- **HMAC SHA256 signature:**

    ```
    [linux]$ echo -n "/public/api/ver1/users/change_mode?{\"mode\": \"paper\"}" | openssl dgst -sha256 -hmac "NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j"
    (stdin)= 0475b407ba6f2388d213134e478b330f74073388a232737837f79018694ae373
    ```

- **curl command:**

    ```
    (HMAC SHA256)
    [linux]$ curl -H "Apikey: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: 0475b407ba6f2388d213134e478b330f74073388a232737837f79018694ae373" -H "Content-Type: application/json" -X POST 'https://api.3commas.io/public/api/ver1/users/change_mode' --data-raw '{"mode": "paper"}' 
    ```

</details>

<details>
<summary>GET `/public/api/ver1/bots/{bot_id}/show`</summary>
Here is a step-by-step example of how to test your endpoint through postman.

Once Postman works with the values, you can implement it in code.

### Set up GET url

- **With include_events:**
`<https://api.3commas.io/public/api/ver1/bots/EnterBotIdHere/show?include_events=true>`

By using include_events in the query string, in Postman, your Params field will be automatically filled in

### Calculate your Signature

Use a HMAC SHA256 generator tool.

"" | ""
------------ | ------------
Input value | /public/api/ver1/bots/84512/show?include_events=true
Secret Key | Use your secret API key from 3commas
Hashed Output | Signature result to be used in Step 3

### Set up Headers

Key | Value
------------ | ------------
Apikey | 3commas API key goes here
Signature | Calculated Signature from Step 2 goes here

These 2 key/value pairs can be entered in Postman under Headers (which is located under the GET url field)

### Receive JSON object

If you have followed these steps you should now receive a status 200 OK with your JSON data.

</details>
