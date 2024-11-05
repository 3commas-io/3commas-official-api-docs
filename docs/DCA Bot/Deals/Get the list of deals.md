## Get the list of deals<br>

**Description:** Returns a list of geals. Use the query parameters to page through results<br>


**Permission:** BOTS_READ<br>
**Security** SIGNED<br>
<br>

----------

<mark style="color:blue;background-color:white"> **GET**

<mark style="color:blue;background-color:white"> **/ver1/deals**

----------

<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**bot_id**  | `integer`| No |  | Filters by the unique ID of the 3Commas DCA Bot |
|**account_id** | `integer` | No |   | Filters entities linked to the specified 3Commas exchange account |
|**limit** | `integer` | No |  Maximum: `1000` | Limits the number of records returned.<br>Default: `50` |
|**offset** | `integer` | No |   | Skips the first N records in the results |
|**from** | `string` | No |   | Returns entities created after a specific time |
|**to** | `string` | No |   | Returns entities created before a specific time |
|**scope** | `string` | No |   | Filters deals by their status.<br>Default: `null` <details> <summary>Show allowed value</summary><br> <dl><li>active - active deals;<li>finished - finished deals;<li>completed - successfully completed;<li>cancelled - cancelled deals;<li>failed - failed deals;<li>`null` - all deals</dl></details>|
|**order** | `string` | No | `created_at`<br>`updated_at`<br>`closed_at`<br> `profit`<br>`profit_percentage`| Specifies the field used to order the results.<br>Default: `created_at`| 
|**order_direction** | `string` | No | `ASC` or `DESC` | Sets the direction of order.<br>Default: `DESC`
|**base** | `string` | No |   | Filters by base currency |
|**quote** | `string` | No |   | Filters by quote currency |
|**note** | `string` | No |   | Filters deals by note |

<br>
{% hint style="info" %}
Use endpoint [User connected exchanges and wallets list](Account/User%20connected%20exchanges%20and%20wallets%20list.md) to get value for parameter 'account_id' in 3Commas.
{% endhint %}
<br>

### Response Parameters<br>

{% hint style="info" %}
If successful, the response includes a copy of [Deals](./README.md) entity.
{% endhint %}

<br>
<br>

### Example Request<br>

```json
POST /ver1/bots/12345678/disable
```

<br>
<br>

### Example response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```json
[
    {
        "from_currency_id": 0,
        "to_currency_id": 0,
        "id": 2293916474,
        "type": "Deal",
        "bot_id": 15565014,
        "max_safety_orders": 3,
        "deal_has_error": false,
        "account_id": 32199203,
        "active_safety_orders_count": 3,
        "created_at": "2024-10-30T06:17:22.363Z",
        "updated_at": "2024-10-31T16:04:01.721Z",
        "closed_at": null,
        "finished?": false,
        "current_active_safety_orders_count": 1,
        "current_active_safety_orders": 1,
        "completed_safety_orders_count": 2,
        "completed_manual_safety_orders_count": 0,
        "cancellable?": true,
        "panic_sellable?": true,
        "trailing_enabled": null,
        "tsl_enabled": false,
        "stop_loss_timeout_enabled": false,
        "stop_loss_timeout_in_seconds": 0,
        "active_manual_safety_orders": 0,
        "pair": "USDT_ETH",
        "status": "bought",
        "localized_status": "Active",
        "take_profit": "0.0",
        "take_profit_steps": [],
        "base_order_volume": "50.0",
        "safety_order_volume": "15.0",
        "safety_order_step_percentage": "1.0",
        "leverage_type": "not_specified",
        "leverage_custom_value": null,
        "bought_amount": "0.0354",
        "bought_volume": "93.55819473",
        "bought_average_price": "2642.886856779661016949152542373",
        "base_order_average_price": "2685.69301",
        "sold_amount": "0.0",
        "sold_volume": "0.0",
        "sold_average_price": "0",
        "take_profit_type": "base",
        "final_profit": "-3.35618503",
        "martingale_coefficient": "1.0",
        "martingale_volume_coefficient": "1.7",
        "martingale_step_coefficient": "4.0",
        "stop_loss_percentage": "0.0",
        "sl_to_breakeven_enabled": false,
        "sl_to_breakeven_data": null,
        "error_message": null,
        "profit_currency": "quote_currency",
        "stop_loss_type": "stop_loss",
        "safety_order_volume_type": "quote_currency",
        "base_order_volume_type": "quote_currency",
        "from_currency": "USDT",
        "to_currency": "ETH",
        "final_profit_percentage": "0",
        "usd_final_profit": "-3.36",
        "actual_profit": "-7.69294593",
        "actual_usd_profit": "-7.69294593",
        "failed_message": null,
        "reserved_base_coin": "93.55819473",
        "reserved_second_coin": "0.0354",
        "trailing_deviation": "0.2",
        "trailing_max_price": null,
        "tsl_max_price": null,
        "strategy": "long",
        "last_known_position_info": null,
        "min_profit_percentage": "2.0",
        "min_profit_type": "base_order_volume",
        "close_strategy_list": [
            {
                "options": {
                    "time": "3m",
                    "points": "70",
                    "time_period": "7",
                    "trigger_condition": "greater"
                },
                "strategy": "rsi"
            }
        ],
        "safety_strategy_list": [],
        "note": null,
        "add_fundable": true,
        "smart_trade_convertable": false,
        "bot_name": "20 oct number 2",
        "account_name": "Paper Account 1251857",
        "market_type": "spot",
        "current_price": "2428.0",
        "take_profit_price": "2674.4",
        "stop_loss_price": null,
        "actual_profit_percentage": "-8.13",
        "reserved_quote_funds": "0.0",
        "reserved_base_funds": "0.0",
        "orderbook_price_currency": "USDT",
        "crypto_widget": {
            "progressAccuracy": 2,
            "TTPАctivated": false,
            "buyPrice": "2642.886856779661016949152542373",
            "currentPrice": "2428.0",
            "inverted": false,
            "stopLosses": null,
            "LP": null,
            "buySteps": [
                {
                    "price": "2121.69",
                    "filled": "0.0"
                }
            ],
            "marks": [
                {
                    "type": "tp",
                    "label": "MP",
                    "price": "2674.4",
                    "position": "down"
                }
            ]
        }
    },
    ... 
]
```
