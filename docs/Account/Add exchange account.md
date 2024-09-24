## Add exchange account<br>

**Description:** Adds a new exchange account<br>

**Permission:** ACCOUNTS_WRITE<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:green;background-color:white" > **POST**

<mark style="color:green;background-color:white" > **/ver1/accounts/new**

----------
<br>
<br>

**Parameters request**<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**type** | `string` | Yes |  | 3Commas of exchange code entity |
|**name** | `string` | Yes |  | Name of this exchange account. |
|**api_key**  | `string` | Yes |  | API-key from this exchange account |
|**secret**  | `string` | Yes |  | Secret-key from this exchange account |
|**address**  | `string` | No |  | Address of wallet. This parameter is required when `type` is set to `ethereumwallet` |
|**`customer_id**  | `string` | No |  | Unique customer ID provided by the Bitstamp exchange.<br>This parameter is required when `type` is set to `Bitstamp` |
|**passphrase**  | `string` | No |  | Secret phrase from this exchange account.<br> This parameter is required when `type` is set to `Coinbase` |
|**types_to_create**  | `array[string]` | No |  | Array of related account types to be created.<br> For example ['binance_margin'] |

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

**Example Request**<br>

```json
/v2/smart_trades/12345678
```
<br>
<br>

**Example Response and errors**<br>

<details>
<summary>Status: 200 OK</summary>
<br>

```json
{
    "id": 32849081,
    "auto_balance_period": 12,
    "auto_balance_portfolio_id": null,
    "auto_balance_currency_change_limit": null,
    "autobalance_enabled": false,
    "hedge_mode_available": false,
    "hedge_mode_enabled": false,
    "is_locked": false,
    "smart_trading_supported": true,
    "stats_supported": true,
    "trading_supported": true,
    "market_buy_supported": true,
    "market_sell_supported": true,
    "conditional_buy_supported": true,
    "bots_allowed": true,
    "bots_ttp_allowed": false,
    "bots_tsl_allowed": true,
    "gordon_bots_available": true,
    "multi_bots_allowed": true,
    "created_at": "2024-09-17T23:55:19.607Z",
    "updated_at": "2024-09-17T23:55:19.607Z",
    "last_auto_balance": null,
    "fast_convert_available": true,
    "grid_bots_allowed": true,
    "api_key_invalid": false,
    "market_icon": "https://3commas.io/img/exchanges/okex.png",
    "deposit_enabled": true,
    "include_in_summary": true,
    "supported_market_types": [
        "spot"
    ],
    "primary_display_currency_profit_percentage": {
        "currency": "USD",
        "amount": "-0.0"
    },
    "primary_display_currency_profit": {
        "currency": "USD",
        "amount": "-0.00000000000000000010999999999999999999993138892165683112"
    },
    "day_profit_primary_display_currency_percentage": {
        "currency": "USD",
        "amount": "-0.0"
    },
    "day_profit_primary_display_currency": {
        "currency": "USD",
        "amount": "-0.00000000000000000010999999999999999999993138892165683112"
    },
    "primary_display_currency_amount": {
        "currency": "USD",
        "amount": "0.00048395892787478689000000000000000000006861107834316888"
    },
    "total_primary_display_currency_profit": {
        "currency": "USD",
        "amount": -1.1e-19
    },
    "available_include_in_summary": true,
    "api_key": "4ce4943c-f478-46c3-b50b-70de4d1bc34d",
    "name": "test",
    "auto_balance_method": null,
    "auto_balance_error": null,
    "customer_id": null,
    "subaccount_name": null,
    "lock_reason": null,
    "btc_amount": "0.0000000080232449796548201579586071525673247181448663178",
    "usd_amount": "0.00048395892787478689000000000000000000006861107834316888",
    "day_profit_btc": "0.0000000000000000000000001579586071525673247181448663178",
    "day_profit_usd": "-0.00000000000000000010999999999999999999993138892165683112",
    "day_profit_btc_percentage": "0.0",
    "day_profit_usd_percentage": "-0.0",
    "btc_profit": "0.0000000000000000000000001579586071525673247181448663178",
    "usd_profit": "-0.00000000000000000010999999999999999999993138892165683112",
    "usd_profit_percentage": "-0.0",
    "btc_profit_percentage": "0.0",
    "total_btc_profit": "1.5795860715256732e-25",
    "total_usd_profit": "-1.1e-19",
    "pretty_display_type": "Okex",
    "exchange_name": "OKX Spot",
    "market_code": "okex",
    "api_keys_state": "ok"
}
```
</details>

