## Create Grid Bot<br>
<br>

**Description:** Creates a new Grid Bot<br>

**Permission:** BOTS_WRITEE<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:green"><strong> POST </strong></mark></code>

<code>/ver1/grid_bots/manual</code>

</blockquote>

<br>

### Body parameters<br>
<p>
   <strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Grid bot name specified by the user<br>
   If not specified, the system will generate a default name automatically<br>
   Characters: <code>[1 ... 40]</code>
</p>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   ID of the exchange account entity where the Grid Bot is created
</p>
<p>
   <strong>pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Trading pair in 3Commas format
   
   Use the [All market pairs](Market%20data/All%20market%20pairs.md) endpoint to retrieve the list of supported pairs and their format
</p>
<p>
   <strong>upper_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   The maximum price of the trading range, above which the bot will not place sell orders
</p>
<p>
   <strong>lower_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
  The minimum price of the trading range, below which the bot will not place buy orders
</p>
<p>
   <strong>grids_quantity</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   The number of grid levels between the upper and lower price boundaries
</p>
<p>
   <strong>grid_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Type of Grid Bot configuration: <code>geometric</code> or <code>arithmetic</code>
   Default: <code>arithmetic</code>
</p>
<p>
   <strong>quantity_per_grid</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Quantity allocated for each Grid Bot level order
</p>
<p>
   <strong>order_currency_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The currency type used for placing orders: <code>base</code> or <code>quote</code><br>
   Default: <code>quote</code>
</p>
<p>
   <strong>profit_currency_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The currency in which the bot will generate profit: <code>base</code> or <code>quote</code><br>
   Default: <code>quote</code>
</p>
<p>
   <strong>upper_stop_loss_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates if upper stop-loss settings are enabled. Use <code>true</code> to activate the settings group
</p>
<p>
   <strong>upper_stop_loss_action</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The action to perform if the asset price reaches or exceeds the set upper stop-loss level: 
   <code>stop_bot</code>,
   <code>stop_bot_and_sell</code>, <code>stop_bot_and_close_position</code>
</p>
<p>
   <strong>upper_stop_loss_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The price level that triggers the upper stop-loss action
</p>
<p>
   <strong>lower_stop_loss_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates if lower stop-loss settings are enabled. Use <code>true</code> to activate the settings group
</p>
<p>
   <strong>lower_stop_loss_action</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The action to perform if the asset price reaches or falls below the set lower stop-loss level:
   <code>stop_bot</code>, <code>stop_bot_and_sell</code>, <code>stop_bot_and_close_position</code><br>
   Default: <code>stop_bot</code>
</p>
<p>
   <strong>lower_stop_loss_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The price level that triggers the lower stop-loss action
</p>
<p>
   <strong>leverage_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Type of leverage used for the futures account: <code>cross</code>,<code>isolated</code>
   Default: <code>not_specified</code>,

</p>
<p>
   <strong>leverage_custom_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Custom leverage value set for the Grid Bot
</p>
<p>
   <strong>mode</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Type of strategy used by the bot: <code>reversal</code>, <code>long</code>, <code>short</code>
</p>
<p>
   <strong>max_active_sell_lines</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Maximum number of active sell orders that can be placed simultaneously
</p>
<p>
   <strong>trailing_up_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates if the trailing-up feature is enabled (<code>true</code> or not (<code>false</code>)
</p>
<p>
   <strong>trailing_down_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates if the trailing-down feature is enabled (<code>true</code> or not (<code>false</code>)
</p>
<p>
   <strong>expansion_down_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates if the grid expansion downwards is enabled (<code>true</code> or not (<code>false</code>)
</p>
<p>
   <strong>expansion_down_stop_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   The price at which the downward grid expansion should stop<br>
   This parameter is required when <code>expansion_down_enabled</code> is set to <code>true</code>
</p>
<p>
   <strong>expansion_up_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates if the grid expansion upwards is enabled (<code>true</code> or not (<code>false</code>)
</p>
<p>
   <strong>expansion_up_stop_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   The price at which the upward grid expansion should stop.
   This parameter is required when <code>expansion_up_enabled</code> is set to <code>true</code>.
</p>
<p>
   <strong>ignore_warnings</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Ignores warnings and forces the creation of the Grid Bot (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>note</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Optional user-defined note for the Grid Bot.<br>
   <code>[1 ... 300]</code> characters
</p>
<br>

### Parameters response<br>

If successful, the response includes a copy of [Grid Bot](./README.md) entity.
<br>

### Example Request<br>

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
<summary>Status: 404 Not Found</summary><br>
{
   "error": "not_found",
   "error_description": "Not Found"
}
</details>