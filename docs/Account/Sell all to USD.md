## Sell all to BTC<br>
<br>

**Description:**  Sells all assets on the exchange account in USD, creating orders on the exchange<br>

**Permission:** ACCOUNTS_WRITE<br>
**Security:** SIGNED<br>

{% hint style="info" %}
This endpoint works for the following exchanges: *Binance Spot*, *Binance Margin*, *Binance US*, *Coinbase Advanced Spot*, *Gemini Spot*, *Kraken Spot*, *Bybit Spot*, *GateIo*, *OKX Spot*, *Huobi Spot*, *Bitfinex Spot*, *Kucoin Spot*, *Bitstamp Spot*
{% endhint %}

<br>

<blockquote>

<code><mark style="color:green"><strong> POST </strong></mark></code>

<code>/ver1/accounts/{account_id}/sell_all_to_usd</code>

</blockquote>

<br>

{% hint style="warning" %}
When executing this request, all trading entities (bots, SmartTrade, trades, deals, orders, exception Signal Bot) will be stop and close at the 3Commas and the exchange
{% endhint %}

<br>
<br>

### Path Parameters<br>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this exchange account entity
</p>
<br>
<br>


### Response Parameters<br>

If successful, the response includes a copy of the updated [Account](./README.md) entity.

<br>

### Example request<br>

```
POST /ver1/accounts/12345678/sell_all_to_usd
```
<br>
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
        "amount": "-1.18"
    },
    "primary_display_currency_profit": {
        "currency": "USD",
        "amount": "-0.389719012720540078530880508799462572957617268153"
    },
    "day_profit_primary_display_currency_percentage": {
        "currency": "USD",
        "amount": "0.0614"
    },
    "day_profit_primary_display_currency": {
        "currency": "USD",
        "amount": "0.0200239312383869821608245791635003900071969565577"
    },
    "primary_display_currency_amount": {
        "currency": "USD",
        "amount": "32.609893809874959921469119491200537427042382731847"
    },
    "total_primary_display_currency_profit": {
        "currency": "USD",
        "amount": -0.3897190127205401
    },
    "available_include_in_summary": true,
    "api_key": "gyTAiGCgRe1hctsA1J",
    "name": "New name exchange",
    "auto_balance_method": null,
    "auto_balance_error": null,
    "customer_id": null,
    "subaccount_name": null,
    "lock_reason": null,
    "btc_amount": "0.0005191667038391071501073142164609103680211753",
    "usd_amount": "32.609893809874959921469119491200537427042382731847",
    "day_profit_btc": "0.000000166447295963256920306806738688145799350043270551",
    "day_profit_usd": "0.0200239312383869821608245791635003900071969565577",
    "day_profit_btc_percentage": "0.03",
    "day_profit_usd_percentage": "0.06",
    "btc_profit": "-0.0000244065186818818498926857835390896319788247",
    "usd_profit": "-0.389719012720540078530880508799462572957617268153",
    "usd_profit_percentage": "-1.18",
    "btc_profit_percentage": "-4.49",
    "total_btc_profit": "-2.440651868188185e-05",
    "total_usd_profit": "-0.3897190127205401",
    "pretty_display_type": "BybitSpot",
    "exchange_name": "Bybit Spot",
    "market_code": "bybit_spot",
    "api_keys_state": "ok"
}
```

<details>
<summary>Status: 401 Unauthorized</summary><br>

```json
{
    "error": "signature_invalid",
    "error_description": "Provided signature is invalid"
}

```
</details>