## Get deal of DCA Bot<br>

**Description:** Shows information about a specific deal of DCA Bot using its ID<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue"> <strong>GET</strong><br>
<mark style="color:blue"> <strong>/ver1/deals/{deal_id}/show</strong>

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
If successful, the response includes a copy of [Deals](./README.md) entity.
{% endhint %}

<br>
<br>

### Example Request<br>

```json
GET /ver1/deals/2295490936/show
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```json
{
    "from_currency_id": 0,
    "to_currency_id": 0,
    "id": 2295490936,
    "type": "Deal",
    "bot_id": 15577628,
    "max_safety_orders": 3,
    "deal_has_error": false,
    "account_id": 32199203,
    "active_safety_orders_count": 2,
    "created_at": "2024-11-08T00:15:26.266Z",
    "updated_at": "2024-11-08T00:53:53.906Z",
    "closed_at": null,
    "finished?": false,
    "current_active_safety_orders_count": 2,
    "current_active_safety_orders": 2,
    "completed_safety_orders_count": 1,
    "completed_manual_safety_orders_count": 0,
    "cancellable?": true,
    "panic_sellable?": true,
    "trailing_enabled": false,
    "tsl_enabled": false,
    "stop_loss_timeout_enabled": false,
    "stop_loss_timeout_in_seconds": 0,
    "active_manual_safety_orders": 0,
    "pair": "USDT_ETH",
    "status": "bought",
    "localized_status": "Active",
    "take_profit": "1.0",
    "take_profit_steps": [],
    "base_order_volume": "80.0",
    "safety_order_volume": "30.0",
    "safety_order_step_percentage": "1.0",
    "leverage_type": "not_specified",
    "leverage_custom_value": null,
    "bought_amount": "0.0397",
    "bought_volume": "116.484459091",
    "bought_average_price": "2934.117357455919395465994962217",
    "base_order_average_price": "2941.72879",
    "sold_amount": "0.0",
    "sold_volume": "0.0",
    "sold_average_price": "0",
    "take_profit_type": "total",
    "final_profit": "-1.03253259",
    "martingale_coefficient": "1.0",
    "martingale_volume_coefficient": "1.7",
    "martingale_step_coefficient": "4.0",
    "stop_loss_percentage": "22.0",
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
    "usd_final_profit": "-1.03",
    "actual_profit": "0.899717231",
    "actual_usd_profit": "0.899717231",
    "failed_message": null,
    "reserved_base_coin": "116.484459091",
    "reserved_second_coin": "0.0397",
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
    "current_price": "2959.74",
    "take_profit_price": "2966.43",
    "stop_loss_price": "2294.5484562",
    "actual_profit_percentage": "0.87",
    "reserved_quote_funds": "0.0",
    "reserved_base_funds": "0.0",
    "orderbook_price_currency": "USDT",
    "crypto_widget": {
        "progressAccuracy": 2,
        "TTPАctivated": false,
        "buyPrice": "2934.117357455919395465994962217",
        "currentPrice": "2959.74",
        "inverted": false,
        "stopLosses": [
            [
                "2294.5484562",
                false
            ]
        ],
        "LP": null,
        "buySteps": [
            {
                "price": "2794.64",
                "filled": "0.0"
            }
        ],
        "marks": [
            {
                "type": "tp",
                "label": "TP",
                "price": "2966.43",
                "position": "down"
            }
        ]
    },
    "buy_steps": [
        {
            "price": "2794.64",
            "filled": "0.0"
        }
    ],
    "bot_events": [
        {
            "message": "Placing safety trade (2 out of 3). Price: 2794.64 USDT Size: 54.216016 USDT (Reinvested 2.93921 USDT) (0.0194 ETH)",
            "created_at": "2024-11-08T00:15:29.309Z"
        },
        {
            "message": "Safety trade (1 out of 3) executed. Price: 2915.22231 USDT Size: 33.23353433 USDT (0.0114 ETH)",
            "created_at": "2024-11-08T00:53:53.851Z"
        },
        {
            "message": "Cancelling TakeProfit trade. Price: 2974.13 USDT Size: 84.167879 USDT (0.0283 ETH)",
            "created_at": "2024-11-08T00:53:53.964Z"
        },
        {
            "message": "TakeProfit trade cancelled. Price: 2974.13 USDT Size: 84.167879 USDT (0.0283 ETH)",
            "created_at": "2024-11-08T00:53:53.991Z"
        },
        {
            "message": "Placing TakeProfit trade.  Price: 2966.43 USDT Size: 117.767271 USDT (0.0397 ETH), the price should rise for 1.90% to close the deal",
            "created_at": "2024-11-08T00:53:54.065Z"
        },
        {
            "message": "Placing safety trade (3 out of 3). Price: 2323.96 USDT Size: 89.704856 USDT (Reinvested 2.93921 USDT) (0.0386 ETH)",
            "created_at": "2024-11-08T00:53:54.230Z"
        },
        {
            "message": "Placing base order. Price: 2939.22 USDT Size: 83.179926 USDT (Reinvested 2.93921 USDT) (0.0283 ETH)",
            "created_at": "2024-11-08T00:15:26.517Z"
        },
        {
            "message": "Base order executed.  Price: 2941.72879 USDT.  Size: 83.25092476 USDT (0.0283 ETH)",
            "created_at": "2024-11-08T00:15:28.941Z"
        },
        {
            "message": "Placing TakeProfit trade.  Price: 2974.13 USDT Size: 84.167879 USDT (0.0283 ETH), the price should rise for 1.20% to close the deal",
            "created_at": "2024-11-08T00:15:29.098Z"
        },
        {
            "message": "Placing safety trade (1 out of 3). Price: 2912.31 USDT Size: 33.200334 USDT (Reinvested 2.93921 USDT) (0.0114 ETH)",
            "created_at": "2024-11-08T00:15:29.243Z"
        }
    ]
}
```
</details>