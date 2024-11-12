## Adding manual safety order<br>

**Description:** TBD <br>

**Permission:** BOTS_WRITE<br>
**Security:** SIGNED<br>

<br>

----------

<mark style="color:blue"> **POST**

<mark style="color:blue"> **/ver1/deals/{deal_id}/add_funds**

----------

<br>
<br>

### Path Parameter<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**deal_id**  | `integer`| Yes |  | Unique 3Commas ID Deal entity |


### Body Parameters<br>

| Name | Type | Mandatory | Values | Description |
| ------------ | ------------ | -----------| -------- | ------------ |
| **quantity** | `number` | Yes |   | Specifies the amount for the safety order |
| **is_market** | `boolean` | Yes |   | Indicates the type of order: `true` for a market order, `false` for a limit order |
| **response_type** | `string` | No | `empty`<br>`deal`<br>`market_order` | Defines the response format.<br>Default: `empty` |
| **rate** | `number` | Yes |   | Sets the rate for the safety order. <br> Required if a limit order is used|

<br>
<br>

### Response Parameters<br>

| Name | Type |	Description|
|------|------|-----------|
|**status**  | `string`| [TBD] |





<br>
<br>

### Example Request<br>

```json
POST /ver1/deals/2295672969/add_funds

{
   "quantity": 0.015,
   "is_market": true
}

```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

{% tabs %}
{% tab title="empty" %}

```json
{
    "status": "success"
}
```

{% endtab %}

{% tab title="deal" %}

It's using only for 1 pair bot.

```json
{
    "from_currency_id": 0,
    "to_currency_id": 0,
    "id": 2295672969,
    "type": "Deal::ShortDeal",
    "bot_id": 15620681,
    "max_safety_orders": 2,
    "deal_has_error": true,
    "account_id": 32402783,
    "active_safety_orders_count": 2,
    "created_at": "2024-11-08T20:39:05.727Z",
    "updated_at": "2024-11-11T13:15:53.797Z",
    "closed_at": null,
    "finished?": false,
    "current_active_safety_orders_count": 1,
    "current_active_safety_orders": 1,
    "completed_safety_orders_count": 1,
    "completed_manual_safety_orders_count": 0,
    "cancellable?": true,
    "panic_sellable?": true,
    "trailing_enabled": false,
    "tsl_enabled": false,
    "stop_loss_timeout_enabled": false,
    "stop_loss_timeout_in_seconds": 0,
    "active_manual_safety_orders": 1,
    "pair": "USDT_1INCH",
    "status": "bought",
    "localized_status": "Active",
    "take_profit": "3.0",
    "take_profit_steps": [],
    "base_order_volume": "10.0",
    "safety_order_volume": "15.0",
    "safety_order_step_percentage": "1.0",
    "leverage_type": "not_specified",
    "leverage_custom_value": null,
    "bought_amount": "0.0",
    "bought_volume": "0.0",
    "bought_average_price": "0",
    "base_order_average_price": "0.2580424",
    "sold_amount": "25.0",
    "sold_volume": "6.475282",
    "sold_average_price": "0.25901128",
    "take_profit_type": "total",
    "final_profit": "-0.0487355",
    "martingale_coefficient": "1.0",
    "martingale_volume_coefficient": "1.7",
    "martingale_step_coefficient": "4.0",
    "stop_loss_percentage": "0.0",
    "sl_to_breakeven_enabled": false,
    "sl_to_breakeven_data": null,
    "error_message": "Error placing safety trade (2 out of 2): Insufficient funds. ERR_805Y Not enough 1INCH.",
    "profit_currency": "base_currency",
    "stop_loss_type": "stop_loss",
    "safety_order_volume_type": "base_currency",
    "base_order_volume_type": "base_currency",
    "from_currency": "USDT",
    "to_currency": "1INCH",
    "final_profit_percentage": "0",
    "usd_final_profit": "-0.05",
    "actual_profit": "-0.997183",
    "actual_usd_profit": "-0.997183",
    "failed_message": "Error placing safety trade (2 out of 2): Insufficient funds. ERR_805Y Not enough 1INCH.",
    "reserved_base_coin": "6.475282",
    "reserved_second_coin": "25.0",
    "trailing_deviation": "0.2",
    "trailing_max_price": null,
    "tsl_max_price": null,
    "strategy": "short",
    "last_known_position_info": null,
    "min_profit_percentage": "0.0",
    "min_profit_type": null,
    "close_strategy_list": [],
    "safety_strategy_list": [],
    "note": null,
    "add_fundable": true,
    "smart_trade_convertable": true,
    "bot_name": "1INCH/USDT Classic trading",
    "account_name": "My Binance US",
    "market_type": "spot",
    "current_price": "0.2986",
    "take_profit_price": "0.2509",
    "stop_loss_price": null,
    "actual_profit_percentage": "-15.28",
    "reserved_quote_funds": "0.0",
    "reserved_base_funds": "0.0",
    "orderbook_price_currency": "USDT",
    "crypto_widget": {
        "progressAccuracy": 2,
        "TTPАctivated": false,
        "buyPrice": "0.25901128",
        "currentPrice": "0.2986",
        "inverted": true,
        "stopLosses": null,
        "LP": null,
        "buySteps": [
            {
                "price": "0.297",
                "filled": "NaN"
            }
        ],
        "marks": [
            {
                "type": "tp",
                "label": "TP",
                "price": "0.25",
                "position": "down"
            }
        ]
    },
    "buy_steps": [
        {
            "price": "0.297",
            "filled": "NaN"
        }
    ],
    "bot_events": [
        {
            "message": "Placing manual safety trade. Price: 0.297 USDT Size: 0 USDT (0 1INCH)",
            "created_at": "2024-11-11T16:46:59.577Z"
        },
        ...
    ]
}
```
{% endtab %}

{% tab title="market_order" %}

```
{
    "order_id": "1110817001",
    "order_type": "SELL",
    "deal_order_type": "Manual Safety",
    "cancellable": true,
    "status_string": "Active",
    "created_at": "2024-11-11T16:46:59.479Z",
    "updated_at": "2024-11-11T16:46:59.479Z",
    "quantity": "0.0",
    "quantity_remaining": "0.0",
    "total": "0.0",
    "rate": "0.297",
    "average_price": "0.0"
}
```
{% endtab %}
{% endtabs %}

</details>

<details>
<summary>Status: 400 Bad request</summary><br>
```
{
    "error": "record_invalid",
    "error_description": "Invalid parameters",
    "error_attributes": {
        "rate": [
            "is missing"
        ]
    }
}
```
</details>