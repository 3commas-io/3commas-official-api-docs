## Close the deal at market price<br>

**Description:** Closes a specific deal within a DCA Bot by market using its ID<br>

{% hint style="warning" %}
After this action, the final status **Panic_sold** will be automatically set by 3Commas.
{% endhint %}

**Permission:** BOTS_WRITE<br>
**Security:** SIGNED<br>

<br>

----------

<mark style="color:green"> <strong>POST<strong><br>
<mark style="color:green"> <strong>/ver1/deals/{deal_id}/panic_sell<strong>

----------

<br>
<br>

### Path Parameters<br>

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

### Example request<br>

```
POST /ver1/deals/1234567890/panic_sell
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
{
    "from_currency_id": 0,
    "to_currency_id": 0,
    "id": 1234567890,
    "type": "Deal",
    "bot_id": 15562420,
    "max_safety_orders": 3,
    "deal_has_error": false,
    "account_id": 23456789,
    "active_safety_orders_count": 3,
    "created_at": "2024-11-12T15:53:22.940Z",
    "updated_at": "2024-11-12T16:06:16.887Z",
    "closed_at": null,
    "finished?": false,
    "current_active_safety_orders_count": 3,
    "current_active_safety_orders": 3,
    "completed_safety_orders_count": 0,
    "completed_manual_safety_orders_count": 0,
    "cancellable?": true,
    "panic_sellable?": false,
    "trailing_enabled": false,
    "tsl_enabled": false,
    "stop_loss_timeout_enabled": false,
    "stop_loss_timeout_in_seconds": 0,
    "active_manual_safety_orders": 0,
    "pair": "USDT_ETH",
    "status": "panic_sell_pending",
    "localized_status": "Closing at Market Price",
    "take_profit": null,
    "take_profit_steps": [
        {
            "id": 0,
            "amount_percentage": 40.0,
            "profit_percentage": 2.0,
            "editable": true,
            "panic_sellable": true,
            "trade_id": 1115555094,
            "execution_timestamp": null,
            "initial_amount": "0.0122",
            "price": "3332.37",
            "status": "Placed"
        },
        {
            "id": 1,
            "amount_percentage": 50.0,
            "profit_percentage": 3.0,
            "editable": true,
            "panic_sellable": true,
            "trade_id": 1115555096,
            "execution_timestamp": null,
            "initial_amount": "0.0153",
            "price": "3365.04",
            "status": "Placed"
        },
        {
            "id": 2,
            "amount_percentage": 10.0,
            "profit_percentage": 4.0,
            "editable": true,
            "panic_sellable": true,
            "trade_id": 1115555101,
            "execution_timestamp": null,
            "initial_amount": "0.0032",
            "price": "3397.71",
            "status": "Placed"
        }
    ],
    "base_order_volume": "100.0",
    "safety_order_volume": "15.0",
    "safety_order_step_percentage": "1.0",
    "leverage_type": "not_specified",
    "leverage_custom_value": null,
    "bought_amount": "0.0307",
    "bought_volume": "100.19744735",
    "bought_average_price": "3263.7605",
    "base_order_average_price": "3263.7605",
    "sold_amount": "0.0",
    "sold_volume": "0.0",
    "sold_average_price": "0",
    "take_profit_type": "total",
    "final_profit": "-0.17443249",
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
    "usd_final_profit": "-0.17",
    "actual_profit": "-0.325325444",
    "actual_usd_profit": "-0.325325444",
    "failed_message": null,
    "reserved_base_coin": "100.19744735",
    "reserved_second_coin": "0.0307",
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
    "current_price": "3256.42",
    "take_profit_price": "3256.42",
    "stop_loss_price": null,
    "actual_profit_percentage": "-0.22",
    "reserved_quote_funds": "0.0",
    "reserved_base_funds": "0.0",
    "orderbook_price_currency": "USDT",
    "crypto_widget": null,
    "buy_steps": [
        {
            "price": "3231.12",
            "filled": "0.0"
        }
    ],
    "bot_events": [
        {
            "message": "Cancelling TakeProfit trade. Price: 3332.37 USDT Size: 40.654914 USDT (0.0122 ETH)",
            "created_at": "2024-11-12T16:06:17.220Z"
        },
        {
            "message": "Placing base order. Price: 3261.35 USDT Size: 100.123445 USDT (0.0307 ETH)",
            "created_at": "2024-11-12T15:53:23.066Z"
        },
        {
            "message": "Base order executed.  Price: 3263.7605 USDT.  Size: 100.19744735 USDT (0.0307 ETH)",
            "created_at": "2024-11-12T15:53:24.406Z"
        },
        {
            "message": "Placing TakeProfit trade.  Price: 3332.37 USDT Size: 40.654914 USDT (0.0122 ETH), the price should rise for 2.18% to close the deal",
            "created_at": "2024-11-12T15:53:24.626Z"
        },
        {
            "message": "Placing TakeProfit trade.  Price: 3365.04 USDT Size: 51.485112 USDT (0.0153 ETH), the price should rise for 3.18% to close the deal",
            "created_at": "2024-11-12T15:53:24.685Z"
        },
        {
            "message": "Placing TakeProfit trade.  Price: 3397.71 USDT Size: 10.872672 USDT (0.0032 ETH), the price should rise for 4.18% to close the deal",
            "created_at": "2024-11-12T15:53:24.748Z"
        },
        {
            "message": "Placing safety trade (1 out of 3). Price: 3231.12 USDT Size: 15.186264 USDT (0.0047 ETH)",
            "created_at": "2024-11-12T15:53:24.820Z"
        },
        {
            "message": "Placing safety trade (2 out of 3). Price: 3100.57 USDT Size: 25.734731 USDT (0.0083 ETH)",
            "created_at": "2024-11-12T15:53:24.876Z"
        },
        {
            "message": "Placing safety trade (3 out of 3). Price: 2578.37 USDT Size: 43.574453 USDT (0.0169 ETH)",
            "created_at": "2024-11-12T15:53:24.929Z"
        }
    ]
}
```
</details>