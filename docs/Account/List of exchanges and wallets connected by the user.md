## List of exchanges and wallets connected by the user<br>

**Description:** Returns the list of exchange accounts and wallets connecting to a user account<br>

**Permission:** ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

<br>

----------

<mark style="color:blue"> <strong>GET</strong>

<mark style="color:blue"><strong>/ver1/accounts</strong>

----------
<br>
<br>

### Query Parameters<br>

| Name | Type | Mandatory | Values  | Description|
|------|------|-----------|-----------------|------------|
|**api_key**  | `string` | No |  | Filter by API-key  |
|**page**  | `integer` | No |  | Page number for pagination.<br> Default: `1` |
|**per_page**  | `integer` | No | Minimum: `1`<br>Maximum: `100` | Quantity of records on one page.<br>Default: `100` |

<br>
<br>

### Parameter response<br>

{% hint style="info" %}
If successful, the response includes a copy of [Account](./README.md) entity.
{% endhint %}


<br>
<br>

### Example request<br>
```json
GET /ver1/accounts
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>
```json
[
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
            "amount": "6.31"
        },
        "primary_display_currency_profit": {
            "currency": "USD",
            "amount": "1.731778029756100000000000000000150887648576"
        },
        "day_profit_primary_display_currency_percentage": {
            "currency": "USD",
            "amount": "-3.4995"
        },
        "day_profit_primary_display_currency": {
            "currency": "USD",
            "amount": "-1.0573748319477998456887445312498491129587827906685"
        },
        "primary_display_currency_amount": {
            "currency": "USD",
            "amount": "29.157221154400000000000000000000150887648576"
        },
        "total_primary_display_currency_profit": {
            "currency": "USD",
            "amount": 5.1572211544
        },
        "available_include_in_summary": true,
        "api_key": "yzNYzv8a0VEBwsrhc3MDpHZ7XMqa1vJqSqHzpfjjKpdFF9SbQsVQKRl3hKNyZU45",
        "name": "My Binance US",
        "auto_balance_method": null,
        "auto_balance_error": null,
        "customer_id": null,
        "subaccount_name": null,
        "lock_reason": null,
        "btc_amount": "0.00047955955846052631578947368421052879749422",
        "usd_amount": "29.157221154400000000000000000000150887648576",
        "day_profit_btc": "-0.000004031634868039786596225955581137869169682309539066",
        "day_profit_usd": "-1.0573748319477998456887445312498491129587827906685",
        "day_profit_btc_percentage": "-0.83",
        "day_profit_usd_percentage": "-3.5",
        "btc_profit": "0.00000185185085361031578947368421052879749422",
        "usd_profit": "1.731778029756100000000000000000150887648576",
        "usd_profit_percentage": "6.31",
        "btc_profit_percentage": "0.39",
        "total_btc_profit": "-0.0003489791822848687",
        "total_usd_profit": "5.1572211544",
        "pretty_display_type": "BinanceUs",
        "exchange_name": "Binance US Spot",
        "market_code": "binance_us",
        "api_keys_state": "ok"
    },
    {
        "id": 32833900,
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
        "updated_at": "2024-09-26T12:28:43.736Z",
        "last_auto_balance": null,
        "fast_convert_available": true,
        "grid_bots_allowed": true,
        "api_key_invalid": true,
        "market_icon": "https://3commas.io/img/exchanges/bybit.png",
        "deposit_enabled": false,
        "include_in_summary": true,
        "supported_market_types": [
            "spot"
        ],
        "primary_display_currency_profit_percentage": {
            "currency": "USD",
            "amount": "0.32"
        },
        "primary_display_currency_profit": {
            "currency": "USD",
            "amount": "0.10635496067829619923123521178661442940157682200204"
        },
        "day_profit_primary_display_currency_percentage": {
            "currency": "USD",
            "amount": "-2.2048"
        },
        "day_profit_primary_display_currency": {
            "currency": "USD",
            "amount": "-0.74638584120003539371071750580597816313983262001056"
        },
        "primary_display_currency_amount": {
            "currency": "USD",
            "amount": "33.10596778327379619923123521178661442940157682200204"
        },
        "total_primary_display_currency_profit": {
            "currency": "USD",
            "amount": 0.1063549606782962
        },
        "available_include_in_summary": true,
        "api_key": "gyTAiGCgRe1hctsA1J",
        "name": "new name",
        "auto_balance_method": null,
        "auto_balance_error": null,
        "customer_id": null,
        "subaccount_name": null,
        "lock_reason": null,
        "btc_amount": "0.000545193189759952324767733332517391811907039692",
        "usd_amount": "33.10596778327379619923123521178661442940157682200204",
        "day_profit_btc": "0.000028901416777896248610795667563688108202134512253672",
        "day_profit_usd": "-0.74638584120003539371071750580597816313983262001056",
        "day_profit_btc_percentage": "5.6",
        "day_profit_usd_percentage": "-2.2",
        "btc_profit": "0.000001619967238963324767733332517391811907039692",
        "usd_profit": "0.10635496067829619923123521178661442940157682200204",
        "usd_profit_percentage": "0.32",
        "btc_profit_percentage": "0.3",
        "total_btc_profit": "1.6199672389633248e-06",
        "total_usd_profit": "0.1063549606782962",
        "pretty_display_type": "BybitSpot",
        "exchange_name": "Bybit Spot",
        "market_code": "bybit_spot",
        "api_keys_state": "expired"
    },
   ...
]
```
</details>


