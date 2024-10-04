## Create Grid bot

**Description:** Creates a new Grid Bot


> <mark style="color:green;background-color:white"> **POST**
>
> <mark style="color:green;background-color:white"> **/ver1/grid_bots/manual**


**Parameters request**


| Name | Type |	Mandatory |	Values(default)	| Description|
|------|------|-----------|-----------------|------------|
|**`name`**  | <mark style="color:grey;background-color:white">integer	| No | `[1 ... 40]` characters	| Name of Grid Bot. Stores a name that is user-defined for the Grid Bot. If the user doesn't specify the name, the system will generate one automatically |
|**`account_id`**  | <mark style="color:grey;background-color:white">integer	| Yes |	- | The account ID of the exchange where the user wants to create the Grid Bot |
|**`pair`**  | <mark style="color:grey;background-color:white">string	| Yes | -	| Trading pair in 3Commas format. Use the endpoint **All market pairs** to get pair|
|**`upper_price`**  | <mark style="color:grey;background-color:white">number	| Yes |	| The  maximum price in the trading range, above which the bot will not place sell orders |
|**`lower_price`**  | <mark style="color:grey;background-color:white">number	| Yes |	| The minimum price in the trading range, below which the bot will not place buy orders |
|**`grid_quantuty`** | <mark style="color:grey;background-color:white">number	| Yes |	| The number of price levels between the upper and lower boundaries of the price range. Limits grid is dependent on the exchange. It should be based on **the rules of the exchange regarding currency rates, limits, and leverage data**. |
|**`grid_type`**  | <mark style="color:grey;background-color:white">string	| No | `geometric`, `arithmetic`	| Type of grid  |
|**`quantity_per_grid`**  | <mark style="color:grey;background-color:white">number	| Yes |	| Amount one order |
|**`order_currency_type`**  | <mark style="color:grey;background-color:white">string	| No | `base`, `quete`	|  Order currency type |
|**`profit_currency_type`**  | <mark style="color:grey;background-color:white">string	| No | `base`, `quete`	| Profit currency type |
|`upper_stop_loss_enabled`**  | <mark style="color:grey;background-color:white">boolean	| No |	`true`, `false` | Sets Stop Loss settings for upper price. Use `true` to activate the parameter group. |
|**`upper_stop_loss_action`**  | <mark style="color:grey;background-color:white">string	| No | `stop_bot`, `stop_bot_and_sell`, `stop_bot_and_close_position`	| The parameter defines the action to be done if the asset price reaches or exceeds the set upper stop loss level |
|**`upper_stop_loss_price`**  | <mark style="color:grey;background-color:white">number	| No |	| The parameter defines a price for this action |
|**`lower_stop_loss_enabled`**  | <mark style="color:grey;background-color:white">boolean	| No | `true`, `false`	| Sets Stop Loss settings for lower price. Use `true` to activate the parameter group. |
|**`lower_stop_loss_action`**  | <mark style="color:grey;background-color:white">string	| No |	`stop_bot`, `stop_bot_and_sell`, `stop_bot_and_close_position` | The parameter defines the action to be done if the asset price reaches or exceeds the set lower stop loss level |
|**`lower_stop_loss_price`**  | <mark style="color:grey;background-color:white">number | No |	| The parameter defines a price for this action |
|**`leverage_type`**  | <mark style="color:grey;background-color:white">string	| No | `cross`, `isolated`	| Leverage type for the futures account |
|**`leverage_custom_value`**  | <mark style="color:grey;background-color:white">number | No |	| TBD |
|**`mode`  | <mark style="color:grey;background-color:white">string	| No | `reverasl`, `long`, `short`	| Grid Mode. Available only for a futures account |
|**`max_active_buy_lines`**  | <mark style="color:grey;background-color:white">integer	| No |	| TBD |
|**`max_active_sell_lines`**  | <mark style="color:grey;background-color:white">integer	| No |	| TBD  |
|**`trailing_up_enabled`**  | <mark style="color:grey;background-color:white">boolean	| No | `true`, `false`	| Trailing up enabled |
|**`trailing_down_enabled`**  | <mark style="color:grey;background-color:white">boolean	| No | `true`, `false`	| Trailing down enabled |
|**`expansion_down_enabled`**  | <mark style="color:grey;background-color:white">boolean	| No | `true`, `false`	| Expansion down enabled |
|**`expansion_down_stop_price`**  | <mark style="color:grey;background-color:white">number	| Yes |	| Expansion down stop price (mandatory if Expansion down enabled) |
|**`expansion_up_enabled`**  | <mark style="color:grey;background-color:white">boolean	| No | `true`, `false`	| Expansion up enabled |
|**`expansion_up_stop_price`**  | <mark style="color:grey;background-color:white">integer	| Yes |	| Expansion up stop price (mandatory if Expansion up enabled) |
|**`ignore_warnings`**  | <mark style="color:grey;background-color:white">boolean	| No | `true`, `false`	| Ignore some warnings and create grid bot |
|**`note`**  | <mark style="color:grey;background-color:white">string	| No |	`[1 ... 300]` characters | Short note for this Grid Bot. Shows in the 3Commas web app.|

**Parameters response**
| Name | Type |	Description|
|------|------|------------|
|**`id`**| | |
|**`account_id`**| | |
|**`account_name`**| | |
|**`is_enabled`**| | |
|**`grids_quantity`**| | |
|**`created_at`**| | |
|**`updated_at`**| | |
|**`strategy_type`**| | |
|**`upper_stop_loss_enabled`**| | |
|**`lower_stop_loss_enabled`**| | |
   "note": "Example bot",
|**`editable`**| | |
|**`lower_price`**| | |
|**`lower_stop_loss_price`**| | |
|**`lower_stop_loss_action`**| | |
|**`upper_price`**| | |
|**`upper_stop_loss_price`**| | |
|**`upper_stop_loss_action`**| | |
|**`quantity_per_grid`**| | |
|**`leverage_type`**| | |
|**`leverage_custom_value`**| | |
|**`name`**| | |
|**`pair`**| | |
|**`start_price`**| | |
|**`grid_price_step`**| | |
|**`current_profit`**| | |
|**`current_profit_usd`**| | |
|**`total_profits_count`**| | |
|**`bought_volume`**| | |
|**`sold_volume`**| | |
|**`profit_percentage`**| | |
|**`current_price`**| | |
|**`max_active_buy_lines`**| | |
|**`max_active_sell_lines`**| | |
|**`order_currency_type`**| | |
|**`trailing_up_enabled`**| | |
|**`grid_type`**| | |
|**`investment_base_currency`**| | |
|**`investment_quote_currency`**| | |
|**`unrealized_profit_loss`**| | |
|**`current_profit_loss`**| | |
|**`current_profit_loss_percent`**| | |
|**`orderbook_price_currency`**| | |
|**`expansion_down_enabled`**| | |
|**`expansion_down_stop_price`**| | |
|**`grid_lines[][id] `**| | |
|**`grid_lines[][price]`**| | |
|**`grid_lines[][side]`**| | |
|**`grid_lines[][order_placed]`**| | |




---
**Example Request**
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

**Example Response**

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
