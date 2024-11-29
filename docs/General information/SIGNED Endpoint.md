## Signed endpoint<br>
<p> 
    <code>SIGNED</code> endpoints require an additional <code>Signature</code> header to verify the authenticity of the request. 
</p>
<p> 
    The signature is generated using the <code>HMAC SHA256</code> algorithm. This method combines your <code>secretKey</code> (used as a private key) and the <code>uri?totalParams</code> (data being signed) to produce a unique code.
</p>
<p>
    <code>totalParams</code> consists of the <code>query string</code> (parameters in the URL) concatenated with the <code>request body</code> (payload).
</p>
<p>Important notes: 
<ul>
   <li>The signature is not case sensitive.</li>
   <li>Your <code>secretKey</code> should remain private and never be included in the request.</li>
</ul>
</p> 
<p> 
    This ensures the security of your API interactions by validating the sender and protecting against unauthorized requests.
</p>

### Look [here](https://3commas-io.github.io/public-api-signature-calculator-example/) for some examples


<details>
<summary><strong>POST</strong> /public/api/ver1/users/change_mode</summary><br>
Here is a step-by-step example of how to send a valid signed payload from the Linux command line using <code>echo</code>, <code>openssl</code>, and <code>curl</code>.
<br>

Key | Value
------------ | ------------
api_key | vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A
secret | NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j


Parameter | Value
------------ | ------------
mode | paper


### Example 1, as a query string
* **queryString:** mode=paper
* **HMAC SHA256 signature:**

    ```
    [linux]$ echo -n "/public/api/ver1/users/change_mode?mode=paper" | openssl dgst -sha256 -hmac "NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j"
    (stdin)= bca8d8c10acfbe8e76c5335d3efbe0a550487170a8bb7aaea0a13efabab55316
    ```


* **curl command:**

    ```
    (HMAC SHA256)
    [linux]$ curl -H "Apikey: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: bca8d8c10acfbe8e76c5335d3efbe0a550487170a8bb7aaea0a13efabab55316" -X POST 'https://api.3commas.io/public/api/ver1/users/change_mode?mode=paper'
    ```

### Example 2, as a request body
* **requestBody:** mode=paper
* **HMAC SHA256 signature:**

    ```
    [linux]$ echo -n "/public/api/ver1/users/change_mode?mode=paper" | openssl dgst -sha256 -hmac "NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j"
    (stdin)= bca8d8c10acfbe8e76c5335d3efbe0a550487170a8bb7aaea0a13efabab55316
    ```


* **curl command:**

    ```
    (HMAC SHA256)
    [linux]$ curl -H "Apikey: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: bca8d8c10acfbe8e76c5335d3efbe0a550487170a8bb7aaea0a13efabab55316" -X POST 'https://api.3commas.io/public/api/ver1/users/change_mode' -d 'mode=paper' 
    ```
  
### Example 3, as a raw json
* **requestBody:** '{"mode": "paper"}'
* **HMAC SHA256 signature:**
    
    ```
    [linux]$ echo -n "/public/api/ver1/users/change_mode?{\"mode\": \"paper\"}" | openssl dgst -sha256 -hmac "NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j"
    (stdin)= 0475b407ba6f2388d213134e478b330f74073388a232737837f79018694ae373
    ```
* **curl command:**

    ```
    (HMAC SHA256)
    [linux]$ curl -H "Apikey: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: 0475b407ba6f2388d213134e478b330f74073388a232737837f79018694ae373" -H "Content-Type: application/json" -X POST 'https://api.3commas.io/public/api/ver1/users/change_mode' --data-raw '{"mode": "paper"}' 
    ```
</details>

<details>
<summary><strong>GET</strong> /public/api/ver1/bots/{bot_id}/show</summary><br>
Here is a step-by-step example of how to test your endpoint through postman.

Once Postman works with the values, you can implement it in code.

### Step 1: Set up GET url:
* **With include_events:** https://api.3commas.io/public/api/ver1/bots/EnterBotIdHere/show?include_events=true

By using include_events in the query string, in Postman, your Params field will be automatically filled in

### Step 2: Calculate your Signature:
Use a HMAC SHA256 generator tool.

"" | ""
------------ | ------------
Input value | /public/api/ver1/bots/84512/show?include_events=true
Secret Key | Use your secret API key from 3commas
Hashed Output | Signature result to be used in Step 3


### Step 3: Set up Headers:
Key | Value
------------ | ------------
Apikey | 3commas API key goes here
Signature | Calculated Signature from Step 2 goes here

These 2 key/value pairs can be entered in Postman under Headers (which is located under the GET url field)

### Step 4: Receive JSON object:
If you have followed these steps you should now receive a status 200 OK with your JSON data.

</details>

