**Description:** Returns the list of geals. Use the query parameters to page through results

**Permission:** BOTS_READ
**Security** SIGNED

<blockquote>

<code><mark style={{ color: "blue"}}> GET </mark></code>

<code>/ver1/deals</code>

</blockquote>

### Query Parameters

   bot_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Filters by the unique ID of the 3Commas DCA Bot

   account_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Filters entities linked to the specified 3Commas exchange account

   limit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Limits the number of records returned
   Maximum: <code>1000</code>, Default: <code>50</code>

   offset&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Skips the first N records in the results

   from&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Returns entities created after a specific time

   to&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Returns entities created before a specific time

   scope&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Filters deals by their statusDefault: <code>null</code>
    <details>
        <summary>Allowed value</summary>
            - active - active deals;
            - finished - finished deals;
            - completed - successfully completed;
            - cancelled - cancelled deals;
            - failed - failed deals;
            - <code>null</code> - all deals
    </details>

   order&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Specifies the field used to order the results
   Valid fields for ordering: <code>created_at</code>; <code>updated_at</code>; <code>closed_at</code>; <code>profit</code>; <code>profit_percentage</code>. Default: <code>created_at</code>

   order_direction&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Sets the direction of order: <code>ASC</code> or <code>DESC</code>
   Default: <code>DESC</code>

   base&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Filters by base currency

   quote&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Filters by quote currency

   note&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Filters deals by note

:::info
Use endpoint [User connected exchanges and wallets list](Account/User%20connected%20exchanges%20and%20wallets%20list.md) to get value for parameter 'account_id' in 3Commas.

### Response Parameters

If successful, the response includes a copy of [Deals](./README.md) entity.

### Example Request

```json
GET /ver1/deals?bot_id=23456789
```

### Example response and errors

<details>
<summary>Status: 200 OK</summary>

```json
[
    {
        "from_currency_id": 0,
        "to_currency_id": 0,
        "id": 2293916474,
        "type": "Deal",
        "bot_id": 23456789,
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

</details>
