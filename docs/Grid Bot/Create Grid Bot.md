## Create a Grid Bot<br>

**Description:** Creates a new Grid Bot<br>

**Permission:** BOTS_WRITEE<br>
**Security:** SIGNED<br>
<br>
<br>

-------- 

<mark style="color:green;background-color:white"> **POST**

<mark style="color:green;background-color:white"> **/ver1/grid_bots/manual**

-------- 

<br>
<br>

## Body parameters<br>

| Name | Type | Mandatory | Values | Description |
|------|------|-----------|-----------------|-------------|
|**name** | `string` | No | `[1 ... 40]` characters | Grid bot name specified by the user. If not specified, the system will generate a default name automatically |
|**account_id** | `integer` | Yes | - | ID of the exchange account entity where the Grid Bot is created |
|**pair** | `string` | Yes | - | Trading pair in 3Commas format |
|**upper_price** | `number` | Yes |  | The maximum price of the trading range, above which the bot will not place sell orders |
|**lower_price** | `number` | Yes | - | The minimum price of the trading range, below which the bot will not place buy orders |
|**grid_quantity** | `integer` | Yes | - | The number of grid levels between the upper and lower price boundaries. This value is limited based on the exchange’s rules for rates, limits, and leverage |
|**grid_type** | `string` | No | `geometric`<br>`arithmetic` | Type of Grid Bot configuration |
|**quantity_per_grid** | `number` | Yes | - | Quantity of the asset allocated per 
Grid Bot level order |
|**order_currency_type** | `string` | No | `base`<br>`quote` | The currency type used for placing orders |
|**profit_currency_type** | `string` | No | `base`<br> `quote` | The currency type used for calculating profits |
|**upper_stop_loss_enabled** | `boolean` | No | `true`<br> `false` | Indicates if upper stop-loss settings are enabled. Use `true` to activate the settings group |
|**upper_stop_loss_action** | `string` | No | `stop_bot`<br> `stop_bot_and_sell`<br> `stop_bot_and_close_position` | The action to perform if the asset price reaches or exceeds the set upper stop-loss level |
|**upper_stop_loss_price** | `number` | No | - | The price level that triggers the upper stop-loss action |
|**lower_stop_loss_enabled** | `boolean` | No | `true`<br>`false` | Indicates if lower stop-loss settings are enabled. Use `true` to activate the settings group |
|**lower_stop_loss_action** | `string` | No | `stop_bot`<br> `stop_bot_and_sell`<br> `stop_bot_and_close_position` | The action to perform if the asset price reaches or falls below the set lower stop-loss level |
|**lower_stop_loss_price** | `number` | No | - | The price level that triggers the lower stop-loss action |
|**leverage_type** | `string` | No | `cross`<br>`isolated` | Type of leverage used for the futures account |
|**leverage_custom_value** | `number` | No | - | Custom leverage value set for the Grid Bot |
|**mode** | `string` | No | `reversal`<br>`long`<br>`short` | Grid Mode for futures trading |
|**max_active_buy_lines** | `integer` | No | - | Maximum number of active buy orders that can be placed simultaneously |
|**max_active_sell_lines** | `integer` | No | - | Maximum number of active sell orders that can be placed simultaneously |
|**trailing_up_enabled** | `boolean` | No | `true`<br>`false` | Indicates if the trailing-up feature is enabled |
|**trailing_down_enabled** | `boolean` | No | `true`<br>`false` | Indicates if the trailing-down feature is enabled |
|**expansion_down_enabled** | `boolean` | No | `true`<br>`false` | Indicates if the grid expansion downwards is enabled |
|**expansion_down_stop_price** | `number` | Yes (if `expansion_down_enabled` is `true`) | - | The price at which the downward grid expansion should stop |
|**expansion_up_enabled** | `boolean` | No | `true`<br>`false` | Indicates if the grid expansion upwards is enabled. |
|**expansion_up_stop_price** | `number` | Yes (if `expansion_up_enabled` is `true`) | - | The price at which the upward grid expansion should stop |
|**ignore_warnings** | `boolean` | No | `true`<br>`false` | Ignores warnings and forces the creation of the Grid Bot |
|**note** | `string` | No | `[1 ... 300]` characters | Optional user-defined note for the Grid Bot |

<br>
<br>


**Some tips**

1. Use the [All market pairs](Market%20data/All%20market%20pairs.md) endpoint to get the list of supported pairs.

2. Limits grid is dependent on the exchange. It should be based on [Currency rates and limits with leverage data](Market%20data/Currency%20rates%20and%20limits%20with%20leverage%20data.md)

<br>
<br>

### Parameters response<br>

{% hint style="info" %}
If successful, the response includes a copy of [Grid Bot](./README.md) entity.
{% endhint %}

<br>
<br>

### Example Request<br>

```json
{
    "account_id": 73223,
    "pair": 'USDT_W',
    "name": "SHORT W PROFIT",
    "upper_price": 1.1,
    "lower_price": 0.56,
    "quantity_per_grid": 40,
    "grids_quantity": 28,
    "max_active_buy_lines": 28,
    "max_active_sell_lines": 28,
    "order_currency_type": "base",
    "profit_currency_type": "base",
    "ignore_warnings": false,
    "trailing_up_enabled": false,
    "trailing_down_enabled": true,
    "grid_type": "arithmetic",
    "expansion_down_enabled": false,
    "expansion_up_enabled": true,
    "expansion_up_stop_price": 1.57
}
```

### Example Response and errors<br>
<details>
<summary>Status: 201 Created</summary><br>
```json
{
   "id": 2291723,
   "account_id": 73223,
   "account_name": "binance",
   "is_enabled": false,
   "grids_quantity": "50",
   "created_at": "2024-07-17T14:46:46.414Z",
   "updated_at": "2024-07-17T14:46:46.505Z",
   "strategy_type": "manual",
   "upper_stop_loss_enabled": true,
   "lower_stop_loss_enabled": true,
   "note": "Example bot",
   "editable": true,
   "lower_price": "56000.0",
   "lower_stop_loss_price": "50000.0",
   "lower_stop_loss_action": "stop_bot_and_sell",
   "upper_price": "72000.0",
   "upper_stop_loss_price": "75000.0",
   "upper_stop_loss_action": "stop_bot",
   "quantity_per_grid": "15.0",
   "leverage_type": "not_specified",
   "leverage_custom_value": null,
   "name": "USDT_BTC EXAMPLE",
   "pair": "USDT_BTC",
   "start_price": null,
   "grid_price_step": "326.530612244897959183673469387755102041",
   "current_profit": "0.0",
   "current_profit_usd": "0.0",
   "total_profits_count": "0",
   "bought_volume": "0.0",
   "sold_volume": "0.0",
   "profit_percentage": "0.0",
   "current_price": "65229.37",
   "max_active_buy_lines": "50",
   "max_active_sell_lines": "50",
   "order_currency_type": "quote",
   "profit_currency_type": "quote",
   "trailing_up_enabled": "true",
   "grid_type": "arithmetic",
   "investment_base_currency": "0.0",
   "investment_quote_currency": "0.0",
   "unrealized_profit_loss": "0",
   "current_profit_loss": null,
   "current_profit_loss_percent": null,
   "orderbook_price_currency": "USDT",
   "expansion_down_enabled": "true",
   "expansion_down_stop_price": "54000.0",
   "grid_lines": [
      {
         "id": 253750214,
         "price": "65142.86",
         "side": null,
         "order_placed": false
      },
      {
         "id": 253750235,
         "price": "72000.0",
         "side": "sell",
         "order_placed": false
      },
      ...
      
      {
         "id": 253750213,
         "price": "64816.33",
         "side": "buy",
         "order_placed": false
      }
   ]
}
```
</details>

<details>
<summary>Status: 400 Bad Request</summary><br>
```json
{
   "error": "unknown_error",
   "error_description": "Unknown error occurred#Exceptions::DealSilentException"
}
```
</details><br>

<details>
<summary>Status: 404 Bad Request</summary><br>
{
   "error": "not_found",
   "error_description": "Not Found"
}
</details>