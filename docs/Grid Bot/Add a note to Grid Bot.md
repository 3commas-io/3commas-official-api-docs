## Add a note to Grid Bot<br>

**Description:** Adds a note to an existing Grid Bot<br>

**Permission:** BOTS_WRITEE<br>
**Security:** SIGNED<br>
<br>
<br>

-------- 

<mark style="color:green;background-color:white"> **POST**

<mark style="color:green;background-color:white"> **/ver1/grid_bots/{id}/note**

-------- 

<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**id**  | `integer` | Yes |	| Unique 3Commas ID for this Grid Bot entity |

<br>

### Body Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**note**  | `string`	| Yes | minlength:`1`<br> maxlength:`300` | Short note for this Grid Bot |

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
POST  /ver1/grid_bots/2345678/note

 { "note": "Welcome to my 3Commas" } 
```


### Example Response and errors

<details>
<summary>Status: 201 Created</summary><br>

```json
{
    "id": 2345678,
    "account_id": 12345678,
    "account_name": "My Gate.io",
    "is_enabled": true,
    "grids_quantity": "81",
    "created_at": "2024-10-07T19:25:19.985Z",
    "updated_at": "2024-10-09T14:13:39.557Z",
    "strategy_type": "manual",
    "upper_stop_loss_enabled": false,
    "lower_stop_loss_enabled": false,
    "note": "Welcome to my 3Commas",
    "editable": true,
    "lower_price": "0.10666",
    "lower_stop_loss_price": null,
    "lower_stop_loss_action": "stop_bot",
    "upper_price": "0.14684",
    "upper_stop_loss_price": null,
    "upper_stop_loss_action": "stop_bot",
    "quantity_per_grid": "1.525",
    "leverage_type": "cross",
    "leverage_custom_value": "2.0",
    "name": "DOGE_USDT/USDT",
    "pair": "USDT_DOGE_USDT",
    "start_price": "0.11039",
    "grid_price_step": "1.00400421244009637656317025927833165569247348802034686",
    "current_profit": "0.0525794080425",
    "current_profit_usd": "0.0525794080425",
    "total_profits_count": "11",
    "bought_volume": "0.0",
    "sold_volume": "0.0",
    "profit_percentage": "0.0432471845769986214701905266378677861600871",
    "current_price": "0.10845",
    "max_active_buy_lines": "81",
    "max_active_sell_lines": "81",
    "order_currency_type": "quote",
    "profit_currency_type": "quote",
    "trailing_up_enabled": "false",
    "grid_type": "geometric",
    "investment_base_currency": "187.866461151707395146189982951",
    "investment_quote_currency": "6.1",
    "unrealized_profit_loss": "0.05167074832",
    "current_profit_loss": "0.1042501563625",
    "current_profit_loss_percent": "0.0857469857923420859557751844894011126939894",
    "orderbook_price_currency": "USDT",
    "expansion_down_enabled": "false",
    "expansion_down_stop_price": null,
    "grid_lines": [
        {
            "id": 256570088,
            "price": "0.10972",
            "side": "sell",
            "order_placed": false
        },
        ... 
        {
            "id": 256563805,
            "price": "0.11283",
            "side": "sell",
            "order_placed": true
        }
    ]
}
```
