## Sell all to BTC<br>

**Description:**  Sells all assets on the exchange account in BTC, creating orders on the exchange<br>

**Permission:** ACCOUNTS_WRITE<br>
**Security:** SIGNED<br>

{% hint style="info" %}
This endpoint works for the following exchanges: **Binance Spot**, **Binance Margin**, **Binance US**, **Coinbase Advanced Spot**, **Gemini Spot**, **Kraken Spot**, **Bybit Spot**, **GateIo**, **OKX Spot**, **Huobi Spot**, **Bitfinex Spot**, **Kucoin Spot**, **Bitstamp Spot**
{% endhint %}

<br>
<br>

----------

<mark style="color:green;background-color:white"> **POST**

<mark style="color:green;background-color:white"> **/ver1/accounts/{account_id}/sell_all_to_btc**

----------

<br>
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

{% hint style="info" %}
If successful, the response includes a copy of the updated [Account](./README.md) entity.
{% endhint %}

<br>
<br>

### Example request<br>

```
/ver1/accounts/32833900/sell_all_to_usd
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
{
    "id": 32402783,
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
        "amount": "4.08"
    },
    "primary_display_currency_profit": {
        "currency": "USD",
        "amount": "1.1904074327111530753265032408092397310973795168"
    },
    "day_profit_primary_display_currency_percentage": {
        "currency": "USD",
        "amount": "1.0106"
    },
    "day_profit_primary_display_currency": {
        "currency": "USD",
        "amount": "0.303798359197846162240938425994424916390118897162"
    },
    "primary_display_currency_amount": {
        "currency": "USD",
        "amount": "30.3654836868311530753265032408092397310973795168"
    },
    "total_primary_display_currency_profit": {
        "currency": "USD",
        "amount": 6.365483686831153
    },
    "available_include_in_summary": true,
    "api_key": "yzNYzv8a0VEBwsrhc3MDpHZ7XMqa1vJqSqHzpfjjKpdFF9SbQsVQKRl3hKNyZU45",
    "name": "My Binance US",
    "auto_balance_method": null,
    "auto_balance_error": null,
    "customer_id": null,
    "subaccount_name": null,
    "lock_reason": null,
    "btc_amount": "0.00048354921680019174575329053051358334806752",
    "usd_amount": "30.3654836868311530753265032408092397310973795168",
    "day_profit_btc": "0.000004484441392636909809798397735805570289805668147599",
    "day_profit_usd": "0.303798359197846162240938425994424916390118897162",
    "day_profit_btc_percentage": "0.94",
    "day_profit_usd_percentage": "1.01",
    "btc_profit": "-0.00000742390628421825424670946948641665193248",
    "usd_profit": "1.1904074327111530753265032408092397310973795168",
    "usd_profit_percentage": "4.08",
    "btc_profit_percentage": "-1.51",
    "total_btc_profit": "-0.0003449895239452033",
    "total_usd_profit": "6.365483686831153",
    "pretty_display_type": "BinanceUs",
    "exchange_name": "Binance US Spot",
    "market_code": "binance_us",
    "api_keys_state": "ok"
}
```
</details>
<details>
<summary>Status: 403 Forbidden</summary>
```json
{
    "error": "Forbidden. Unavailable for this account."
}
```
</details>



