### Load balances for specified exchange<br>

**Description:** Updates a balance for exchange account using its ID<br>

**Permission:** ACCOUNTS_WRITE<br>
**Security:** SIGNED<br>

<br>

----------

<mark style="color:green"><strong>POST</strong>

<mark style="color:green"><strong>/ver1/accounts/{account_id}/load_balances</strong>

----------
<br>
<br>

### Path Parameters<br>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Unique 3Commas ID for this exchange account entity
</p><br>

### Response Parameters<br>

{% hint style="info" %}
If successful, the response includes a copy of the updated [Account](./README.md) entity.
{% endhint %}

<br>

### Example request<br>

```
 POST /ver1/accounts/12345678/load_balances
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
        "amount": "9.21"
    },
    "primary_display_currency_profit": {
        "currency": "USD",
        "amount": "2.631561723423248885262841890509448379906959328"
    },
    "day_profit_primary_display_currency_percentage": {
        "currency": "USD",
        "amount": "-2.1226"
    },
    "day_profit_primary_display_currency": {
        "currency": "USD",
        "amount": "-0.6768638169586133911173202842590701388480615227093"
    },
    "primary_display_currency_amount": {
        "currency": "USD",
        "amount": "31.210986753244348885262841890509448379906959328"
    },
    "total_primary_display_currency_profit": {
        "currency": "USD",
        "amount": 7.210986753244349
    },
    "available_include_in_summary": true,
    "api_key": "yzNYzv8a0VEBwsrhc3MDpHZ7XMqa1vJqSqHzpfjjKpdFF9SbQsVQKRl3hKNyZU45",
    "name": "My Binance US",
    "auto_balance_method": null,
    "auto_balance_error": null,
    "customer_id": null,
    "subaccount_name": null,
    "lock_reason": null,
    "btc_amount": "0.00048979846479077665182507861307944101622368",
    "usd_amount": "31.210986753244348885262841890509448379906959328",
    "day_profit_btc": "-0.000003149786432365067713059300253892317108212763457088",
    "day_profit_usd": "-0.6768638169586133911173202842590701388480615227093",
    "day_profit_btc_percentage": "-0.64",
    "day_profit_usd_percentage": "-2.12",
    "btc_profit": "0.00000694712754069765182507861307944101622368",
    "usd_profit": "2.631561723423248885262841890509448379906959328",
    "usd_profit_percentage": "9.21",
    "btc_profit_percentage": "1.44",
    "total_btc_profit": "-0.00033874027595461834",
    "total_usd_profit": "7.210986753244349",
    "pretty_display_type": "BinanceUs",
    "exchange_name": "Binance US Spot",
    "market_code": "binance_us",
    "api_keys_state": "ok"
}
```
</details><br>
<details>
<summary>Status: 422 Unprocessable Entity</summary><br>

```json
{
    "error_description": "API keys are no longer valid or incorrect.",
    "error": "invalid_api_key"
}
```
</details>