# Public Rest API for 3commas.io (2020-06-10)
# General API Information
* Official Announcements regarding changes, downtime, etc. to the API will be reported here: **https://t.me/commas_API**
* We have telegram group where you can discuss any issues with API **https://t.me/xcommas_api**
* Streams, endpoints, parameters, payloads, etc. decscribed in the documents in this repository are considered **official** and **supported**.
* The use of any other streams, endpoints, parameters, or payloads, etc. is **not supported**; **use them at your own risk and with no guarantees.**
* The base endpoint is: **https://api.3commas.io/public/api**
* All endpoints return either a JSON object or array.
* PAIR format is **QUOTE_BASE** (for example USDT_BTC) for all exchanges (no matter what format the exchange is using).
* Data is returned in **ascending** order. Oldest first, newest last.
* All time and timestamp related fields are in seconds.
* HTTP `4XX` return codes are used for malformed requests; the issue is on the sender's side.
* HTTP `429` return code is used when breaking a request rate limit.
* HTTP `418` return code is used when an IP has been auto-banned for continuing to send requests after receiving `429` codes.
* HTTP `5XX` return codes are used for internal errors; the issue is on 3commas's side.
* HTTP `504` return code is used when the API successfully sent the message

* Any endpoint can return an ERROR; the error payload is as follows:
```javascript
{
  "error": "record_invalid",
  "error_description": "Invalid parameters",
  "error_attributes": {
    "api_key": [
      "is too short (minimum is 5 characters)"
    ],
    "secret": [
      "is too short (minimum is 5 characters)"
    ],
    "name": [
      "is too short (minimum is 2 characters)"
    ]
  }
}
```
* error field is mandatory. Specific error codes and messages defined in another document.
* error_description is localized extended description of error occurred. Optional.
* error_attributes used to show fields that didn't pass validations. Optional.
* For `GET` endpoints, parameters must be sent as a `query string`.
* For `POST`, `PUT`, and `DELETE` endpoints, the parameters may be sent as a
  `query string` or in the `request body` with content type
  `application/x-www-form-urlencoded`. You may mix parameters between both the
  `query string` and `request body` if you wish to do so.
* Parameters may be sent in any order.
* If a parameter sent in both the `query string` and `request body`, the
  `query string` parameter will be used.

# Third-party implementations
* https://www.npmjs.com/package/3commas-api-node
* https://www.npmjs.com/package/3commas-typescript
* https://github.com/TheKimono/3Commas.Net
* https://github.com/bogdanteodoru/py3cw (Python 3.x implementation)

# LIMITS
* A 429 will be returned when either rather limit is violated.
* Each route has a `weight` which determines for the number of requests each endpoint counts for. Heavier endpoints and endpoints that do operations on multiple symbols will have a heavier `weight`.
* When a 429 is received, it's your obligation as an API to back off and not spam the API.
* **Repeatedly violating rate limits and/or failing to back off after receiving 429s will result in an automated IP ban (HTTP status 418).**
* IP bans are tracked and **scale in duration** for repeat offenders, **from 2 minutes to 3 days**.

# Endpoint security type
* Each endpoint has a security type that determines the how you will interact with it.
* API-keys are passed into the Rest API via the `APIKEY` header.
* API-keys and secret-keys **are case sensitive**.
* API-keys can be configured to only access certain types of secure endpoints.
 For example, one API-key could be used for STATS only, while another API-key can access everything.


Security Type | Description
------------ | ------------
NONE | Endpoint can be accessed freely.
APIKEY_ONLY | Endpoint requires sending a valid API-Key.
SIGNED | Endpoint requires sending a valid API-Key and signature.
 
 
 
# SIGNED  Endpoint security
* `SIGNED` endpoints require an additional header, `Signature`, to be sent.
* Endpoints use `HMAC SHA256` signatures. The `HMAC SHA256 signature` is a keyed `HMAC SHA256` operation.
  Use your `secretKey` as the key and `uri?totalParams` as the value for the HMAC operation.
* The `signature` is **not case sensitive**.
* `totalParams` is defined as the `query string` concatenated with the `request body`.


## SIGNED Endpoint Examples for POST /public/api/ver1/accounts/new
Here is a step-by-step example of how to send a valid signed payload from the
Linux command line using `echo`, `openssl`, and `curl`.

Key | Value
------------ | ------------
apiKey | vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A
secretKey | NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j


Parameter | Value
------------ | ------------
type | binance
name | binance_account
api_key | XXXXXX
secret |  YYYYYY


### Example 1: As a query string
* **queryString:** type=binance&name=binance_account&api_key=XXXXXX&secret=YYYYYY
* **HMAC SHA256 signature:**

    ```
    [linux]$ echo -n "/public/api/ver1/accounts/new?type=binance&name=binance_account&api_key=XXXXXX&secret=YYYYYY" | openssl dgst -sha256 -hmac "NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j"
    (stdin)= 30f678a157230290e00475cfffccbc92ae3659d94c145a2c0e9d0fa28f41c11a
    ```


* **curl command:**

    ```
    (HMAC SHA256)
    [linux]$ curl -H "APIKEY: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: 30f678a157230290e00475cfffccbc92ae3659d94c145a2c0e9d0fa28f41c11a" -X POST 'https://api.3commas.io/public/api/ver1/accounts/new?type=binance&name=binance_account&api_key=XXXXXX&secret=YYYYYY'
    ```

### Example 2: As a request body
* **requestBody:** type=binance&name=binance_account&api_key=XXXXXX&secret=YYYYYY
* **HMAC SHA256 signature:**

    ```
    [linux]$ echo -n "/public/api/ver1/accounts/new?type=binance&name=binance_account&api_key=XXXXXX&secret=YYYYYY" | openssl dgst -sha256 -hmac "NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j"
    (stdin)= 30f678a157230290e00475cfffccbc92ae3659d94c145a2c0e9d0fa28f41c11a
    ```


* **curl command:**

    ```
    (HMAC SHA256)
    [linux]$ curl -H "APIKEY: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: 30f678a157230290e00475cfffccbc92ae3659d94c145a2c0e9d0fa28f41c11a" -X POST 'https://api.3commas.io/public/api/ver1/accounts/new' -d 'type=binance&name=binance_account&api_key=XXXXXX&secret=YYYYYY' 
    ```


# Public API Endpoints

**Deal status:**

* CREATED
* BASE_ORDER_PLACED
* BOUGHT
* CANCEL_PENDING
* CANCELED
* COMPLETED
* FAILED
* PANIC_SELL_PENDING
* PANIC_SELL_ORDER_PLACED
* PANIC_SOLD


**Permissions:**

* BOTS_READ
* BOTS_WRITE
* ACCOUNTS_READ
* ACCOUNTS_WRITE
* SMART_TRADES_READ
* SMART_TRADES_WRITE


**Rate limiters (rateLimitType)**

* REQUESTS
* ORDERS

**Rate limit intervals**

* SECOND
* MINUTE
* DAY


### Test connectivity to the Rest API (Permission: NONE, Security: NONE)
```
GET /ver1/ping
```
**Weight:**
1

**Parameters:**
NONE
### PongEntity
 ``` 
 {
pong: 'pong' 
  } 
 ``` 
### Test connectivity to the Rest API and get the current server time (Permission: NONE, Security: NONE)
```
GET /ver1/time
```
**Weight:**
1

**Parameters:**
NONE
### TimeEntity
 ``` 
 {
server_time: 1525533222 
  } 
 ``` 
