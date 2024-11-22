## Edit DCA Bot<br>

**Description:** Edits an existing DCA Bot using its ID<br>

**Permission:** BOTS_WRITE<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:purple"><strong>PATCH</strong>

<mark style="color:purple"><strong>/ver1/bots/{bot_id}/update</strong>

----------
<br>
<br>

### Path Parameter<br>
<p>
   <strong>bot_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this DCA Bot entity
</p>
<br>

### Body Parameters<br>
<p>
   <strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   DCA Bot name specified by the user
</p>
<p>
   <strong>pairs</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Trading pair(s) in 3Commas format
</p>
<p>
   <strong>max_active_deals</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   The maximum number of active deals available for this DCA Bot<br>
   Minimum:<code>1</code>, Maximum:<code>199</code>
   Default: <code>1</code>
</p>
<p>
   <strong>base_order_volume_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The volume type of the base order for this DCA Bot: <code>quote_currency</code>, <code>base_currency</code> or <code>percent</code>
</p>
<p>
   <strong>base_order_volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   The volume of the base order for this DCA Bot
</p>
<p>
   <strong>take_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Percentage value for the bot’s Take Profit.<br>If multiple steps are specified in <code>take_profit_steps settings</code>, this parameter should be set to <code>0</code>
</p>
<p>
   <strong>take_profit_steps</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[object]</code><br>
   Take Profit Steps, each represented as an object with properties:
<li><code>amount_percentage</code>;</li>
<li><code>profit_percentage</code>.</li>
</p>
<p>
   <strong>safety_order_volume</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   The volume of the Safety Order for this DCA Bot
</p>
<p><strong>safety_order_volume_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The volume type of the Safety Order for this DCA Bot
</p>
<p>
   <strong>martingale_volume_coefficient</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Coefficient for increasing <em>safety order volume</em> in Martingale strategy<br>
   Minimum:<code>0,1</code>; Maximum:<code>10</code>
</p>
<p>
   <strong>martingale_step_coefficient</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Coefficient for increasing safety order price (<code>safety_order_step_percentage</code>) in Martingale strategy.<br>
   Minimum:<code>0,1</code>; Maximum:<code>10</code>
</p>
<p>
   <strong>max_safety_orders</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   The maximum total number of Safety Orders allowed per deal opened by this DCA Bot<br>
   Minimum:<code>0</code>; Maximum:<code>200</code>
</p>
<p>
   <strong>active_safety_orders_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   The number of active Safety Orders the DCA Bot is allowed to place at one time
</p>
<p>
   <strong>stop_loss_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The percentage of price movement in the opposite direction of the Take Profit target that triggers the Stop Loss. The value should be set to <code>0</code> to disable Stop Loss
</p>
<p>
   <strong>sl_to_breakeven_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Enables (true) or disable (false) the Move to Breakeven feature for this DCA Bot. To use this feature, you must have at least two Take Profit steps<br>
   Default: <code>false</code>
</p>
<p>
   <strong>sl_to_breakeven_data</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>json</code><br>
   Upper limit for Stop Loss to move to breakeven, where <code>0</code> is the base order bought price, <code>1</code> is 1st step of TP, and <code>2</code> is 2st step of TP<br>
   Example: <br>
   <code>{upper_breakeven_limit: 1}</code>
</p>
<p>
   <strong>cooldown</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The time (in seconds) that the DCA bot will wait after closing a deal before accepting a signal to start a new deal for the same asset pair<br> 
   Minimum: <code>0</code>; Maximum: <code>2592000</code>
</p>
<p>
   <strong>trailing_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
Indicates whether trailing is enabled for Take Profit (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>trailing_deviation</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Percentage value of the trailing price, in percent. This parameter is required when <code>trailing_enabled</code> is set to <code>true</code>
</p>
<p>
   <strong>safety_order_step_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
      Price deviation in percentage to open Safety Trades
</p>
<p>
   <strong>take_profit_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   The type of profit (<code>base </code> or <code>total</code>), which sets the basis for profit calculation in this DCA Bot
</p>
<p>
   <strong>strategy_list</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array[json]</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Array of strategies specifically for opening deals in this DCA Bot
</p>
<p>
   <strong>leverage_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Sets leverage settings for a futures account: <code>cross</code> or <code>isolated</code>
</p>
<p>
   <strong>leverage_custom_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Leverage value. Leverage value is dependent on the exchange and the pair
</p>
<p>
   <strong>stop_loss_timeout_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether the Stop Loss timeout is enabled (<code>true</code>) or disabled (<code>false</code>)<br>
   Default: <code>false</code>
</p>
<p>
   <strong>stop_loss_timeout_in_seconds</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Value timeout in seconds<br>This parameter is required when <code>stop_loss_timeout_enabled</code> is set to <code>true</code>
</p>
<p>
   <strong>tsl_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether trailing is enabled (<code>true</code>) for Stop Loss or not (<code>false</code>)
</p>
<p>
   <strong>min_volume_btc_24h</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The minimum trading volume in BTC over the last 24 hours required to open a deal
</p>
<p>
   <strong>deal_start_delay_seconds</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Delay in seconds before a new deal starts
</p>
<p>
   <strong>profit_currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
      Currency used for the profit from the trades executed by this bot: <code>base_currency</code>; <code>quite_currency</code>
</p>
<p>
   <strong>start_order_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The start order type for this DCA Bot: <code>limit</code> or <code>market</code>
</p>
<p>
   <strong>stop_loss_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The type of action the bot should perform after closing a deal due to the Stop Loss setting: <code>stop_loss</code> or <code>stop_loss_and_disable_bot</code>
</p>
<p>
   <strong>disable_after_deals_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   The number of opening deals after that DCA bot will disabled
</p>
<p>
   <strong>allowed_deals_on_same_pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Allow to set up a specific number of deals on the same pair.<br>
   It works only for bot where <code>type</code> is <code>Bot::MultiBot</code>
</p>
<p>
   <strong>min_profit_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The minimum profit percentage when it reaches the deal will be complete by the chosen strategy
</p>
<p>
   <strong>min_profit_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
  The type of minimum profit, which sets the basis for profit calculation in this DCA Bot: <code>base_order_volume</code> or <code>total_bought_volume</code>
</p>
<p>
   <strong>close_strategy_list</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code> array[json]</code><br>
   Array of strategies used for closing deals in this DCA Bot
</p>
<p>
   <strong>risk_reduction_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Percentage of losses that allows reducing the base order and Safety Orders proportionally to losses
</p>
<p>
   <strong>reinvesting_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Set up a percentage of realized profit to be reinvested in each new deal<br>
   Minimum: <code>0</code>; Maximum: <code>100</code>
</p>
<p>
   <strong>min_price_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Min price percent. Must be greater then <code>-95</code> and lower then <code>1000</code>
</p>
<p>
   <strong>max_price_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Max price percent. Must be greater then <code>-95</code> and lower then <code>1000</code>
</p>
<p>
   <strong>close_deals_timeout</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   The time in seconds after which the deals will close automatically<br>
   Minimum: <code>60</code>
</p>
<br>
<br>

### Additional information<br>
<p>
   <strong>pairs</strong>

   Use endpoint [All market pairs](/docs/Market%20data/All%20market%20pairs.md) to get value for parameter.
</p>

--------

<p><strong>leverage_custom_value</strong><br>

   Use endpoints [Currency rates and limits with leverage data](/docs/Market%20data/Currency%20rates%20and%20limits%20with%20leverage%20data.md) to check available value for this parameter.
</p>

--------
<p>
<strong>take_profit_steps</strong><br>
When using multiple steps for Take Profit, each step should be represented as an object with the following properties:

<code>amount_percentage</code>
<code>profit_percentage</code>

Keep in mind, you can create a maximum of 4 targets, allocating 100% of your position volume is allocated across them.

For example:<br>
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

<p>
   <strong>strategy list, close_strategy_list, safety_strategy_list, </strong>
</p>
<p>

   The data strategies are used to populate the `strategy_list` and `close_strategy_list` parameters.<br> You can retrieve the full list of strategies available for this DCA bot through the [Available strategy list for bot](DCA%20Bot/Available%20strategy%20list%20for%20bot.md) endpoint.
</p>
<p>
   Below are several examples demonstrating how to fill these parameters with strategy data:
</p>

{% tabs %}
{% tab title="Manual signals" %}

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

{% endtab %}

{% tab title="Non-stop" %}

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
{% endtab %}

{% tab title="QFL" %}

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

{% endtab %}

{% tab title="TradingView" %} 

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

{% endtab %}

{% tab title="RSI" %} 

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
{% endtab %}
{% endtabs %}
</p>
<br>
<br>

### Parameters response<br>

{% hint style="info" %}
If successful, the response includes a copy of [DCA Bot](./README.md) entity.
{% endhint %}

<br>
<br>

### Example Request<br>

```json
PATCH /ver1/bots/12345678/update
```
<strong></strong>
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

<br>
<br>

### Example response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

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
<summary>Status: 400 Bad Request</summary><br>

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