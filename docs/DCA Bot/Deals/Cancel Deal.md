## Cancel Deal<br>

**Description:** Cancels a specific deal within the DCA Bot using its ID<br>

{% hint style="warning" %}
After this action, 3Commas will automatically set the final status to **Cancelled** for this deal.
{% endhint %}

<br>

**Permission:** BOTS_WRITE<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:green"> <strong>POST</strong>

<mark style="color:green"> <strong>/ver1/deals/{deal_id}/cancel</strong>

----------
<br>
<br>

### Path Parameters<br

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**deal_id**  | `integer`| Yes |  | Unique 3Commas ID Deal entity |

<br>
<br>

### Response Parameters<br>

{% hint style="info" %}
If successful, the response includes an updated copy of the [Deals](./README.md) entity.
{% endhint %}

<br>
<br>

### Example Request<br>

```json
POST  /ver1/deals/2345678901/cancel
```

<br>
<br>

###  Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
{
    "from_currency_id": 0,
    "to_currency_id": 0,
    "id": 2345678901,
    "type": "Deal",
    "bot_id": 15562471,
    "max_safety_orders": 3,
    "deal_has_error": false,
    "account_id": 34567890,
    "active_safety_orders_count": 3,
    "created_at": "2024-11-12T08:59:25.812Z",
    "updated_at": "2024-11-12T14:41:24.240Z",
    "closed_at": null,
    "finished?": false,
    "current_active_safety_orders_count": 1,
    "current_active_safety_orders": 1,
    "completed_safety_orders_count": 2,
    "completed_manual_safety_orders_count": 0,
    "cancellable?": false,
    "panic_sellable?": false,
    "trailing_enabled": false,
    "tsl_enabled": false,
    "stop_loss_timeout_enabled": false,
    "stop_loss_timeout_in_seconds": 0,
    "active_manual_safety_orders": 0,
    "pair": "USDT_ETH",
    "status": "cancel_pending",
    "localized_status": "Cancel pending",
    "take_profit": "1.0",
    "take_profit_steps": [],
    "base_order_volume": "30.0",
    "safety_order_volume": "15.0",
    "safety_order_step_percentage": "1.0",
    "leverage_type": "not_specified",
    "leverage_custom_value": null,
    "bought_amount": "0.0239",
    "bought_volume": "80.24853837",
    "bought_average_price": "3357.67942970711297071129707113",
    "base_order_average_price": "3426.54312",
    "sold_amount": "0.0",
    "sold_volume": "0.0",
    "sold_average_price": "0",
    "take_profit_type": "total",
    "final_profit": "-3.40545937",
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
    "usd_final_profit": "-3.41",
    "actual_profit": "-2.133818283",
    "actual_usd_profit": "-2.133818283",
    "failed_message": null,
    "reserved_base_coin": "80.24853837",
    "reserved_second_coin": "0.0239",
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
    "add_fundable": false,
    "smart_trade_convertable": false,
    "bot_name": "ETH/USDT Classic trading",
    "account_name": "Paper Account 1251857",
    "market_type": "spot",
    "current_price": "3271.67",
    "take_profit_price": "3394.66",
    "stop_loss_price": null,
    "actual_profit_percentage": "-2.56",
    "reserved_quote_funds": "0.0",
    "reserved_base_funds": "0.0",
    "orderbook_price_currency": "USDT",
    "crypto_widget": null,
    "buy_steps": [
        {
            "price": "2706.96",
            "filled": "0.0"
        }
    ],
    "bot_events": [
        {
            "message": "Placing base order. Price: 3423.12 USDT Size: 33.204264 USDT (Reinvested 3.080799 USDT) (0.0097 ETH)",
            "created_at": "2024-11-12T08:59:26.203Z"
        },
        {
            "message": "Base order executed.  Price: 3426.54312 USDT.  Size: 33.23746826 USDT (0.0097 ETH)",
            "created_at": "2024-11-12T09:00:01.655Z"
        },
        {
            "message": "Placing TakeProfit trade.  Price: 3464.28 USDT Size: 33.603516 USDT (0.0097 ETH), the price should rise for 1.26% to close the deal",
            "created_at": "2024-11-12T09:00:01.860Z"
        },
        {
            "message": "Placing safety trade (1 out of 3). Price: 3392.27 USDT Size: 18.318258 USDT (Reinvested 3.080799 USDT) (0.0054 ETH)",
            "created_at": "2024-11-12T09:00:01.994Z"
        },
        {
            "message": "Placing safety trade (2 out of 3). Price: 3255.21 USDT Size: 28.645848 USDT (Reinvested 3.080799 USDT) (0.0088 ETH)",
            "created_at": "2024-11-12T09:00:02.197Z"
        },
        {
            "message": "Placing safety trade (3 out of 3). Price: 2706.96 USDT Size: 46.559712 USDT (Reinvested 3.080799 USDT) (0.0172 ETH)",
            "created_at": "2024-11-12T09:00:02.309Z"
        },
        {
            "message": "Safety trade (1 out of 3) executed. Price: 3395.66227 USDT Size: 18.33657626 USDT (0.0054 ETH)",
            "created_at": "2024-11-12T09:14:46.661Z"
        },
        {
            "message": "Cancelling TakeProfit trade. Price: 3464.28 USDT Size: 33.603516 USDT (0.0097 ETH)",
            "created_at": "2024-11-12T09:14:46.832Z"
        },
        {
            "message": "TakeProfit trade cancelled. Price: 3464.28 USDT Size: 33.603516 USDT (0.0097 ETH)",
            "created_at": "2024-11-12T09:14:46.865Z"
        },
        {
            "message": "Placing TakeProfit trade.  Price: 3453.11 USDT Size: 52.141961 USDT (0.0151 ETH), the price should rise for 1.79% to close the deal",
            "created_at": "2024-11-12T09:14:46.942Z"
        },
        {
            "message": "Safety trade (2 out of 3) executed. Price: 3258.46521 USDT Size: 28.67449385 USDT (0.0088 ETH)",
            "created_at": "2024-11-12T10:50:46.485Z"
        },
        {
            "message": "Cancelling TakeProfit trade. Price: 3453.11 USDT Size: 52.141961 USDT (0.0151 ETH)",
            "created_at": "2024-11-12T10:50:46.769Z"
        },
        {
            "message": "TakeProfit trade cancelled. Price: 3453.11 USDT Size: 52.141961 USDT (0.0151 ETH)",
            "created_at": "2024-11-12T10:50:46.795Z"
        },
        {
            "message": "Placing TakeProfit trade.  Price: 3394.66 USDT Size: 81.132374 USDT (0.0239 ETH), the price should rise for 5.48% to close the deal",
            "created_at": "2024-11-12T10:50:47.001Z"
        }
    ]
}
```
</details>