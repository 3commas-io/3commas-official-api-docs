## User connected exchanges and wallets list

**Description:** Returns the list of exchange accounts and wallets connecting to a user account

Permission: ACCOUNTS_READ

Security: SIGNED

----------

<mark style="color:blue;background-color:white" > **GET**

<mark style="color:blue;background-color:white" > **/ver1/accounts**

----------

**Request Parameters**

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**`api_key`**  | <mark style="color:grey;background-color:white">string	| No |  | ID of the exchange account entity |
|**`page`**  | <mark style="color:grey;background-color:white">integer	| No |  | Page number for pagination. Default: `1`  |
|**`per_page`**  | <mark style="color:grey;background-color:white">integer	| No | Minimum:`1` Maximum:`100` | Quantity of records on one page. Default: `100` |

**Parameters response**

| Name | Type |	Description|
|------|------|------------|
|**`id`**| | |
|**` `**| | |
|**` `**| | |
|**` `**| | |
|**` `**| | |
|**` `**| | |


```json
[
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
            "amount": "-2.41"
        },
        "primary_display_currency_profit": {
            "currency": "USD",
            "amount": "-0.677043407290347040925103601154844604379692216"
        },
        "day_profit_primary_display_currency_percentage": {
            "currency": "USD",
            "amount": "-1.485"
        },
        "day_profit_primary_display_currency": {
            "currency": "USD",
            "amount": "-0.412885442083796566143409790969659418754999836946"
        },
        "primary_display_currency_amount": {
            "currency": "USD",
            "amount": "27.390364135749652959074896398845155395620307784"
        },
        "total_primary_display_currency_profit": {
            "currency": "USD",
            "amount": 3.390364135749653
        },
        "available_include_in_summary": true,
        "api_key": "yzNYzv8a0VEBwsrhc3MDpHZ7XMqa1vJqSqHzpfjjKpdFF9SbQsVQKRl3hKNyZU45",
        "name": "My Binance US",
        "auto_balance_method": null,
        "auto_balance_error": null,
        "customer_id": null,
        "subaccount_name": null,
        "lock_reason": null,
        "btc_amount": "0.00048306157384887997797372378202458405751549",
        "usd_amount": "27.390364135749652959074896398845155395620307784",
        "day_profit_btc": "0.00000346867966869483762106491142273220566445969195084",
        "day_profit_usd": "-0.412885442083796566143409790969659418754999836946",
        "day_profit_btc_percentage": "0.72",
        "day_profit_usd_percentage": "-1.49",
        "btc_profit": "-0.00003240973373152602202627621797541594248451",
        "usd_profit": "-0.677043407290347040925103601154844604379692216",
        "usd_profit_percentage": "-2.41",
        "btc_profit_percentage": "-6.29",
        "total_btc_profit": "-0.000345477166896515",
        "total_usd_profit": "3.390364135749653",
        "pretty_display_type": "BinanceUs",
        "exchange_name": "Binance US Spot",
        "market_code": "binance_us",
        "api_keys_state": "ok"
    },
    { ...
        
    },
    { ...
       
    },
    { ...
       
    },
    { ...
        
    }
]
```




