## Get Account Info

**Description:** Shows information about a specific account using its ID.

Permission: ACCOUNTS_READ

Security: SIGNED

----------

<mark style="color:blue;background-color:white" > **GET**

<mark style="color:blue;background-color:white" > **/ver1/accounts/{account_id}**

----------

**Path Parameters**

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**`account_id`**  | <mark style="color:grey;background-color:white"> integer | Yes |  |  Unique 3Commas ID for this exchange account entity |


**Parameters response**
| Name | Type |	Description|
|------|------|------------|
|**`id`**| | |
|**` `**| | |
|**` `**| | |
|**` `**| | |
|**` `**| | |
|**` `**| | |


**Example request**
```json
{{baseUrl}}/ver1/accounts/12345678
```

**Example Response and errors**


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