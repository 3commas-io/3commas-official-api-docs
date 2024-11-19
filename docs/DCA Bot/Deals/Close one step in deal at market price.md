## Close one step in deal at market price<br>

**Description:** Closes a specific Trade within the Deal by market using its ID<br>

{% hint style="warning" %}
After this action, the final status **Panic_sold** will be automatically set by 3Commas.
{% endhint %}

**Permission:** BOTS_WRITE<br>
**Security:** SIGNED<br>

<br>

----------

<mark style="color:green"> **POST**

<mark style="color:green"> **/ver1/deals/{deal_id}/panic_sell_step**

----------

<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**deal_id**  | `integer`| Yes |  | Unique 3Commas ID Deal entity |

<br>

### Body Parameters<br>

| Name | Type | Mandatory | Values | Description
| ------------ | ------------ | ------------ | ------ | ------------
| **trade_id** | integer | Yes |   | Unique 3Commas ID Trade of the deal that should be sold |

<br>
{% hint style="info" %}
Use endpoint [Get Deal](DCA%20Bot/Deals/Get%20Deal.md) to get value for parameter 'trade_id'.
{% endhint %}

<br>
<br>

### Parameter response<br>

{% hint style="info" %}
If successful, the response includes an updated copy of the [Deals](./README.md) entity.
{% endhint %}

### Example request<br>

```
{{baseUrl}}/ver1/deals/:deal_id/panic_sell_step?trade_id=1123324654
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
    "id": 2298223960,
    "type": "Deal",
    "bot_id": 15562420,
    "max_safety_orders": 6,
    "deal_has_error": false,
    "account_id": 32199203,
    "active_safety_orders_count": 3,
    "created_at": "2024-11-14T15:29:42.248Z",
    "updated_at": "2024-11-14T15:49:42.509Z",
    "closed_at": null,
    "finished?": false,
    "current_active_safety_orders_count": 0,
    "current_active_safety_orders": 0,
    "completed_safety_orders_count": 1,
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
            "editable": false,
            "panic_sellable": false,
            "trade_id": 1123324654,
            "execution_timestamp": null,
            "initial_amount": "0.0149",
            "price": "3159.89",
            "status": "Panic closing"
        },
        {
            "id": 1,
            "amount_percentage": 50.0,
            "profit_percentage": 3.0,
            "editable": true,
            "panic_sellable": true,
            "trade_id": 1123324657,
            "execution_timestamp": null,
            "initial_amount": "0.0186",
            "price": "3190.87",
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
            "initial_amount": "0.0038",
            "price": "3221.85",
            "status": "Placed"
        }
    ],
    "base_order_volume": "100.0",
    "safety_order_volume": "15.0",
    "safety_order_step_percentage": "1.0",
    "leverage_type": "not_specified",
    "leverage_custom_value": null,
    "bought_amount": "0.0373",
    "bought_volume": "115.437080759",
    "bought_average_price": "3094.827902386058981233243967828",
    "base_order_average_price": "3098.4954",
    "sold_amount": "0.0",
    "sold_volume": "0.0",
    "sold_average_price": "0",
    "take_profit_type": "total",
    "final_profit": "-1.22727789",
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
    "usd_final_profit": "-1.23",
    "actual_profit": "0.263602741",
    "actual_usd_profit": "0.263602741",
    "failed_message": null,
    "reserved_base_coin": "115.437080759",
    "reserved_second_coin": "0.0373",
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
    "current_price": "3105.0",
    "take_profit_price": "3105.0",
    "stop_loss_price": "2974.555584",
    "actual_profit_percentage": "0.33",
    "reserved_quote_funds": "0.0",
    "reserved_base_funds": "0.0",
    "orderbook_price_currency": "USDT",
    "crypto_widget": {
        "progressAccuracy": 2,
        "TTPАctivated": false,
        "buyPrice": "3094.827902386058981233243967828",
        "currentPrice": "3105.0",
        "inverted": false,
        "stopLosses": [
            [
                "2974.555584",
                false
            ]
        ],
        "LP": null,
        "buySteps": [],
        "marks": [
            {
                "type": "tp",
                "label": "TP1",
                "price": "3159.89",
                "position": "down"
            },
            {
                "type": "tp",
                "label": "TP2",
                "price": "3190.87",
                "position": "down"
            },
            {
                "type": "tp",
                "label": "TP3",
                "price": "3221.85",
                "position": "down"
            }
        ]
    },
    "buy_steps": [],
    "bot_events": [
        {
            "message": "Safety trade (1 out of 6) executed. Price: 3070.57751 USDT Size: 15.0458298 USDT (0.0049 ETH)",
            "created_at": "2024-11-14T15:49:42.438Z"
        },
        {
            "message": "Cancelling TakeProfit trade. Price: 3163.63 USDT Size: 40.810827 USDT (0.0129 ETH)",
            "created_at": "2024-11-14T15:49:42.616Z"
        },
        {
            "message": "Cancelling TakeProfit trade. Price: 3194.65 USDT Size: 51.75333 USDT (0.0162 ETH)",
            "created_at": "2024-11-14T15:49:42.660Z"
        },
        {
            "message": "Cancelling TakeProfit trade. Price: 3225.67 USDT Size: 10.644711 USDT (0.0033 ETH)",
            "created_at": "2024-11-14T15:49:42.705Z"
        },
        {
            "message": "Placing TakeProfit trade.  Price: 3159.89 USDT Size: 47.082361 USDT (0.0149 ETH), the price should rise for 3.10% to close the deal",
            "created_at": "2024-11-14T15:49:42.960Z"
        },
        {
            "message": "Placing TakeProfit trade.  Price: 3190.87 USDT Size: 59.350182 USDT (0.0186 ETH), the price should rise for 4.11% to close the deal",
            "created_at": "2024-11-14T15:49:43.009Z"
        },
        {
            "message": "Placing TakeProfit trade.  Price: 3221.85 USDT Size: 12.24303 USDT (0.0038 ETH), the price should rise for 5.12% to close the deal",
            "created_at": "2024-11-14T15:49:43.059Z"
        },
        {
            "message": "Safety trade (3 out of 6) cancelled. Price: 2447.81 USDT Size: 43.571018 USDT (0.0178 ETH)",
            "created_at": "2024-11-14T15:55:12.304Z"
        },
        {
            "message": "Safety trade (2 out of 6) cancelled. Price: 2943.57 USDT Size: 25.609059 USDT (0.0087 ETH)",
            "created_at": "2024-11-14T16:00:12.654Z"
        },
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