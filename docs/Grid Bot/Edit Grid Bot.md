## Edit Grid Bot<br>

**Description:** Updates an existing Grid Bot using its ID<br> 

**Permission:** BOTS_WRITE<br>
**Security:** SIGNED<br>
<br>
<br>

-------- 

<mark style="color:purple;background-color:white"> **PATCH**

<mark style="color:purple;background-color:white"> **/ver1/grid_bots/{id}/manual**

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
|**name** | `string` | No | `[1 ... 40]` characters | Grid bot name specified by the user |
|**upper_price** | `number` | Yes |  | The maximum price of the trading range, above which the bot will not place sell orders |
|**lower_price** | `number` | Yes |  | The minimum price of the trading range, below which the bot will not place buy orders |
|**grid_quantity** | `integer` | Yes |  | The number of grid levels between the upper and lower price boundaries. This value is limited based on the exchange’s rules for rates, limits, and leverage |
|**grid_type** | `string` | No | `geometric`<br>`arithmetic` | Type of Grid Bot configuration |
|**quantity_per_grid** | `number` | Yes |  | Quantity of the asset allocated per 
Grid Bot level order |
|**upper_stop_loss_enabled** | `boolean` | No | `true`<br> `false` | Indicates if upper stop-loss settings are enabled. Use `true` to activate the settings group |
|**upper_stop_loss_action** | `string` | No | `stop_bot`<br> `stop_bot_and_sell`<br> `stop_bot_and_close_position` | The action to perform if the asset price reaches or exceeds the set upper stop-loss level |
|**upper_stop_loss_price** | `number` | No |  | The price level that triggers the upper stop-loss action |
|**lower_stop_loss_enabled** | `boolean` | No | `true`<br>`false` | Indicates if lower stop-loss settings are enabled. Use `true` to activate the settings group |
|**lower_stop_loss_action** | `string` | No | `stop_bot`<br> `stop_bot_and_sell`<br> `stop_bot_and_close_position` | The action to perform if the asset price reaches or falls below the set lower stop-loss level |
|**lower_stop_loss_price** | `number` | No |  | The price level that triggers the lower stop-loss action |
|**leverage_type** | `string` | No | `cross`<br>`isolated` | Type of leverage used for the futures account |
|**leverage_custom_value** | `number` | No |  | Custom leverage value set for the Grid Bot |
|**max_active_buy_lines** | `integer` | No |  | Maximum number of active buy orders that can be placed simultaneously |
|**max_active_sell_lines** | `integer` | No |  | Maximum number of active sell orders that can be placed simultaneously |
|**trailing_up_enabled** | `boolean` | No | `true`<br>`false` | Indicates if the trailing-up feature is enabled |
|**trailing_down_enabled** | `boolean` | No | `true`<br>`false` | Indicates if the trailing-down feature is enabled |
|**expansion_down_enabled** | `boolean` | No | `true`<br>`false` | Indicates if the grid expansion downwards is enabled |
|**expansion_down_stop_price** | `number` | Yes (if `expansion_down_enabled` is `true`) |  | The price at which the downward grid expansion should stop |
|**expansion_up_enabled** | `boolean` | No | `true`<br>`false` | Indicates if the grid expansion upwards is enabled. |
|**expansion_up_stop_price** | `number` | Yes (if `expansion_up_enabled` is `true`) |  | The price at which the upward grid expansion should stop |
|**ignore_warnings** | `boolean` | No | `true`<br>`false` | Ignores warnings and forces the creation of the Grid Bot |
|**note** | `string` | No | `[1 ... 300]` characters | Optional user-defined note for the Grid Bot |

<br>
<br>

### Parameters response<br>

{% hint style="info" %}
If successful, the response includes a copy of the updated [Grid Bot](./README.md) entity.
{% endhint %}

<br>
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