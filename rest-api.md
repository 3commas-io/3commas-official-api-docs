# Public Rest API for 3commas.io (2018-07-14)
# General API Information
* The base endpoint is: **https://3commas.io/public/api**
* All endpoints return either a JSON object or array.
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
    [linux]$ curl -H "APIKEY: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: 30f678a157230290e00475cfffccbc92ae3659d94c145a2c0e9d0fa28f41c11a" -X POST 'https://3commas.io/public/api/ver1/accounts/new?type=binance&name=binance_account&api_key=XXXXXX&secret=YYYYYY'
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
    [linux]$ curl -H "APIKEY: vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A" -H "Signature: 30f678a157230290e00475cfffccbc92ae3659d94c145a2c0e9d0fa28f41c11a" -X POST 'https://3commas.io/public/api/ver1/accounts/new' -d type=binance&name=binance_account&api_key=XXXXXX&secret=YYYYYY' 
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


### User deals (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/deals
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
limit | integer | NO | Limit records. Default: 50
offset | integer | NO | Offset records
account_id | integer | NO | Account to show bots on. Return all if not specified
bot_id | integer | NO | Bot show deals on. Return all if not specified
scope | string | NO | active - active deals, finished - finished deals, completed - successfully completed, any other value or null (default) - all deals
### Info about specific deal (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/deals/{deal_id}/show
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
deal_id | integer | YES | 
### Cancel deal (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/deals/{deal_id}/cancel
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
deal_id | integer | YES | 
### Panic sell deal (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/deals/{deal_id}/panic_sell
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
deal_id | integer | YES | 
### User bots (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots
```
**Weight:**
1

**Parameters:**
NONE
### Get bot stats (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots/stats
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
account_id | integer | NO | Account to show on. Null - show for all
bot_id | integer | NO | Bots to show on. Null - show for all
### Create bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/create_bot
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
name | string | YES | 
account_id | integer | YES | 
pair | string | NO | Required if simple bot
max_active_deals | integer | NO | Required if composite bot
base_order_volume | number | YES | Base trade size
take_profit | number | YES | Target profit(percentage)
safety_order_volume | number | YES | Safety trade size
martingale_volume_coefficient | number | YES | 
martingale_step_coefficient | number | YES | 
max_safety_orders | integer | YES | Max safety trades count
active_safety_orders_count | integer | YES | Max active safety trades count
stop_loss_percentage | number | YES | 
cooldown | number | YES | 
pump_limit | number | YES | 
btc_price_limit | number | YES | 
safety_order_step_percentage | number | YES | Price deviation to open safety trades(percentage)
take_profit_type | string | YES | Percentage: base – from base trade, total – from total volume
### Bot info (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots/{bot_id}/show
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
bot_id | integer | YES | 
### Cancel all bot deals (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/cancel_all_deals
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
bot_id | integer | YES | 
### Panic sell all bot deals (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/panic_sell_all_deals
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
bot_id | integer | YES | 
### Delete bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/delete
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
bot_id | integer | YES | 
### Start new deal asap (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/start_new_deal
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
pair | string | NO | Can be omited for simple bot
skip_signal_checks | boolean | NO | If false or not specified then all paramaters like signals or volume filters will be checked. If true - those checks will be skipped
bot_id | integer | YES | 
### Enable bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/enable
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
bot_id | integer | YES | 
### Disable bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/disable
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
bot_id | integer | YES | 
### Edit bot (Permission: BOTS_WRITE, Security: SIGNED)
```
PATCH /ver1/bots/{bot_id}/update
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
name | string | YES | 
bot_id | integer | YES | 
pair | string | NO | Required if simple bot
max_active_deals | integer | NO | Required if composite bot
base_order_volume | number | YES | Base trade size
take_profit | number | YES | Target profit(percentage)
safety_order_volume | number | YES | Safety trade size
martingale_volume_coefficient | number | YES | 
martingale_step_coefficient | number | YES | 
max_safety_orders | integer | YES | Max safety trades count
active_safety_orders_count | integer | YES | Max active safety trades count
stop_loss_percentage | number | YES | 
cooldown | number | YES | 
pump_limit | number | YES | 
btc_price_limit | number | YES | 
safety_order_step_percentage | number | YES | Price deviation to open safety trades(percentage)
take_profit_type | string | YES | Percentage: base – from base trade, total – from total volume
### Supported markets list (Permission: NONE, Security: NONE)
```
GET /ver1/accounts/market_list
```
**Weight:**
1

**Parameters:**
NONE
### User connected exchanges list (Permission: ACCOUNTS_READ, Security: SIGNED)
```
GET /ver1/accounts
```
**Weight:**
1

**Parameters:**
NONE
### Add exchange account  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/new
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
type | string | YES | check market_name in market_list method. For example Poloniex, Bittrex
name | string | YES | Account name (any string)
api_key | string | YES | 
secret | string | YES | 
customer_id | string | NO | For Bitstamp
passphrase | string | NO | For Coinbase Pro (GDAX)
### Remove exchange connection  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/remove
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
account_id | integer | YES | Account id
### Information about all user balances on specified exchange  (Permission: ACCOUNTS_READ, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/account_table_data
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
account_id | integer | YES | Account id
### Information aboutl all user balances on specified exchange in pretty for pie chart format (Permission: ACCOUNTS_READ, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/pie_chart_data
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
account_id | integer | YES | Account id
### Rename exchange connection  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/rename
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
account_id | integer | YES | Account id
name | string | YES | 
### Load balances for specified exchange  (Permission: ACCOUNTS_READ, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/load_balances
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Description
------------ | ------------ | ------------ | ------------
account_id | integer | YES | 
### Test connectivity to the Rest API (Permission: NONE, Security: NONE)
```
GET /ver1/ping
```
**Weight:**
1

**Parameters:**
NONE
### Test connectivity to the Rest API and get the current server time (Permission: NONE, Security: NONE)
```
GET /ver1/time
```
**Weight:**
1

**Parameters:**
NONE
