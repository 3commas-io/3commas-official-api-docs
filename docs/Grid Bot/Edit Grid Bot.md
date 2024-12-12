## Edit Grid Bot<br>
<br>

**Description:** Updates an existing Grid Bot using its ID<br> 

**Permission:** BOTS_WRITE<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:purple"><strong> PATCH </strong></mark></code>

<code>/ver1/grid_bots/{id}/manual</code>

</blockquote>

<br>

### Path Parameter<br>
<p>
   <strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this Grid Bot entity
</p>
<br>

### Body Parameters<br>
<p>
   <strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Grid Bot name specified by the user
</p>
<p>
   <strong>upper_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   The maximum price of the trading range, above which the bot will not place sell orders
</p>
<p>
   <strong>lower_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   The maximum price of the trading range, above which the bot will not place sell orders
</p>
<p>
   <strong>grid_quantity</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   The number of grid levels between the upper and lower price boundaries.
   
   This value is limited based on [the exchange’s rules for rates, limits, and leverage](/docs/Market%20data/Currency%20rates%20and%20limits%20with%20leverage%20data.md) 
</p>
<p>
   <strong>grid_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Type of Grid Bot configuration: <code>geometric</code> or <code>arithmetic</code>
</p>
<p>
   <strong>quantity_per_grid</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Quantity of the asset allocated per Grid Bot level order 
</p>
<p>
   <strong>upper_stop_loss_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Indicates if upper stop-loss settings are enabled. Use <code>true</code> to activate the settings group
</p>
<p>
   <strong>upper_stop_loss_action</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The action to perform if the asset price reaches or exceeds the set upper stop-loss level: <code>stop_bot</code>, <code>stop_bot_and_sell</code>, <code>stop_bot_and_close_position</code>
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
   The action to perform if the asset price reaches or falls below the set lower stop-loss level: <code>stop_bot</code>,<code>stop_bot_and_sell</code>, <code>stop_bot_and_close_position</code>
</p>
<p>
   <strong>lower_stop_loss_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The price level that triggers the lower stop-loss action
</p>
<p>
   <strong>leverage_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Type of leverage used for the futures account: <code>cross</code>,<code>isolated</code>
</p>
<p>
   <strong>leverage_custom_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Custom leverage value set for the Grid Bot
</p>
<p>
   <strong>max_active_buy_lines</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Maximum number of active buy orders that can be placed simultaneously
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
   <strong>expansion_down_stop_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The price at which the downward grid expansion should stop<br>
   This parameter is required when <code>expansion_down_enabled</code> is set to <code>true</code>
</p>
<p>
   <strong>expansion_up_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates if the grid expansion upwards is enabled (<code>true</code> or not (<code>false</code>)
</p>
<p>
   <strong>expansion_up_stop_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
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

If successful, the response includes a copy of the updated [Grid Bot](./README.md) entity.

<br>

### Example Request<br>

```json
PATCH /ver1/grid_bots/2291725/manual

{
    "name": "CHANGED USDT_BTCUSDT EXAMPLE",
    "upper_price": 70000.0,
    "lower_price": 56000.0,
    "quantity_per_grid": 150,
    "grids_quantity": 40,
    "order_currency_type": "quote",
    "profit_currency_type": "quote",
    "trailing_up_enabled": true,
    "trailing_down_enabled": false,
    "grid_type": "arithmetic",
    "expansion_down_enabled": true,
    "expansion_down_stop_price": 54000.0,
    "expansion_up_enabled": false,
    "lower_stop_loss_enabled": true,
    "lower_stop_loss_price": 50000.0,
    "lower_stop_loss_action": "stop_bot_and_close_position",
    "upper_stop_loss_enabled": true,
    "upper_stop_loss_price": 75000.0,
    "upper_stop_loss_action": "stop_bot",
    "note": "Example bot",
    "leverage_type": "cross",
    "leverage_custom_value": 10,
    "mode": "long"
}

```

<br>
<br>

### Example response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```json
{"id"=>2291725,
 "account_id"=>12555712,
 "account_name"=>"Binance Futures",
 "is_enabled"=>false,
 "grids_quantity"=>"40",
 "created_at"=>"2024-07-17T15:03:24.406Z",
 "updated_at"=>"2024-07-17T15:14:16.852Z",
 "strategy_type"=>"manual",
 "upper_stop_loss_enabled"=>true,
 "lower_stop_loss_enabled"=>true,
 "note"=>"Example bot",
 "editable"=>false,
 "lower_price"=>"56000.0",
 "lower_stop_loss_price"=>"50000.0",
 "lower_stop_loss_action"=>"stop_bot_and_close_position",
 "upper_price"=>"70000.0",
 "upper_stop_loss_price"=>"75000.0",
 "upper_stop_loss_action"=>"stop_bot",
 "quantity_per_grid"=>"150.0",
 "leverage_type"=>"cross",
 "leverage_custom_value"=>"10.0",
 "name"=>"CHANGED USDT_BTCUSDT EXAMPLE",
 "pair"=>"USDT_BTCUSDT",
 "start_price"=>"65030.3",
 "grid_price_step"=>"358.974358974358974358974358974358974359",
 "current_profit"=>"0.0",
 "current_profit_usd"=>"0.0",
 "total_profits_count"=>"0",
 "bought_volume"=>"0.0",
 "sold_volume"=>"0.0",
 "profit_percentage"=>"0.0",
 "current_price"=>"65030.3",
 "max_active_buy_lines"=>"50",
 "max_active_sell_lines"=>"50",
 "order_currency_type"=>"quote",
 "profit_currency_type"=>"quote",
 "trailing_up_enabled"=>"true",
 "grid_type"=>"arithmetic",
 "investment_base_currency"=>"0.0",
 "investment_quote_currency"=>"0.0",
 "unrealized_profit_loss"=>"0.0",
 "current_profit_loss"=>nil,
 "current_profit_loss_percent"=>nil,
 "orderbook_price_currency"=>"USDT",
 "expansion_down_enabled"=>"true",
 "expansion_down_stop_price"=>"54000.0",
 "grid_lines"=>
  [{"id"=>253750913, "price"=>"64974.4", "side"=>nil, "order_placed"=>false},
   {"id"=>253750927, "price"=>"70000.0", "side"=>"sell", "order_placed"=>false},
   {"id"=>253750926, "price"=>"69641.0", "side"=>"sell", "order_placed"=>false},
   {"id"=>253750925, "price"=>"69282.1", "side"=>"sell", "order_placed"=>false},
   {"id"=>253750924, "price"=>"68923.1", "side"=>"sell", "order_placed"=>false},
   {"id"=>253750923, "price"=>"68564.1", "side"=>"sell", "order_placed"=>false},
   {"id"=>253750922, "price"=>"68205.1", "side"=>"sell", "order_placed"=>false},
   {"id"=>253750921, "price"=>"67846.2", "side"=>"sell", "order_placed"=>false},
   {"id"=>253750920, "price"=>"67487.2", "side"=>"sell", "order_placed"=>false},
   {"id"=>253750919, "price"=>"67128.2", "side"=>"sell", "order_placed"=>false},
   {"id"=>253750918, "price"=>"66769.2", "side"=>"sell", "order_placed"=>false},
   {"id"=>253750917, "price"=>"66410.3", "side"=>"sell", "order_placed"=>false},
   {"id"=>253750916, "price"=>"66051.3", "side"=>"sell", "order_placed"=>false},
   {"id"=>253750915, "price"=>"65692.3", "side"=>"sell", "order_placed"=>false},
   {"id"=>253750914, "price"=>"65333.3", "side"=>"sell", "order_placed"=>false},
   {"id"=>253750888, "price"=>"56000.0", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750889, "price"=>"56359.0", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750890, "price"=>"56717.9", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750891, "price"=>"57076.9", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750892, "price"=>"57435.9", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750893, "price"=>"57794.9", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750894, "price"=>"58153.8", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750895, "price"=>"58512.8", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750896, "price"=>"58871.8", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750897, "price"=>"59230.8", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750898, "price"=>"59589.7", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750899, "price"=>"59948.7", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750900, "price"=>"60307.7", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750901, "price"=>"60666.7", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750902, "price"=>"61025.6", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750903, "price"=>"61384.6", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750904, "price"=>"61743.6", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750905, "price"=>"62102.6", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750906, "price"=>"62461.5", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750907, "price"=>"62820.5", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750908, "price"=>"63179.5", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750909, "price"=>"63538.5", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750910, "price"=>"63897.4", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750911, "price"=>"64256.4", "side"=>"buy", "order_placed"=>false},
   {"id"=>253750912, "price"=>"64615.4", "side"=>"buy", "order_placed"=>false}]}
```