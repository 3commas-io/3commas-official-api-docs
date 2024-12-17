**Description:** Adds a note to an existing Grid Bot

**Permission:** BOTS_WRITEE
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "green" }}> POST </mark></code>

<code>`/ver1/grid_bots/{id}/note`</code>

</blockquote>

### Path Parameter

   id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID for this Grid Bot entity

### Body Parameter

   note&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Short note for this Grid Bot
   Minlength: <code>1</code>; Maxlength: <code>300</code>

### Response Parameters

If successful, the response includes a copy of the updated [Grid bot](./README.md) entity.

### Example Request

```json
POST  /ver1/grid_bots/2345678/note
```

```
Body:

{ "note": "Welcome to my 3Commas" } 
```

### Example Response and errors

<details>
<summary>Status: 201 Created</summary>

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

</details>
