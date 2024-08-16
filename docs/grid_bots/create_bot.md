## Create Grid bot

**Description:** Creates a new Grid Bot


> **POST**
>
> **/ver1/grid_bots/manual**


**Parameters request**


| Name | Type |	Mandatory |	Values(default)	| Description|
|------|------|-----------|-----------------|------------|
|`name`  | integer	| No | `[1 ... 40]` characters	| Name of Grid Bot. Stores a name that is user-defined for the Grid Bot. If the user doesn't specify the name, the system will generate one automatically |
|`account_id`  | integer	| Yes |	- | The account ID of the exchange where the user wants to create the Grid Bot |
|`pair`  | string	| Yes | -	| Trading pair in 3Commas format. Use the endpoint **All market pairs** to get pair|
|`upper_price`  | number	| Yes |	| The  maximum price in the trading range, above which the bot will not place sell orders |
|`lower_price`  | number	| Yes |	| The minimum price in the trading range, below which the bot will not place buy orders |
|`grid_quantuty` | number	| Yes |	| The number of price levels between the upper and lower boundaries of the price range. Limits grid is dependent on the exchange. It should be based on **the rules of the exchange regarding currency rates, limits, and leverage data**. |
|`grid_type`  | string	| No | `geometric`, `arithmetic`	| Type of grid  |
|`quantity_per_grid`  | number	| Yes |	| Amount one order |
|`order_currency_type`  | string	| No | `base`, `quete`	|  Order currency type |
|`profit_currency_type`  | string	| No | `base`, `quete`	| Profit currency type |
|`upper_stop_loss_enabled`  | boolean	| No |	`true`, `false` | Sets Stop Loss settings for upper price. Use `true` to activate the parameter group. |
|`upper_stop_loss_action`  | string	| No | `stop_bot`, `stop_bot_and_sell`, `stop_bot_and_close_position`	| The parameter defines the action to be done if the asset price reaches or exceeds the set upper stop loss level |
|`upper_stop_loss_price`  | number	| No |	| The parameter defines a price for this action |
|`lower_stop_loss_enabled`  | boolean	| No | `true`, `false`	| Sets Stop Loss settings for lower price. Use `true` to activate the parameter group. |
|`lower_stop_loss_action`  | string	| No |	`stop_bot`, `stop_bot_and_sell`, `stop_bot_and_close_position` | The parameter defines the action to be done if the asset price reaches or exceeds the set lower stop loss level |
|`lower_stop_loss_price`  | number | No |	| The parameter defines a price for this action |
|`leverage_type`  | string	| No | `cross`, `isolated`	| Leverage type for the futures account |
|`leverage_custom_value`  | number | No |	| TBD |
|`mode`  | string	| No | `reverasl`, `long`, `short`	| Grid Mode. Available only for a futures account |
|`max_active_buy_lines`  | integer	| No |	| TBD |
|`max_active_sell_lines`  | integer	| No |	| TBD  |
|`trailing_up_enabled`  | boolean	| No | `true`, `false`	| Trailing up enabled |
|`trailing_down_enabled`  | boolean	| No | `true`, `false`	| Trailing down enabled |
|`expansion_down_enabled`  | boolean	| No | `true`, `false`	| Expansion down enabled |
|`expansion_down_stop_price`  | number	| Yes |	| Expansion down stop price (mandatory if Expansion down enabled) |
|`expansion_up_enabled`  | boolean	| No | `true`, `false`	| Expansion up enabled |
|`expansion_up_stop_price`  | integer	| Yes |	| Expansion up stop price (mandatory if Expansion up enabled) |
|`ignore_warnings`  | boolean	| No | `true`, `false`	| Ignore some warnings and create grid bot |
|`note`  | string	| No |	`[1 ... 300]` characters | Short note for this Grid Bot. Shows in the 3Commas web app.

 |

**Parameters response**
TBD

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
      {
         "id": 253750234,
         "price": "71673.47",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750233,
         "price": "71346.94",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750232,
         "price": "71020.41",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750231,
         "price": "70693.88",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750230,
         "price": "70367.35",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750229,
         "price": "70040.82",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750228,
         "price": "69714.29",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750227,
         "price": "69387.76",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750226,
         "price": "69061.22",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750225,
         "price": "68734.69",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750224,
         "price": "68408.16",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750223,
         "price": "68081.63",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750222,
         "price": "67755.1",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750221,
         "price": "67428.57",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750220,
         "price": "67102.04",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750219,
         "price": "66775.51",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750218,
         "price": "66448.98",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750217,
         "price": "66122.45",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750216,
         "price": "65795.92",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750215,
         "price": "65469.39",
         "side": "sell",
         "order_placed": false
      },
      {
         "id": 253750186,
         "price": "56000.0",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750187,
         "price": "56326.53",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750188,
         "price": "56653.06",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750189,
         "price": "56979.59",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750190,
         "price": "57306.12",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750191,
         "price": "57632.65",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750192,
         "price": "57959.18",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750193,
         "price": "58285.71",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750194,
         "price": "58612.24",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750195,
         "price": "58938.78",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750196,
         "price": "59265.31",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750197,
         "price": "59591.84",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750198,
         "price": "59918.37",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750199,
         "price": "60244.9",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750200,
         "price": "60571.43",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750201,
         "price": "60897.96",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750202,
         "price": "61224.49",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750203,
         "price": "61551.02",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750204,
         "price": "61877.55",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750205,
         "price": "62204.08",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750206,
         "price": "62530.61",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750207,
         "price": "62857.14",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750208,
         "price": "63183.67",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750209,
         "price": "63510.2",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750210,
         "price": "63836.73",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750211,
         "price": "64163.27",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750212,
         "price": "64489.8",
         "side": "buy",
         "order_placed": false
      },
      {
         "id": 253750213,
         "price": "64816.33",
         "side": "buy",
         "order_placed": false
      }
   ]
}
```
