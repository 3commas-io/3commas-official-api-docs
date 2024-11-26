## Add exchange account<br>

**Description:** Adds a new exchange account<br>

{% hint style="warning" %}
Please note that connections using manually created API keys are available only to <strong>Expert</strong> plan subscribers and exclusively for <em>Binance</em> sub-accounts.
{% endhint %}

<br>

**Permission:** ACCOUNTS_WRITE<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:green"><strong>POST</strong>

<mark style="color:green"><strong>/ver1/accounts/new</strong>

----------
<br>
<br>

### Body Parameters<br>
<p>
   <strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   3Commas of exchange code entity
</p>
<p>
   <strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Name of this exchange account
</p>
<p>
   <strong>api_key</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   API-key from this exchange account
</p>
<p>
   <strong>secret</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Secret-key from this exchange account
</p>
<p>
   <strong>address</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Address of wallet. This parameter is required when <code>type</code> is set to <code>ethereumwallet</code>
</p>
<p>
   <strong>customer_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique customer ID provided by the Bitstamp exchange.<br>This parameter is required when <code>type</code> is set to <code>Bitstamp</code>
</p>
<p>
   <strong>passphrase</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Secret phrase from this exchange account.<br> This parameter is required when <code>type</code> is set to <code>Coinbase</code>
</p>
<p>
   <strong>types_to_create</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>`array[string]`</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Array of related account types to be created.<br> For example: [<code>binance_margin</code>]
</p>
<br>
<br>

### Response Parameters<br>
<p>
   <strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   ID of the exchange account entity
</p>
<p>
   <strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The name for the exchange account defined by the user
</p>
<p>
   <strong>exchange_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Name of this exchange account
</p>
<p>
   <strong>market_icon</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The URL link to the icon for this exchange
</p>
<p>
   <strong>market_code</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   3Commas of exchange code entity
</p>
<p>
   <strong>auto_balance_period</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   The interval, in hours, at which automatic portfolio balancing occurs
</p>
<p>
   <strong>auto_balance_portfolio_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   ID of the portfolio for which automatic balancing has been initiated
</p>
<p>
   <strong>autobalance_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether auto balance mode is enabled for this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>auto_balance_error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   A description comes up to explain why autobalance failed
</p>
<p>
   <strong>last_auto_balance</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   ISO 8601 datetime of when this Auto balance was last time 
</p>
<p>
   <strong>hedge_mode_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether hedge mode is available for this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>hedge_mode_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether hedge mode is enabled for this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>is_locked</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates if the account is locked (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>lock_reason</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   The reason for locking this account when <code>is_locked</code> is <code>true</code>
</p>
<p>
   <strong>smart_trading_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates if smart trading is supported (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>stats_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether statistic of profit are supported for this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>trading_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates if trading is supported at 3Commas (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>market_buy_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether creating a market buy order is supported on the exchange (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>market_sell_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether creating a market sell order is supported on the exchange (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>conditional_buy_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether creating a conditional buy order is supported on the exchange (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>bots_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether DCA Bot is enabled for this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>bots_ttp_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether the trailing take profit feature is enabled on this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>bots_tsl_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether the trading stop loss feature is enabled on this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>multi_bots_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether the Multi-Pair feature is supported for this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>fast_convert_available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether the [Sell All to BTC/USD](https://help.3commas.io/en/articles/5898691-rebalance-your-portfolio-with-sell-all-to-usdt-or-sell-all-to-btc) feature is enabled for this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>grid_bots_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether Grid Bot is enabled for this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
  <strong>api_key</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
  API key used for the account
</p>
<p>
  <strong>api_key_invalid</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
  Indicates whether the API key for this account is invalid (<code>true</code>) or not (<code>false</code>)
</p>
<p>
  <strong>api_keys_state</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
  Indicates the state of the API keys
</p>
<p>
  <strong>deposit_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
  Indicates whether the Deposit feature is enabled for this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
  <strong>available_include_in_summary</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
  Indicates whether this account is available to be included in the summary (<code>true</code>) or not (<code>false</code>)
</p>
<p>
  <strong>include_in_summary</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
  Indicates whether this account included in the summary (<code>true</code>) or not (<code>false</code>)
</p>
<p>
  <strong>supported_market_types</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
  The type of market supported by the connected exchange account
</p>
<p>
  <strong>customer_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
  Unique customer ID provided by the Bitstamp exchange
</p>
<p>
  <strong>btc_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
  Amount of Bitcoin in the account
</p>
<p>
  <strong>usd_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
  Amount in USD in the account
</p>
<p>
  <strong>day_profit_btc</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
  Daily profit in BTC
</p>
<p>
  <strong>day_profit_usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
  Daily profit in USD
</p>
<p>
  <strong>day_profit_btc_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
  Daily profit percentage in BTC
</p>
<p>
  <strong>day_profit_usd_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
  Daily profit percentage in USD
</p>
<p>
  <strong>btc_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
  Monthly profit in BTC
</p>
<p>
  <strong>usd_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
  Monthly profit in USD
</p>
<p>
  <strong>btc_profit_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
  Monthly profit percentage in BTC
</p>
<p>
<strong>usd_profit_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
Monthly profit percentage in USD
</p>
<p>
   <strong>total_btc_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Total profit in BTC
</p>
<p>
   <strong>total_usd_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Total profit in USD
</p>
<p>
   <strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   ISO 8601 datetime of when this Account entity was created
</p>
<p>
   <strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   ISO 8601 datetime of when this SmartTrade entity was updated
</p>
<br>
<br>

### Example Request<br>

```json
POST /ver1/accounts/new
```
```json
Body:
{
    "type": "binance",
    "name": "New account",
    "api_key": "6q4zuONXKixxxxxxx3K46W34w...",
    "secret": "7CfL1slTgxxxxxxxPDfoJSPxxxxIsOFx..."
}
```
<br>
<br>

### Example Response and errors<br>

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

<details>
<summary>Status: 400 Bad Request</summary><br>

```json
{
    "error": "record_invalid",
    "error_description": "Invalid parameters",
    "error_attributes": {
        "api_key": [
            "This account is already connected!"
        ]
    }
}
```
</details>
