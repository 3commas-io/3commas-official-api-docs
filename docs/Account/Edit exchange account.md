## Edit exchange account<br>
<br>

**Description:** Updates an exchange account using its ID, including updating API keys for reconnecting the account<br>

**Permission:** ACCOUNTS_WRITE<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:green"><strong> POST </strong></mark></code>

<code>/ver1/accounts/update</code>

</blockquote>

<br>

### Body Parameters<br>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this exchange account entity
</p>
<p>
   <strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Name of this exchange account
</p>
<p>
   <strong>api_key</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   API Key from this exchange account
</p>
<p>
   <strong>secret</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Secret Key from this exchange account
</p>
<p>
   <strong>customer_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Unique customer ID provided by the Bitstamp exchange<br>
   This parameter is required when <code>type<code> is set to <strong>Bitstamp</strong>
</p>
<p>
   <strong>passphrase</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Secret phrase from this exchange account<br>
   This parameter is required when <code>type<code> is set to <strong>Coinbase</strong>
</p>
<p>
   <strong>address</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Address of wallet<br>
   This parameter is required when <code>type<code> is set to <strong>Ethereumwallet</strong>
</p>
<p>
   <strong>include_in_summary</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Choose whether this account should be included in the summary statistics (<code>true</code>) or not (<code>false</code>)
</p>
<br>

### Parameters response<br>
<p>
    <strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
    ID of the exchange account entity
</p>
<p>
    <strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    The name for the exchange account set by the user
</p>
<p>
    <strong>exchange_name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Name of this exchange account
<p>
<p>
    <strong>market_icon</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Icon of the exchange
</p>
<p>
    <strong>market_code</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    3Commas of exchange code entity
</p>
<p>
    <strong>autobalance_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether auto balance mode is enabled for this account (<code>true</code>) or not (<code>false</code>)</p>
<p>
    <strong>auto_balance_period</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code><br>
    The interval, in hours, at which automatic portfolio balancing occurs
</p>
<p>
    <strong>auto_balance_portfolio_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <code>integer</code> or <code>null</code><br>
    ID of the portfolio for which automatic balancing has been initiated
</p>
<p>
    <strong>auto_balance_error</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
    A description comes up to explain why auto-balance failed
</p>
<p>
    <strong>last_auto_balance</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code> <br>
    ISO 8601 datetime <code>string</code> of when this auto-balance was last time
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
    <strong>lock_reason</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>null</code> or <code>string</code><br>
    The reason for locking this account in case  <code>is_locked</code> is <code>true</code>
</p>
<p>
    <strong>smart_trading_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates if smart trading is supported (<code>true</code>) or not (<code>false</code>)
</p>
<p>
    <strong>stats_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether profit statistics are supported for this account (<code>true</code>) or not (<code>false</code>)
</p>
<p>
    <strong>trading_supported</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether trading is supported in 3Commas (<code>true</code>) or not (<code>false</code>)
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
    <strong>bots_ttp_allowed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
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
     Indicates whether Grid Bot is enabled for this account (<code>true</code>) or not (<code>false</code>)</p>
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
    <strong>customer_id</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
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
    <strong>day_profit_etc</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Daily profit in BTC
</p>
<p>
    <strong>day_profit_usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    Daily profit in USD
</p>
<p>
    <strong>day_profit_btc_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    Daily profit percentage in BTC<br>
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
    <strong>usd_profit</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    Monthly profit in USD
</p>
<p>
    <strong>btc_profit_percentage</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    Monthly profit percentage in BTC
</p>
<p>
    <strong>usd_profit_percentage</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    Monthly profit percentage in USD
</p>
<p>
    <strong>total_btc_profit</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    Total profit in BTC
</p>
<p>
    <strong>total_usd_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
    Total profit in USD
</p>
<p>
    <strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    ISO 8601 datetime string of when this Account entity was created
</p>
<p>
    <strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
    ISO 8601 datetime string of when this SmartTrade entity was updated
</p>

### Example request<br>

```
POST /ver1/accounts/update?account_id=12345678&name=New%20name%20exchange
```
<br>

### Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
{
    "id": 12345678,
    "auto_balance_period": 12,
    "auto_balance_portfolio_id": null,
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
    "created_at": "2024-08-29T14:16:10.830Z",
    "updated_at": "2024-09-12T21:17:05.627Z",
    "last_auto_balance": null,
    "fast_convert_available": true,
    "grid_bots_allowed": true,
    "api_key_invalid": false,
    "market_icon": "https://3commas.io/img/exchanges/bybit.png",
    "deposit_enabled": false,
    "include_in_summary": true,
    "supported_market_types": [
        "spot"
    ],
    "primary_display_currency_profit_percentage": {
        "currency": "USD",
        "amount": "1.27"
    },
    "primary_display_currency_profit": {
        "currency": "USD",
        "amount": "0.41977392126027012455593960354579615351317609077582"
    },
    "day_profit_primary_display_currency_percentage": {
        "currency": "USD",
        "amount": "2.1862"
    },
    "day_profit_primary_display_currency": {
        "currency": "USD",
        "amount": "0.71497909537100944606510928410135170906899572324142"
    },
    "primary_display_currency_amount": {
        "currency": "USD",
        "amount": "33.41938674385577012455593960354579615351317609077582"
    },
    "total_primary_display_currency_profit": {
        "currency": "USD",
        "amount": 0.4197739212602701
    },
    "available_include_in_summary": true,
    "api_key": "gyTAiGCgRe1hctsA1J",
    "name": "New name exchange",
    "auto_balance_method": null,
    "auto_balance_error": null,
    "customer_id": null,
    "subaccount_name": null,
    "lock_reason": null,
    "btc_amount": "0.000576100372659584112793557824740668987777435277",
    "usd_amount": "33.41938674385577012455593960354579615351317609077582",
    "day_profit_btc": "0.000008477241194296886998580144867983802592279153250469",
    "day_profit_usd": "0.71497909537100944606510928410135170906899572324142",
    "day_profit_btc_percentage": "1.49",
    "day_profit_usd_percentage": "2.19",
    "btc_profit": "0.000032527150138595112793557824740668987777435277",
    "usd_profit": "0.41977392126027012455593960354579615351317609077582",
    "usd_profit_percentage": "1.27",
    "btc_profit_percentage": "5.98",
    "total_btc_profit": "3.2527150138595115e-05",
    "total_usd_profit": "0.41977392126027013",
    "pretty_display_type": "BybitSpot",
    "exchange_name": "Bybit Spot",
    "market_code": "bybit_spot",
    "api_keys_state": "ok"
}
```
</details>