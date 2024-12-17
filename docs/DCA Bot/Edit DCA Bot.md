import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Description:** Edits an existing DCA Bot using its ID

**Permission:** BOTS_WRITE
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "purple" }}> PATCH </mark></code>

<code>`/ver1/bots/{bot_id}/update`</code>

</blockquote>

### Path Parameter

   bot_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID for this DCA Bot entity

### Body Parameters

   name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   DCA Bot name specified by the user

   pairs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Trading pair(s) in 3Commas format

   max_active_deals&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   The maximum number of active deals available for this DCA Bot
   Minimum:<code>1</code>, Maximum:<code>199</code>
   Default: <code>1</code>

   base_order_volume_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   The volume type of the base order for this DCA Bot: <code>quote_currency</code>, <code>base_currency</code> or <code>percent</code>

   base_order_volume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   The volume of the base order for this DCA Bot

   take_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Percentage value for the bot’s Take Profit.If multiple steps are specified in <code>take_profit_steps settings</code>, this parameter should be set to <code>0</code>

   take_profit_steps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[object]</code>
   Take Profit Steps, each represented as an object with properties:

- <code>amount_percentage</code>;
- <code>profit_percentage</code>.

   safety_order_volume&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   The volume of the Safety Order for this DCA Bot

   safety_order_volume_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The volume type of the Safety Order for this DCA Bot

   martingale_volume_coefficient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Coefficient for increasing safety order volume in Martingale strategy
   Minimum:<code>0,1</code>; Maximum:<code>10</code>

   martingale_step_coefficient&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Coefficient for increasing safety order price (<code>safety_order_step_percentage</code>) in Martingale strategy.
   Minimum:<code>0,1</code>; Maximum:<code>10</code>

   max_safety_orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   The maximum total number of Safety Orders allowed per deal opened by this DCA Bot
   Minimum:<code>0</code>; Maximum:<code>200</code>

   active_safety_orders_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   The number of active Safety Orders the DCA Bot is allowed to place at one time

   stop_loss_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   The percentage of price movement in the opposite direction of the Take Profit target that triggers the Stop Loss. The value should be set to <code>0</code> to disable Stop Loss

   sl_to_breakeven_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Enables (true) or disable (false) the Move to Breakeven feature for this DCA Bot. To use this feature, you must have at least two Take Profit steps
   Default: <code>false</code>

   sl_to_breakeven_data&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>json</code>
   Upper limit for Stop Loss to move to breakeven, where <code>0</code> is the base order bought price, <code>1</code> is 1st step of TP, and <code>2</code> is 2st step of TP
   Example:
   <code></code>

   cooldown&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   The time (in seconds) that the DCA bot will wait after closing a deal before accepting a signal to start a new deal for the same asset pair
   Minimum: <code>0</code>; Maximum: <code>2592000</code>

   trailing_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
Indicates whether trailing is enabled for Take Profit (<code>true</code>) or not (<code>false</code>)

   trailing_deviation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Percentage value of the trailing price, in percent. This parameter is required when <code>trailing_enabled</code> is set to <code>true</code>

   safety_order_step_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
      Price deviation in percentage to open Safety Trades

   take_profit_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   The type of profit (<code>base </code> or <code>total</code>), which sets the basis for profit calculation in this DCA Bot

   strategy_list&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[json]</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Array of strategies specifically for opening deals in this DCA Bot

   leverage_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Sets leverage settings for a futures account: <code>cross</code> or <code>isolated</code>

   leverage_custom_value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Leverage value. Leverage value is dependent on the exchange and the pair

   stop_loss_timeout_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether the Stop Loss timeout is enabled (<code>true</code>) or disabled (<code>false</code>)
   Default: <code>false</code>

   stop_loss_timeout_in_seconds&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Value timeout in secondsThis parameter is required when <code>stop_loss_timeout_enabled</code> is set to <code>true</code>

   tsl_enabled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether trailing is enabled (<code>true</code>) for Stop Loss or not (<code>false</code>)

   min_volume_btc_24h&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   The minimum trading volume in BTC over the last 24 hours required to open a deal

   deal_start_delay_seconds&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Delay in seconds before a new deal starts

   profit_currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
      Currency used for the profit from the trades executed by this bot: <code>base_currency</code>; <code>quite_currency</code>

   start_order_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The start order type for this DCA Bot: <code>limit</code> or <code>market</code>

   stop_loss_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The type of action the bot should perform after closing a deal due to the Stop Loss setting: <code>stop_loss</code> or <code>stop_loss_and_disable_bot</code>

   disable_after_deals_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   The number of opening deals after that DCA bot will disabled

   allowed_deals_on_same_pair&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Allow to set up a specific number of deals on the same pair.
   It works only for bot where <code>type</code> is <code>Bot::MultiBot</code>

   min_profit_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   The minimum profit percentage when it reaches the deal will be complete by the chosen strategy

   min_profit_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
  The type of minimum profit, which sets the basis for profit calculation in this DCA Bot: <code>base_order_volume</code> or <code>total_bought_volume</code>

   close_strategy_list&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code> array[json]</code>
   Array of strategies used for closing deals in this DCA Bot

   risk_reduction_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Percentage of losses that allows reducing the base order and Safety Orders proportionally to losses

   reinvesting_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Set up a percentage of realized profit to be reinvested in each new deal
   Minimum: <code>0</code>; Maximum: <code>100</code>

   min_price_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Min price percent. Must be greater then <code>-95</code> and lower then <code>1000</code>

   max_price_percentage&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Max price percent. Must be greater then <code>-95</code> and lower then <code>1000</code>

   close_deals_timeout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   The time in seconds after which the deals will close automatically
   Minimum: <code>60</code>

### Additional Information

   pairs

   Use endpoint [All market pairs](/docs/Market%20data/All%20market%20pairs.md) to get value for parameter.

--------

   leverage_custom_value

   Use endpoints [Currency rates and limits with leverage data](/docs/Market%20data/Currency%20rates%20and%20limits%20with%20leverage%20data.md) to check available value for this parameter.

--------

take_profit_steps
When using multiple steps for Take Profit, each step should be represented as an object with the following properties:

<code>amount_percentage</code>
<code>profit_percentage</code>

Keep in mind, you can create a maximum of 4 targets, allocating 100% of your position volume is allocated across them.

For example:

```json
    "take_profit_steps": [
    {
        "amount_percentage": 50,
        "profit_percentage": 10
        },
    {
        "amount_percentage": 50,
        "profit_percentage": 20
    }
]
```

--------

   strategy list, close_strategy_list, safety_strategy_list,

   The data strategies are used to populate the `strategy_list` and `close_strategy_list` parameters. You can retrieve the full list of strategies available for this DCA bot through the [Available strategy list for bot](DCA%20Bot/Available%20strategy%20list%20for%20bot.md) endpoint.

   Below are several examples demonstrating how to fill these parameters with strategy data:

<Tabs>
  <TabItem value="manual_signals" label="Manual signals" default>

```json
[
  {
    "strategy": "manual"
  }
]
```

or

```
[]
```

  </TabItem>

  <TabItem value="non_stop" label="Non-stop">

It's using only for 1 pair bot.

```json
[
  {
    "strategy": "nonstop"
  },
  {
    "options": {}
  }
]
```

  </TabItem>

  <TabItem value="qfl" label="QFL">

```json
[
  {
    "options": {
      "type": "original",
      "percent": 3
    },
    "strategy": "qfl"
  }
]
```

  </TabItem>

  <TabItem value="tradingview" label="TradingView">

```json
[
  {
    "options": {
      "time": "5m",
      "type": "buy_or_strong_buy"
    },
    "strategy": "trading_view"
  }
]
```

  </TabItem>

  <TabItem value="rsi" label="RSI">

```json
[
  {
    "options": {
      "time": "5m",
      "points": 30,
      "trigger_condition": "less",
      "time_period": 7
    },
    "strategy": "rsi"
  }
]
```

  </TabItem>
</Tabs>

### Parameters response

If successful, the response includes a copy of [DCA Bot](./README.md) entity.

### Example Request

```json
PATCH /ver1/bots/12345678/update
```

```json
Body:

{
   "account_id": 32199203,
   "name": "name DCA Bot",
   "pairs": "USDT_ETH",
   "strategy_list": [
      {
         "options": {},
         "strategy": "nonstop"
      }
   ],
   "base_order_volume": "100.0",
   "take_profit_type": "total",
   "take_profit": null,
   "take_profit_steps": [
    {
        "amount_percentage": 50,
        "profit_percentage": 10
        },
    {
        "amount_percentage": 50,
        "profit_percentage": 20
    }
],
   "stop_loss_percentage": "8",
   "close_deals_timeout": "100",
   "max_safety_orders": 3,
   "active_safety_orders_count": 3,
   "safety_order_volume": "20.0",
   "safety_order_step_percentage": "1.0",
   "min_profit_type": null,
   "martingale_volume_coefficient": "2",
   "martingale_step_coefficient": "2"
}
```

### Example response and errors

<details>
<summary>Status: 200 OK</summary>

```json
{
    "id": 15656489,
    "account_id": 32199203,
    "is_enabled": false,
    "max_safety_orders": 3,
    "active_safety_orders_count": 3,
    "pairs": [
        "USDT_ETH"
    ],
    "strategy_list": [
        {
            "options": {},
            "strategy": "nonstop"
        }
    ],
    "close_strategy_list": [],
    "safety_strategy_list": [],
    "max_active_deals": 1,
    "active_deals_count": 0,
    "deletable?": true,
    "created_at": "2024-11-19T21:04:11.299Z",
    "updated_at": "2024-11-21T15:22:24.557Z",
    "trailing_enabled": null,
    "tsl_enabled": false,
    "deal_start_delay_seconds": null,
    "stop_loss_timeout_enabled": false,
    "stop_loss_timeout_in_seconds": 0,
    "disable_after_deals_count": null,
    "deals_counter": null,
    "allowed_deals_on_same_pair": null,
    "easy_form_supported": false,
    "close_deals_timeout": 100,
    "url_secret": "5e334993e6",
    "take_profit_steps": [
        {
            "amount_percentage": 50,
            "profit_percentage": 10,
            "id": 0
        },
        {
            "amount_percentage": 50,
            "profit_percentage": 20,
            "id": 1
        }
    ],
    "name": "name DCA Bot",
    "take_profit": null,
    "min_profit_percentage": null,
    "base_order_volume": "100.0",
    "safety_order_volume": "20.0",
    "safety_order_step_percentage": "1.0",
    "take_profit_type": "total",
    "min_profit_type": null,
    "type": "Bot::SingleBot",
    "martingale_volume_coefficient": "2.0",
    "martingale_step_coefficient": "2.0",
    "stop_loss_percentage": "8.0",
    "cooldown": "0",
    "btc_price_limit": "0.0",
    "strategy": "long",
    "min_volume_btc_24h": "0.0",
    "profit_currency": "quote_currency",
    "min_price": null,
    "max_price": null,
    "stop_loss_type": "stop_loss",
    "safety_order_volume_type": "quote_currency",
    "base_order_volume_type": "quote_currency",
    "account_name": "Paper Account 1251857",
    "trailing_deviation": "0.2",
    "finished_deals_profit_usd": "0.0",
    "finished_deals_count": "0",
    "leverage_type": "not_specified",
    "leverage_custom_value": null,
    "start_order_type": "limit",
    "active_deals_usd_profit": "0.0",
    "reinvesting_percentage": null,
    "risk_reduction_percentage": null,
    "reinvested_volume_usd": null,
    "min_price_percentage": null,
    "max_price_percentage": null
```

</details>

<details>
<summary>Status: 400 Bad Request</summary>

```json
{
    "error": "record_invalid",
    "error_description": "Invalid parameters",
    "error_attributes": {
        "stop_loss_percentage": [
            "Stop Loss should be below the last safety order (7.0)"
        ]
    }
}
```

</details>
