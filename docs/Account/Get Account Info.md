## Get Account Info<br>

**Description:** Shows information about a specific account using its ID<br>

**Permission:** ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue;background-color:white" > **GET**

<mark style="color:blue;background-color:white" > **/ver1/accounts/{account_id}**

----------

<br>
<br>

**Path Parameters**<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**account_id**  | `integer` | Yes |  | Unique 3Commas ID for this exchange account entity |

<br>
<br>

**Parameters response**<br>

| Name | Type |Description |
|------|------|------------|
| **id** | `integer` | ID of the exchange account entity |
| **name** | `string`  | The name for the exchange account defined by the user |
| **exchange_name** | `string` | Name of this exchange account |
| **market_icon** | `string` | Icon of the exchange  |
| **market_code** | `string` |3Commas of exchange code entity |
| **autobalance_enabled** | `boolean` | Indicates whether auto balance  mode is enabled for this account |
| **auto_balance_period** | `integer` | TThe interval, in hours, at which automatic portfolio balancing occurs |
| **auto_balance_portfolio_id** | `integer` | ID of the portfolio for which automatic balancing has been initiated |
| **autobalance_enabled** | `boolean` | Indicates whether auto balance  mode is enabled for this account |
| **auto_balance_error** | `null` or `string` | A description comes up to explain why autobalance failed |
| **last_auto_balance** | `null` or `string`  | ISO 8601 datetime `string` of when this Auto balance was last time  |
| **hedge_mode_available** | `boolean` | Indicates whether hedge mode is available for this account |
| **hedge_mode_enabled** | `boolean` | Indicates whether hedge mode is enabled for this account |
| **is_locked** | `boolean` | Indicates if the account is locked |
| **lock_reason** | `null` or `string`  | The reason for locking this account in case  `is_locked` is `true` |
| **smart_trading_supported** | `boolean` | Indicates if smart trading is supported |
| **stats_supported** | `boolean` | Indicates whether statistic of profit are supported for this account |
| **trading_supported** | `boolean` | Indicates if trading is supported at 3Commas |
| **market_buy_supported** | `boolean` | Indicates whether creating a market buy order is supported on the exchange |
| **market_sell_supported** | `boolean` | Indicates whether creating a market sell order is supported on the exchange  |
| **conditional_buy_supported** | `boolean` | Indicates whether creating a conditional buy order is supported on the exchange |
| **bots_allowed** | `boolean` | Indicates whether DCA Bot is enabled for this account |
| **bots_ttp_allowed** | `boolean` | Indicates whether the trailing take profit feature is enabled on this account |
| **bots_tsl_allowed** | `boolean` | Indicates whether the trading stop loss feature is enabled on this account |
| **multi_bots_allowed** | `boolean` | Indicates whether the Multi-Pair feature is supported for this account |
| **fast_convert_available** | `boolean` | Indicates whether the "Sell All to BTC/USD" feature is enabled for this account |
| **grid_bots_allowed** | `boolean` | Indicates whether Grid Bot is enabled for this account |
| **api_key** | `string` | API key used for the account |
| **api_key_invalid** | `boolean` | Indicates whether the API key for this account is invalid |
| **api_keys_state** | `string` | Indicates the state of the API keys |
| **deposit_enabled** | `boolean`  | Indicates whether the Deposit feature is enabled for this account |
| **available_include_in_summary** | `boolean` | Indicates whether this account is available to be included in the summary |
| **include_in_summary** | `boolean`  |  Indicates whether this account included in the summary  |
| **supported_market_types** | `array` | The type of market supported by the connected exchange account |
| **customer_id**  | `string` | Unique customer ID provided by the Bitstamp exchange |
| **btc_amount** | `string` | Amount of Bitcoin in the account |
| **usd_amount** | `string` |  Amount in USD in the account |
| **day_profit_btc** | `string` | Daily profit in BTC |
| **day_profit_usd** | `string`  | Daily profit in USD  |
| **day_profit_btc_percentage** | `number` | Daily profit percentage in BTC |
| **day_profit_usd_percentage** | `number` | Daily profit percentage in USD |
| **btc_profit** | `number` | Monthly profit in BTC |
| **usd_profit**  | `number` | Monthly profit in USD  |
| **btc_profit_percentage** | `number` | Monthly profit percentage in BTC |
| **usd_profit_percentage** | `number` | Monthly profit percentage in USD |
| **total_btc_profit**  | `number` | Total profit in BTC |
| **total_usd_profit** | `number` | Total profit in USD |
| **created_at** | `string` | ISO 8601 datetime `string` of when this Account entity was created |
| **updated_at** | `string` | ISO 8601 datetime `string` of when this SmartTrade entity was updated |


<br>
<br>

**Example request**<br>

```json
/ver1/accounts/12345678
```
<br>
<br>

**Example Response and errors**<br>

<details>

<summary>Status: 200 OK</summary>

```json
{
    "id": 12345678,
    "auto_balance_period": 12,
    "auto_balance_portfolio_id": null,
    "auto_balance_portfolio": null,
    "auto_balance_currency_change_limit": null,
    "autobalance_enabled": false,
    "hedge_mode_available": false,
    "hedge_mode_enabled": false,
    "is_locked": false,
    "smart_trading_supported": true,
    "smart_selling_supported": true,
    "available_for_trading": {},
    "stats_supported": true,
    "trading_supported": true,
    "market_buy_supported": true,
    "market_sell_supported": true,
    "conditional_buy_supported": true,
    "bots_allowed": true,
    "bots_ttp_allowed": true,
    "bots_tsl_allowed": true,
    "gordon_bots_available": true,
    "multi_bots_allowed": true,
    "created_at": "2023-06-19T16:50:57.303Z",
    "updated_at": "2023-06-19T17:16:29.008Z",
    "last_auto_balance": null,
    "fast_convert_available": true,
    "grid_bots_allowed": true,
    "api_key_invalid": false,
    "market_icon": "https://3commas.io/img/exchanges/binance.png",
    "deposit_enabled": true,
    "include_in_summary": true,
    "supported_market_types": [
        "spot"
    ],
    "primary_display_currency_profit_percentage": {
        "currency": "USD",
        "amount": "-2.48"
    },
    "primary_display_currency_profit": {
        "currency": "USD",
        "amount": "-0.695668291131228846704187732519297582723554246"
    },
    "day_profit_primary_display_currency_percentage": {
        "currency": "USD",
        "amount": "-1.5968"
    },
    "day_profit_primary_display_currency": {
        "currency": "USD",
        "amount": "-0.4441768299751186373103375288155938785363926290406"
    },
    "primary_display_currency_amount": {
        "currency": "USD",
        "amount": "27.371739251908771153295812267480702417276445754"
    },
    "total_primary_display_currency_profit": {
        "currency": "USD",
        "amount": 3.371739251908771
    },
    "available_include_in_summary": true,
    "api_key": "yzNYzv8a0VEBwsrhc3MDpHZ7XMqa1vJqSqHzpfjjKpdFF9SbQsVQKRl3hKNyZU45",
    "name": "My Binance US",
    "auto_balance_method": null,
    "auto_balance_error": null,
    "customer_id": null,
    "subaccount_name": null,
    "lock_reason": null,
    "btc_amount": "0.00048306876986613246844096791630894498302707",
    "usd_amount": "27.371739251908771153295812267480702417276445754",
    "day_profit_btc": "0.00000349955240609775369364264288301905710155484597542",
    "day_profit_usd": "-0.4441768299751186373103375288155938785363926290406",
    "day_profit_btc_percentage": "0.73",
    "day_profit_usd_percentage": "-1.6",
    "btc_profit": "-0.00003240253771427353155903208369105501697293",
    "usd_profit": "-0.695668291131228846704187732519297582723554246",
    "usd_profit_percentage": "-2.48",
    "btc_profit_percentage": "-6.29",
    "total_btc_profit": "-0.0003454699708792625",
    "total_usd_profit": "3.371739251908771",
    "pretty_display_type": "BinanceUs",
    "exchange_name": "Binance US Spot",
    "market_code": "binance_us",
    "api_keys_state": "ok"
}
```
</details>

<details>
<summary>Status: 404 Not Found</summary>

```json
{
    "error": "not_found",
    "error_description": "Not Found"
}
```
</details>