# Public Rest API for 3commas.io (2018-09-13)
# General API Information
* The base endpoint is: **https://3commas.io/public/api**
* All endpoints return either a JSON object or array.
* Data is returned in **ascending** order. Oldest first, newest last.
* PAIR format is **QUOTE_BASE** (for example USDT_BTC) for all exchanges (no matter what format the exchange is using).
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

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
limit | integer | NO |  (50) | Limit records
offset | integer | NO |   | Offset records
account_id | integer | NO |   | Account to show bots on. Return all if not specified. Gather this from GET /ver1/accounts
bot_id | integer | NO |   | Bot show deals on. Return all if not specified
scope | string | NO |   | active - active deals, finished - finished deals, completed - successfully completed, any other value or null (default) - all deals
### Update max safety orders (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/deals/{deal_id}/update_max_safety_orders
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
max_safety_orders | integer | YES |   | New maximum safety orders value
deal_id | integer | YES |   | 
### Panic sell deal (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/deals/{deal_id}/panic_sell
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
deal_id | integer | YES |   | 
### Cancel deal (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/deals/{deal_id}/cancel
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
deal_id | integer | YES |   | 
### Update take profit condition. Deal status should be bought (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/deals/{deal_id}/update_tp
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
new_take_profit_percentage | number | YES |   | New take profit value
deal_id | integer | YES |   | 
### Info about specific deal (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/deals/{deal_id}/show
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
deal_id | integer | YES |   | 
### Black List for bot pairs (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots/pairs_black_list
```
**Weight:**
1

**Parameters:**
NONE
### Create or Update pairs BlackList for bots (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/update_pairs_black_list
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
pairs | array | YES |   | 
### Create bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/create_bot
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
name | string | YES |   | 
account_id | integer | YES |   | id from GET /ver1/accounts
pairs | array | YES |   | 
max_active_deals | integer | NO |  (1) | 
base_order_volume | number | YES |   | Base trade size
base_order_volume_type | string | NO | quote_currency, base_currency, percent, xbt  | base order volume currency
take_profit | number | YES |   | Target profit(percentage)
safety_order_volume | number | YES |   | Safety trade size
safety_order_volume_type | string | NO | quote_currency, base_currency, percent, xbt  | safety order volume currency
martingale_volume_coefficient | number | YES |  (1) | 
martingale_step_coefficient | number | YES |  (1) | 
max_safety_orders | integer | YES |   | Max safety trades count
active_safety_orders_count | integer | YES |   | Max active safety trades count
stop_loss_percentage | number | NO |   | 
cooldown | number | NO |   | 
btc_price_limit | number | NO |   | 
strategy | string | NO | short, long (long) | 
safety_order_step_percentage | number | YES |   | Price deviation to open safety trades(percentage)
take_profit_type | string | YES |   | Percentage: base – from base trade, total – from total volume
strategy_list | array | YES |   | For manual signals: [{"strategy":"nonstop"}] or []<br>                                                        For non-stop(1 pair only): [{"strategy":"nonstop"}]<br>                                                        QFL: {"options"=>{"type"=>"original"}, "strategy"=>"qfl"}] <br>                                                        TradingView: [{"options"=>{"time"=>"5m", "type"=>"buy_or_strong_buy"}, "strategy"=>"trading_view"} 
### Get bot stats (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots/stats
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | NO |   | Account to show on. Null - show for all. Gather this from GET /ver1/accounts
bot_id | integer | NO |   | Bots to show on. Null - show for all
### User bots (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots
```
**Weight:**
1

**Parameters:**
NONE
### Edit bot (Permission: BOTS_WRITE, Security: SIGNED)
```
PATCH /ver1/bots/{bot_id}/update
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
name | string | YES |   | 
pairs | array | YES |   | 
max_active_deals | integer | NO |  (1) | 
base_order_volume | number | YES |   | Base trade size
base_order_volume_type | string | NO | quote_currency, base_currency, percent, xbt  | base order volume currency
take_profit | number | YES |   | Target profit(percentage)
safety_order_volume | number | YES |   | Safety trade size
safety_order_volume_type | string | NO | quote_currency, base_currency, percent, xbt  | safety order volume currency
martingale_volume_coefficient | number | YES |  (1) | 
martingale_step_coefficient | number | YES |  (1) | 
max_safety_orders | integer | YES |   | Max safety trades count
active_safety_orders_count | integer | YES |   | Max active safety trades count
stop_loss_percentage | number | NO |   | 
cooldown | number | NO |   | 
btc_price_limit | number | NO |   | 
safety_order_step_percentage | number | YES |   | Price deviation to open safety trades(percentage)
take_profit_type | string | YES |   | Percentage: base – from base trade, total – from total volume
strategy_list | array | YES |   | For manual signals: [{"strategy":"nonstop"}] or []<br>                                                          For non-stop(1 pair only): [{"strategy":"nonstop"}]<br>                                                          QFL: {"options"=>{"type"=>"original"}, "strategy"=>"qfl"}] <br>                                                          TradingView: [{"options"=>{"time"=>"5m", "type"=>"buy_or_strong_buy"}, "strategy"=>"trading_view"} 
bot_id | integer | YES |   | 
### Disable bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/disable
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
bot_id | integer | YES |   | 
### Enable bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/enable
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
bot_id | integer | YES |   | 
### Start new deal asap (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/start_new_deal
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
pair | string | NO |   | Can be omited for simple bot
skip_signal_checks | boolean | NO |   | If false or not specified then all paramaters like signals or volume filters will be checked. If true - those checks will be skipped
skip_open_deals_checks | boolean | NO |   | If true then you will be allowed to open more then one deal per pair in composite bot
bot_id | integer | YES |   | 
### Delete bot (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/delete
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
bot_id | integer | YES |   | 
### Panic sell all bot deals (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/panic_sell_all_deals
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
bot_id | integer | YES |   | 
### Cancel all bot deals (Permission: BOTS_WRITE, Security: SIGNED)
```
POST /ver1/bots/{bot_id}/cancel_all_deals
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
bot_id | integer | YES |   | 
### Bot info (Permission: BOTS_READ, Security: SIGNED)
```
GET /ver1/bots/{bot_id}/show
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
bot_id | integer | YES |   | 
### Add exchange account  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/new
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
type | string | YES |   | check market_name in market_list method. For example Poloniex, Bittrex
name | string | YES |   | Account name (any string)
api_key | string | YES |   | 
secret | string | YES |   | 
customer_id | string | NO |   | For Bitstamp
passphrase | string | NO |   | For Coinbase Pro (GDAX)
### User connected exchanges(and EthereumWallet) list (Permission: ACCOUNTS_READ, Security: SIGNED)
```
GET /ver1/accounts
```
**Weight:**
1

**Parameters:**
NONE
### Supported markets list (Permission: NONE, Security: NONE)
```
GET /ver1/accounts/market_list
```
**Weight:**
1

**Parameters:**
NONE
### Load balances for specified exchange  (Permission: ACCOUNTS_READ, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/load_balances
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | 
### Rename exchange connection  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/rename
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | Account id
name | string | YES |   | 
### Information aboutl all user balances on specified exchange in pretty for pie chart format (Permission: ACCOUNTS_READ, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/pie_chart_data
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | Account id
### Information about all user balances on specified exchange  (Permission: ACCOUNTS_READ, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/account_table_data
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | Account id
### Remove exchange connection  (Permission: ACCOUNTS_WRITE, Security: SIGNED)
```
POST /ver1/accounts/{account_id}/remove
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | Account id
### Cancel SmartTrade (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/cancel
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
smart_trade_id | integer | YES |   | 
### Sell currency immediately (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/panic_sell
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
smart_trade_id | integer | YES |   | 
### Get SmartTrade history (Permission: SMART_TRADE_READ, Security: SIGNED)
```
GET /ver1/smart_trades
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
limit | integer | NO |   | Limit records
offset | integer | NO |   | Offset records
account_id | integer | NO |   | Account to show smart_trades on. Pass null (default) - show all
scope | string | NO |   | active - show only active trades, finished - history of closed trades, any other value or null (default) - all trades
type | string | NO |   | SmartTrade::SmartSale , SmartTrade::Classic , SmartTrade::ConditionalBuy
### Create SmartSale (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/create_smart_sell
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | id from GET /ver1/accounts
pair | string | YES |   | 
units_to_buy | number | YES |   | 
average_buy_price | number | YES |   | 
take_profit_enabled | boolean | YES |   | 
take_profit_type | string | NO | classic, step_sell (classic) | classic - common take profit, step_sell - step sell take profit
take_profit_price_condition | number | YES |   | Required if take_profit_type = classic
take_profit_step_orders | array | YES |   | Required if take_profit_type = step_sell. 4 steps max. Format: [{percent: 50, price: 100, price_method: bid,ask,last}, ...]
take_profit_step_orders[percent] | number | YES |   | Required if take_profit_step_orders
take_profit_step_orders[price] | number | YES |   | Required if take_profit_step_orders
take_profit_step_orders[price_method] | string | YES | bid, ask, last (bid) | Required if take_profit_step_orders
take_profit_price_method | string | NO | bid, ask, last (bid) | Price type for take profit(bid,asl,last)
take_profit_sell_method | string | NO | market, limit (market) | 
take_profit_sell_order_price | number | YES |   | Required if limit
trailing_take_profit | boolean | NO |   | 
trailing_take_profit_step | number | NO |   | require if trailing_take_profit
stop_loss_enabled | boolean | YES |   | 
stop_loss_price_condition | number | YES |   | 
stop_loss_price_method | string | NO | bid, ask, last (bid) | Price type for stop loss
stop_loss_sell_method | string | NO | market, limit (market) | 
stop_loss_sell_order_price | number | YES |   | Required if limit
trailing_stop_loss | boolean | NO |   | 
stop_loss_timeout_enabled | boolean | NO |   | 
stop_loss_timeout_seconds | integer | NO |  (300) | Timeout in seconds
note | string | NO |   | 
### Create SmartTrade (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/create_smart_trade
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
account_id | integer | YES |   | id from GET /ver1/accounts
pair | string | YES |   | 
units_to_buy | number | YES |   | Amount of units to buy
buy_price | number | YES |   | 
buy_method | string | NO | limit, market, conditional (limit) | limit, market, conditional
trailing_buy_enabled | boolean | NO |   | 
trailing_buy_step | number | YES |  (5.0) | Required if trailing_buy_enabled
take_profit_enabled | boolean | YES |   | 
take_profit_type | string | NO | classic, step_sell  | classic - common take profit, step_sell - step sell take profit
take_profit_price_condition | number | YES |   | Required if take_profit_type = classic
take_profit_step_orders | array | YES |   | Required if take_profit_type = step_sell. 4 steps max. Format: [{percent: 50, price: 100, price_method: bid,ask,last}, ...]
take_profit_step_orders[percent] | number | YES |   | Required if take_profit_step_orders
take_profit_step_orders[price] | number | YES |   | Required if take_profit_step_orders
take_profit_step_orders[price_method] | string | YES | bid, ask, last (bid) | Required if take_profit_step_orders
take_profit_price_method | string | NO | bid, ask, last (bid) | Price type for take profit
take_profit_sell_method | string | NO | market, limit (market) | 
take_profit_sell_order_price | number | YES |   | Required if limit
trailing_take_profit | boolean | NO |   | 
trailing_take_profit_step | number | NO |   | require if trailing_take_profit
stop_loss_enabled | boolean | YES |   | 
stop_loss_price_condition | number | YES |   | Required if stop_loss_enabled
stop_loss_price_method | string | NO | bid, ask, last (bid) | Price type for stop loss
stop_loss_sell_method | string | NO | market, limit (market) | 
stop_loss_sell_order_price | number | YES |   | Required if limit
trailing_stop_loss | boolean | NO |   | 
stop_loss_timeout_enabled | boolean | NO |   | 
stop_loss_timeout_seconds | integer | NO |  (300) | timeout in seconds
note | string | NO |   | 
### Refresh SmartTrade state (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/{smart_trade_id}/force_process
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
smart_trade_id | integer | YES |   | 
### Edit SmartTrade/SmartSale (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
PATCH /ver1/smart_trades/{smart_trade_id}/update
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
buy_price | number | NO |   | Available if Conditional SmartTrade
average_buy_price | number | NO |   | Available if SmartSale
trailing_buy_enabled | boolean | NO |   | Available if Conditional SmartTrade
trailing_buy_step | number | NO |   | Available if trailing_buy_enabled
take_profit_enabled | boolean | YES |   | 
take_profit_type | string | NO | classic, step_sell  | classic - common take profit, step_sell - step sell take profit
take_profit_price_condition | number | NO |   | Available if take_profit_type classic
take_profit_step_orders | array | NO |   | Available if take_profit_type = classic.\n If null - steps won't be changed.\n                                                    In order to apply changes - send a new set of steps, which contains new and previous steps that were not edited.
take_profit_step_orders[percent] | number | YES |   | Required if take_profit_step_orders
take_profit_step_orders[price] | number | YES |   | Required if take_profit_step_orders
take_profit_step_orders[price_method] | string | YES | bid, ask, last  | Required if take_profit_step_orders
take_profit_step_orders[position] | integer | YES |   | Required if take_profit_step_orders. Must be unique(for new and previous steps in SmartTrade scope) and greater then 0
take_profit_price_method | string | NO | bid, ask, last  | Price type for take profit
take_profit_sell_method | string | NO | market, limit  | 
take_profit_sell_order_price | number | NO |   | Available if take_profit_sell_method = limit
trailing_take_profit | boolean | NO |   | Available if take_profit_sell_method = market
trailing_take_profit_step | number | NO |   | Available if trailing_take_profit
stop_loss_enabled | boolean | YES |   | 
stop_loss_price_condition | number | NO |   | 
stop_loss_price_method | string | NO | bid, ask, last  | Price type for stop loss
stop_loss_sell_method | string | NO | market, limit  | 
stop_loss_sell_order_price | number | NO |   | Available if stop_loss_sell_method = limit
trailing_stop_loss | boolean | NO |   | Available if stop_loss_sell_method = market
stop_loss_timeout_enabled | boolean | NO |   | 
stop_loss_timeout_seconds | integer | NO |   | Available if stop_loss_timeout_enabled
note | string | NO |   | 
smart_trade_id | integer | YES |   | 
### Step panic sell (Permission: SMART_TRADE_WRITE, Security: SIGNED)
```
POST /ver1/smart_trades/{smart_trade_id}/step_panic_sell
```
**Weight:**
1

**Parameters:**

Name | Type | Mandatory | Values(default) | Description
------------ | ------------ | ------------ | ------------ | ------------
step_id | integer | YES |   | 
smart_trade_id | integer | YES |   | 
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
