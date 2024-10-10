## Disable Grid Bot<br>

**Description:** Stops an existing Grid Bot using its ID<br>

**Permission:** BOTS_WRITEE<br>
**Security:** SIGNED<br>
<br>
<br>

-------- 

<mark style="color:green;background-color:white"> **POST**

<mark style="color:green;background-color:white"> **/ver1/grid_bots/{id}/disable**

-------- 

<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**id**  | `integer` | Yes |	| Unique 3Commas ID for this Grid Bot entity |

<br>
<br>

### Response Parameters<br>

{% hint style="info" %}
If successful, the response includes a copy of the updated [Grid bot](./README.md) entity.
{% endhint %}

<br>
<br>

### Example Request<br>

```json
POST /ver1/grid_bots/2338357/disable
```

### Example Response and errors

<details>
<summary>Status: 201 Created</summary><br>

```json
{
    "id": 2338357,
    "account_id": 32833909,
    "account_name": "My Binance",
    "is_enabled": false,
    "grids_quantity": "81",
    "created_at": "2024-10-03T19:53:35.530Z",
    "updated_at": "2024-10-04T12:56:30.912Z",
    "strategy_type": "manual",
    "upper_stop_loss_enabled": false,
    "lower_stop_loss_enabled": false,
    "note": null,
    "editable": false,
    "lower_price": "0.016352",
    "lower_stop_loss_price": null,
    "lower_stop_loss_action": "stop_bot",
    "upper_price": "0.022503",
    "upper_stop_loss_price": null,
    "upper_stop_loss_action": "stop_bot",
    "quantity_per_grid": "20.0",
    "leverage_type": "cross",
    "leverage_custom_value": "10.0",
    "name": "VETUSDT/BNFCR",
    "pair": "BNFCR_VETUSDT",
    "start_price": "0.021968",
    "grid_price_step": "1.00399920581210916146041542739112586575949572812639182",
    "current_profit": "1.9739482002440976",
    "current_profit_usd": "1.9739482002440976",
    "total_profits_count": "17",
    "bought_volume": "0.0",
    "sold_volume": "0.0",
    "profit_percentage": "0.1234688657622554423137524222839342",
    "current_price": "0.022341",
    "max_active_buy_lines": "81",
    "max_active_sell_lines": "81",
    "order_currency_type": "quote",
    "profit_currency_type": "quote",
    "trailing_up_enabled": "true",
    "grid_type": "geometric",
    "investment_base_currency": "0.0",
    "investment_quote_currency": "0.0",
    "unrealized_profit_loss": "0.0",
    "current_profit_loss": null,
    "current_profit_loss_percent": null,
    "orderbook_price_currency": "BNFCR",
    "expansion_down_enabled": "false",
    "expansion_down_stop_price": null,
    "grid_lines": [
        {
            "id": 256427632,
            "price": "0.018506",
            "side": null,
            "order_placed": false
        },
        ...
        {
            "id": 256427679,
            "price": "0.022325",
            "side": null,
            "order_placed": false
        }
    ]
}
```

