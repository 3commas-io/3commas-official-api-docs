## Add exchange account

**Description:** Adds a new exchange account

:::warning
Please note that connections using manually created API keys are available only to Expert plan subscribers and exclusively for Binance sub-accounts.
:::

**Permission:** ACCOUNTS_WRITE
**Security:** SIGNED

----------

<mark style={{color:"green"}}>POST</mark> <mark style={{color:"green"}}>POST</mark>

<mark style={{color:"green"}}>/ver1/accounts/new</mark>

----------

### Body Parameters

   type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   3Commas of exchange code entity

   name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Name of this exchange account

   api_key&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   API-key from this exchange account

   secret&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Secret-key from this exchange account

   address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Address of wallet. This parameter is required when <code>type</code> is set to <code>ethereumwallet</code>

   customer_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique customer ID provided by the Bitstamp exchange.This parameter is required when <code>type</code> is set to <code>Bitstamp</code>

   passphrase&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Secret phrase from this exchange account. This parameter is required when <code>type</code> is set to <code>Coinbase</code>

   types_to_create&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>`array[string]`</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Array of related account types to be created. For example: [<code>binance_margin</code>]

### Response Parameters

   id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   ID of the exchange account entity

   name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The name for the exchange account defined by the user

   exchange_name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Name of this exchange account

   market_icon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The URL link to the icon for this exchange

   market_code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   3Commas of exchange code entity

   auto_balance_period&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   The interval, in hours, at which automatic portfolio balancing occurs

   auto_balance_portfolio_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   ID of the portfolio for which automatic balancing has been initiated

   autobalance_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether auto balance mode is enabled for this account (<code>true</code>) or not (<code>false</code>)

   auto_balance_error&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
   A description comes up to explain why autobalance failed

   last_auto_balance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
   ISO 8601 datetime of when this Auto balance was last time

   hedge_mode_available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether hedge mode is available for this account (<code>true</code>) or not (<code>false</code>)

   hedge_mode_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether hedge mode is enabled for this account (<code>true</code>) or not (<code>false</code>)

   is_locked&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates if the account is locked (<code>true</code>) or not (<code>false</code>)

   lock_reason&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code>
   The reason for locking this account when <code>is_locked</code> is <code>true</code>

   smart_trading_supported&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates if smart trading is supported (<code>true</code>) or not (<code>false</code>)

   stats_supported&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether statistic of profit are supported for this account (<code>true</code>) or not (<code>false</code>)

   trading_supported&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates if trading is supported at 3Commas (<code>true</code>) or not (<code>false</code>)

   market_buy_supported&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether creating a market buy order is supported on the exchange (<code>true</code>) or not (<code>false</code>)

   market_sell_supported&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether creating a market sell order is supported on the exchange (<code>true</code>) or not (<code>false</code>)

   conditional_buy_supported&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether creating a conditional buy order is supported on the exchange (<code>true</code>) or not (<code>false</code>)

   bots_allowed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether DCA Bot is enabled for this account (<code>true</code>) or not (<code>false</code>)

   bots_ttp_allowed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether the trailing take profit feature is enabled on this account (<code>true</code>) or not (<code>false</code>)

   bots_tsl_allowed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether the trading stop loss feature is enabled on this account (<code>true</code>) or not (<code>false</code>)

   multi_bots_allowed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether the Multi-Pair feature is supported for this account (<code>true</code>) or not (<code>false</code>)

   fast_convert_available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether the [Sell All to BTC/USD](https://help.3commas.io/en/articles/5898691-rebalance-your-portfolio-with-sell-all-to-usdt-or-sell-all-to-btc) feature is enabled for this account (<code>true</code>) or not (<code>false</code>)

   grid_bots_allowed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether Grid Bot is enabled for this account (<code>true</code>) or not (<code>false</code>)

  api_key&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
  API key used for the account

  api_key_invalid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
  Indicates whether the API key for this account is invalid (<code>true</code>) or not (<code>false</code>)

  api_keys_state&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
  Indicates the state of the API keys

  deposit_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
  Indicates whether the Deposit feature is enabled for this account (<code>true</code>) or not (<code>false</code>)

  available_include_in_summary&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
  Indicates whether this account is available to be included in the summary (<code>true</code>) or not (<code>false</code>)

  include_in_summary&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
  Indicates whether this account included in the summary (<code>true</code>) or not (<code>false</code>)

  supported_market_types&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code>
  The type of market supported by the connected exchange account

  customer_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
  Unique customer ID provided by the Bitstamp exchange

  btc_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
  Amount of Bitcoin in the account

  usd_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
  Amount in USD in the account

  day_profit_btc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
  Daily profit in BTC

  day_profit_usd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
  Daily profit in USD

  day_profit_btc_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
  Daily profit percentage in BTC

  day_profit_usd_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
  Daily profit percentage in USD

  btc_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
  Monthly profit in BTC

  usd_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
  Monthly profit in USD

  btc_profit_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
  Monthly profit percentage in BTC

usd_profit_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
Monthly profit percentage in USD

   total_btc_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Total profit in BTC

   total_usd_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Total profit in USD

   created_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   ISO 8601 datetime of when this Account entity was created

   updated_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   ISO 8601 datetime of when this SmartTrade entity was updated

### Example Request

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

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

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
<summary>Status: 400 Bad Request</summary>

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
