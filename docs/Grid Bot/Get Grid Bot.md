## Get Grid Bot<br>

**Description:** Shows information about a specific Grid Bot using its ID <br>

<br>

**Permission:** BOTS_WRITEE<br>
**Security:** SIGNED<br>
<br>
<br>

-------- 

<mark style="color:blue;background-color:white"> **GET**

<mark style="color:blue;background-color:white"> **/ver1/grid_bots/{id}**

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
GET /ver1/grid_bots/2338357
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary><br>


```json
{
    "id": 2338357,
    "account_id": 32833909,
    "account_name": "My Binance",
    "is_enabled": true,
    "grids_quantity": "81",
    "created_at": "2024-10-03T19:53:35.530Z",
    "updated_at": "2024-10-04T14:24:47.391Z",
    "strategy_type": "manual",
    "upper_stop_loss_enabled": false,
    "lower_stop_loss_enabled": false,
    "note": null,
    "editable": true,
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
    "start_price": "0.022395",
    "grid_price_step": "1.00399920581210916146041542739112586575949572812639182",
    "current_profit": "1.9323866098359343",
    "current_profit_usd": "1.9323866098359343",
    "total_profits_count": "18",
    "bought_volume": "0.0",
    "sold_volume": "0.0",
    "profit_percentage": "0.1207827785503398894943176296765248",
    "current_price": "0.022285",
    "max_active_buy_lines": "81",
    "max_active_sell_lines": "81",
    "order_currency_type": "quote",
    "profit_currency_type": "quote",
    "trailing_up_enabled": "true",
    "grid_type": "geometric",
    "investment_base_currency": "1784.627049104663362292020389567",
    "investment_quote_currency": "160.0",
    "unrealized_profit_loss": "-0.03770892",
    "current_profit_loss": "1.8946776898359343",
    "current_profit_loss_percent": "0.1184258029272686958260732738066206",
    "orderbook_price_currency": "BNFCR",
    "expansion_down_enabled": "false",
    "expansion_down_stop_price": null,
    "grid_lines": [
        {
            "id": 256427679,
            "price": "0.022325",
            "side": "sell",
            "order_placed": true
        },
 ...
        {
            "id": 256427677,
            "price": "0.022147",
            "side": "buy",
            "order_placed": true
        }
    ]
}
```