**Description:** Edits an existing deal of DCA Bot using its ID

:::warning
The endpoint is available for Deal for the statuses `bought` and `close_strategy_activated`.
:::

**Permission:** BOTS_READ
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "purple" }}> PATCH </mark></code>

<code>`/ver1/deals/{deal_id}/update_deal`</code>

</blockquote>

### Path Parameter

   deal_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID Deal entity

### Body parameters

   take_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Percentage value for the bot’s Take Profit.
   If multiple steps are specified in <code>take_profit_steps settings</code>, this parameter should be set to <code>0</code>

   take_profit_steps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[json]</code>
   Contains multiple steps with conditions for Taking Profit in this deal

   profit_currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Profit currency used for calculating the profit from the trades executed by this DCA Bot: <code>quite_currency</code> or <code>base_currency</code>

   take_profit_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Take Profit order type for this DCA Bot.
   <details>
   <summary>Allowed value</summary>
        - base - from base order;
        - total - from total volume;
   </details>

   trailing_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether trailing is enabled for Take Profit (<code>true</code>) or not (<code>false</code>)

   sl_to_breakeven_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Enables (<code>true</code>) or disable (<code>false</code>) the Move to Breakeven feature for this Deal. To use this feature, you must have at least two Take Profit steps

   sl_to_breakeven_data&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>json</code>
    The upper limit to which the stop loss will move.
    To activate, you need at least two separate targets of Take Profit Example: <code></code>

   max_safety_orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
    The maximum total number of Safety Orders allowed for this deal
    Minimum: <code>0</code>; Maximum: <code>200</code>

   maxactive_safety_orders_count_safety_orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
    The number of Safety Orders is allowed to place in advance on the exchange's order book

   stop_loss_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
    The percentage by which the price needs to move in the opposite direction of your Take Profit target to trigger the Stop Loss, at which point the bot will execute a Market Order.

   stop_loss_timeout_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
     Indicates whether the Stop Loss timeout is enabled (<code>true</code>) or disabled (<code>false</code>)

   stop_loss_timeout_in_seconds&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
        Value timeout in seconds
     This parameter is required when <code>stop_loss_timeout_enabled</code> is set to <code>true</code>

   tsl_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
    Indicates whether trailing is enabled (<code>true</code>) for Stop Loss or not (<code>false</code>)

   stop_loss_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    The type of action the bot should perform after closing a deal due to the Stop Loss setting: <code>stop_loss</code> or <code>stop_loss_and_disable_bot</code>

   close_timeout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
    The time in seconds after which this deal will close automatically
    Minimum: <code>60</code>

   note&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    Optional user-defined note for this Deal

   min_profit_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
    The minimum profit percentage which need to reach  for this DCA Bot to complete a deal

### Additional Information

Take Profit steps

    You should allocate 100% of your position volume across different targets. In total, the maximum number of targets is 4.



    One target is one step. Each step is represented as an object with properties:
    <code>id</code>
    <code>amount_percentage</code>
    <code>profit_percentage</code>

Below is an example demonstrating how to fill this parameter with several steps of Take Profit:

```json
[
   {
      "id": 1,
      "amount_percentage": 10,
      "profit_percentage": 10
   },
   {
      "id": 2,
      "amount_percentage": 20,
      "profit_percentage": 15
   },
   {
      "id": 3,
      "amount_percentage": 30,
      "profit_percentage": 20
   },
   {
      "id": 4,
      "amount_percentage": 40,
      "profit_percentage": 23
   }
]

```

### Response Parameters

If successful, the response includes an updated copy of [Deals](./README.md) entity.

### Example Request

```json
PATCH /ver1/deals/1234567890/update_deal
```

```
Body:
{
   "stop_loss_type": "stop_loss",
   "stop_loss_percentage": "4",
   "stop_loss_timeout_in_seconds": "100",
   "max_safety_orders": 6
}
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

```json
{
    "from_currency_id": 0,
    "to_currency_id": 0,
    "id": 1234567890,
    "type": "Deal",
    "bot_id": 34567890,
    "max_safety_orders": 6,
    "deal_has_error": false,
    "account_id": 12345678,
    "active_safety_orders_count": 3,
    "created_at": "2024-11-14T15:29:42.248Z",
    "updated_at": "2024-11-14T15:47:47.467Z",
    "closed_at": null,
    "finished?": false,
    "current_active_safety_orders_count": 3,
    "current_active_safety_orders": 3,
    "completed_safety_orders_count": 0,
    "completed_manual_safety_orders_count": 0,
    "cancellable?": true,
    "panic_sellable?": true,
    "trailing_enabled": false,
    "tsl_enabled": false,
    "stop_loss_timeout_enabled": false,
    "stop_loss_timeout_in_seconds": 100,
    "active_manual_safety_orders": 0,
    "pair": "USDT_ETH",
    "status": "bought",
    "localized_status": "Active",
    "take_profit": null,
    "take_profit_steps": [
        {
            "id": 0,
            "amount_percentage": 40.0,
            "profit_percentage": 2.0,
            "editable": true,
            "panic_sellable": true,
            "trade_id": 1123324654,
            "execution_timestamp": null,
            "initial_amount": "0.0129",
            "price": "3163.63",
            "status": "Placed"
        },
        {
            "id": 1,
            "amount_percentage": 50.0,
            "profit_percentage": 3.0,
            "editable": true,
            "panic_sellable": true,
            "trade_id": 1123324657,
            "execution_timestamp": null,
            "initial_amount": "0.0162",
            "price": "3194.65",
            "status": "Placed"
        },
        {
            "id": 2,
            "amount_percentage": 10.0,
            "profit_percentage": 4.0,
            "editable": true,
            "panic_sellable": true,
            "trade_id": 1123324660,
            "execution_timestamp": null,
            "initial_amount": "0.0033",
            "price": "3225.67",
            "status": "Placed"
        }
    ],
    "base_order_volume": "100.0",
    "safety_order_volume": "15.0",
    "safety_order_step_percentage": "1.0",
    "leverage_type": "not_specified",
    "leverage_custom_value": null,
    "bought_amount": "0.0324",
    "bought_volume": "100.39125096",
    "bought_average_price": "3098.4954",
    "base_order_average_price": "3098.4954",
    "sold_amount": "0.0",
    "sold_volume": "0.0",
    "sold_average_price": "0",
    "take_profit_type": "total",
    "final_profit": "-0.26434609",
    "martingale_coefficient": "1.0",
    "martingale_volume_coefficient": "1.7",
    "martingale_step_coefficient": "4.0",
    "stop_loss_percentage": "4.0",
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
    "usd_final_profit": "-0.26",
    "actual_profit": "-0.71037162",
    "actual_usd_profit": "-0.71037162",
    "failed_message": null,
    "reserved_base_coin": "100.39125096",
    "reserved_second_coin": "0.0324",
    "trailing_deviation": "0.2",
    "trailing_max_price": null,
    "tsl_max_price": null,
    "strategy": "long",
    "last_known_position_info": null,
    "min_profit_percentage": "0.0",
    "min_profit_type": null,
    "close_strategy_list": [],
    "safety_strategy_list": [],
    "note": null,
    "add_fundable": true,
    "smart_trade_convertable": true,
    "bot_name": "ETH/USDT Classic trading",
    "account_name": "Paper Account 1251857",
    "market_type": "spot",
    "current_price": "3079.65",
    "take_profit_price": "3079.65",
    "stop_loss_price": "2974.555584",
    "actual_profit_percentage": "-0.61",
    "reserved_quote_funds": "0.0",
    "reserved_base_funds": "0.0",
    "orderbook_price_currency": "USDT",
    "crypto_widget": {
        "progressAccuracy": 2,
        "TTPАctivated": false,
        "buyPrice": "3098.4954",
        "currentPrice": "3079.65",
        "inverted": false,
        "stopLosses": [
            [
                "2974.555584",
                false
            ]
        ],
        "LP": null,
        "buySteps": [
            {
                "price": "3067.51",
                "filled": "0.0"
            }
        ],
        "marks": [
            {
                "type": "tp",
                "label": "TP1",
                "price": "3163.63",
                "position": "down"
            },
            {
                "type": "tp",
                "label": "TP2",
                "price": "3194.65",
                "position": "down"
            },
            {
                "type": "tp",
                "label": "TP3",
                "price": "3225.67",
                "position": "down"
            }
        ]
    },
    "buy_steps": [
        {
            "price": "3067.51",
            "filled": "0.0"
        }
    ],
    "bot_events": [
        {
            "message": "Placing base order. Price: 3095.4 USDT Size: 100.29096 USDT (0.0324 ETH)",
            "created_at": "2024-11-14T15:29:42.359Z"
        },
        {
            "message": "Base order executed.  Price: 3098.4954 USDT.  Size: 100.39125096 USDT (0.0324 ETH)",
            "created_at": "2024-11-14T15:30:15.478Z"
        },
        {
            "message": "Placing TakeProfit trade.  Price: 3163.63 USDT Size: 40.810827 USDT (0.0129 ETH), the price should rise for 2.27% to close the deal",
            "created_at": "2024-11-14T15:30:15.650Z"
        },
        {
            "message": "Placing TakeProfit trade.  Price: 3194.65 USDT Size: 51.75333 USDT (0.0162 ETH), the price should rise for 3.27% to close the deal",
            "created_at": "2024-11-14T15:30:15.746Z"
        },
        {
            "message": "Placing TakeProfit trade.  Price: 3225.67 USDT Size: 10.644711 USDT (0.0033 ETH), the price should rise for 4.27% to close the deal",
            "created_at": "2024-11-14T15:30:15.823Z"
        },
        {
            "message": "Placing safety trade (1 out of 3). Price: 3067.51 USDT Size: 15.030799 USDT (0.0049 ETH)",
            "created_at": "2024-11-14T15:30:15.901Z"
        },
        {
            "message": "Placing safety trade (2 out of 3). Price: 2943.57 USDT Size: 25.609059 USDT (0.0087 ETH)",
            "created_at": "2024-11-14T15:30:15.963Z"
        },
        {
            "message": "Placing safety trade (3 out of 3). Price: 2447.81 USDT Size: 43.571018 USDT (0.0178 ETH)",
            "created_at": "2024-11-14T15:30:16.039Z"
        }
    ]
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
        "base": [
            "Can't be edit"
        ]
    }
}
```

</details>
