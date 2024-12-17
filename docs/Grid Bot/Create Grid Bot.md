**Description:** Creates a new Grid Bot

**Permission:** BOTS_WRITEE
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "green" }}> POST </mark></code>

<code>/ver1/grid_bots/manual</code>

</blockquote>

### Body parameters

   name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Grid bot name specified by the user
   If not specified, the system will generate a default name automatically
   Characters: <code>[1 ... 40]</code>

   account_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   ID of the exchange account entity where the Grid Bot is created

   pair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Trading pair in 3Commas format

   Use the [All market pairs](Market%20data/All%20market%20pairs.md) endpoint to retrieve the list of supported pairs and their format

   upper_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   The maximum price of the trading range, above which the bot will not place sell orders

   lower_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
  The minimum price of the trading range, below which the bot will not place buy orders

   grids_quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   The number of grid levels between the upper and lower price boundaries

   grid_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Type of Grid Bot configuration: <code>geometric</code> or <code>arithmetic</code>
   Default: <code>arithmetic</code>

   quantity_per_grid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Quantity allocated for each Grid Bot level order

   order_currency_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The currency type used for placing orders: <code>base</code> or <code>quote</code>
   Default: <code>quote</code>

   profit_currency_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The currency in which the bot will generate profit: <code>base</code> or <code>quote</code>
   Default: <code>quote</code>

   upper_stop_loss_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates if upper stop-loss settings are enabled. Use <code>true</code> to activate the settings group

   upper_stop_loss_action&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The action to perform if the asset price reaches or exceeds the set upper stop-loss level:
   <code>stop_bot</code>,
   <code>stop_bot_and_sell</code>, <code>stop_bot_and_close_position</code>

   upper_stop_loss_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   The price level that triggers the upper stop-loss action

   lower_stop_loss_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates if lower stop-loss settings are enabled. Use <code>true</code> to activate the settings group

   lower_stop_loss_action&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The action to perform if the asset price reaches or falls below the set lower stop-loss level:
   <code>stop_bot</code>, <code>stop_bot_and_sell</code>, <code>stop_bot_and_close_position</code>
   Default: <code>stop_bot</code>

   lower_stop_loss_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   The price level that triggers the lower stop-loss action

   leverage_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Type of leverage used for the futures account: <code>cross</code>,<code>isolated</code>
   Default: <code>not_specified</code>,

   leverage_custom_value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Custom leverage value set for the Grid Bot

   mode&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Type of strategy used by the bot: <code>reversal</code>, <code>long</code>, <code>short</code>

   max_active_sell_lines&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Maximum number of active sell orders that can be placed simultaneously

   trailing_up_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates if the trailing-up feature is enabled (<code>true</code> or not (<code>false</code>)

   trailing_down_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates if the trailing-down feature is enabled (<code>true</code> or not (<code>false</code>)

   expansion_down_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates if the grid expansion downwards is enabled (<code>true</code> or not (<code>false</code>)

   expansion_down_stop_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   The price at which the downward grid expansion should stop
   This parameter is required when <code>expansion_down_enabled</code> is set to <code>true</code>

   expansion_up_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates if the grid expansion upwards is enabled (<code>true</code> or not (<code>false</code>)

   expansion_up_stop_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   The price at which the upward grid expansion should stop.
   This parameter is required when <code>expansion_up_enabled</code> is set to <code>true</code>.

   ignore_warnings&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Ignores warnings and forces the creation of the Grid Bot (<code>true</code>) or not (<code>false</code>)

   note&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Optional user-defined note for the Grid Bot.
   <code>[1 ... 300]</code> characters

### Parameters response

If successful, the response includes a copy of [Grid Bot](./README.md) entity.

### Example Request

```json
{
   "account_id": 12345678,
   "pair": "USDT_ETH",
   "name": "Test GRID",
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

### Example Response and errors

<details>
<summary>Status: 201 Created</summary>

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
<summary>Status: 400 Bad Request</summary>

```json
{
    "error": "record_invalid",
    "error_description": "Invalid parameters",
    "error_attributes": {
        "quantity_per_grid": [
            "is missing",
            "is empty"
        ]
    }
}

```

</details>

<details>
<summary>Status: 404 Not Found</summary>
```json
{
   "error": "not_found",
   "error_description": "Not Found"
}
```
</details>
