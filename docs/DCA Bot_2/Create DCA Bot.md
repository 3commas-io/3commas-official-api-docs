## Create DCA Bot<br>

**Description:** Creates a new DCA Bot<br>

**Permission:** BOTS_WRITE<br>
**Security** SIGNED<br>
<br>

----------

<mark style="color:green"><strong>POST<br>

<mark style="color:green">/ver1/bots/create_bot</strong>

----------

<br>
<br>

### Body parameters<br>

| Name | Type | Mandatory | Values | Description |
|------|------|-----------|-----------------|-------------|
|**name** | `string` | Yes | `[1 ... 200]` characters | User-defined name of the DCA Bot. If not specified, the system will generate a default name automatically |
|**account_id** | `integer` | Yes | - | ID of the exchange account entity where you want to creat DCA Bot |
|**pairs** | `string` | Yes | - | Trading pair(s) in 3Commas format.<br> If a single pair is passed, a SingleBot is created. If two or more pairs are passed, a MultiBot is created |
|**max_active_deals** | `integer` | No | Minimum:`1`<br>Maximum:`199` | The maximum number of active deals available for this DCA Bot. Default: `1` |
|**strategy** | `string` | No | `short`<br>`long` | The type of trading strategy used by this DCA Bot |
|**profit_currency** | `string` | No | `quite_currency`<br>`base_currency` | Currency used for the profit from the trades executed by this bot |
|**base_order_volume_type** | `number` | Yes |`quote_currency`<br>`base_currency`<br>`percent` | The volume type of the base order for this DCA Bot |
|**base_order_volume** | `number` | Yes | - | The volume of the base order for this DCA Bot |
|**start_order_type** | `string` | No | `limit`<br>`market` | The start order type for this DCA Bot |
|**strategy_list** | `array[json]` | Yes |  | Array of strategies specifically for opening deals in this DCA Bot |
|**leverage_type** | `string` | No | `cross`, `isolated` | Sets leverage settings for a futures account |
|**leverage_custom_value** | `number` | No |  | Leverage value.<br> Leverage value is dependent on the exchange and the pair|
|**trailing_enabled** | `boolean` | No | `true`<br>`false` | Indicates whether trailing is enabled for Take Profit |
|**trailing_deviation** | `number` | No |  | Percentage value of the trailing price, in percent. This parameter is required when `trailing_enabled` is set to `true` |
|**take_profit_type** | `string` | Yes | `base`<br>`total` | The type of profit, which sets the basis for profit calculation in this DCA Bot |
|**take_profit** | `number` | Yes | - | Percentage value for the bot’s Take Profit.<br>If multiple steps are specified in `take_profit_steps settings`, this parameter should be set to `0` |
|**take_profit_steps** | array[object] | No | - | Take profit steps, each represented as an object with properties:<br>`amount_percentage`;<br>`profit_percentage`.<br>For example:<br><code>{"amount_percentage": 10, "profit_percentage": 10}</code> |
|**close_strategy_list** | `array[json]` | No | - | Array of strategies used for closing deals in this DCA Bot |
|**min_profit_type** | `string` | No | `base_order_volume`<br>`total_bought_volume` | The type of minimum profit, which sets the basis for profit calculation in this DCA Bot  |
|**min_profit_percentage** | `number` | No |  |    The minimum profit percentage when it reaches the deal will be complete by the chosen strategy |
|**reinvesting_percentage** | `string` | Yes | Minimum: `0`<br>Maximum: `100` |  Set up a percentage of realized profit to be reinvested in each new deal |
|**stop_loss_percentage**| `number` | No | - | The percentage of price movement in the opposite direction of the Take Profit target that triggers the Stop Loss |
|**stop_loss_type**| `string` | No |`stop_loss`<br>`stop_loss_and_disable_bot` | The type of action the bot should perform after closing a deal due to the Stop Loss setting |
|**tsl_enabled**| `boolean` | No | `true`<br>`false` | Indicates whether trailing is enabled for Stop Loss |
|**sl_to_breakeven_enabled** | `boolean` | No | `true`<br>`false` | Enables the Move to Breakeven feature for this DCA Bot.To use this feature, you must have at least two Take Profit steps.<br>Default: `false` |
|**sl_to_breakeven_data** | `json` | No | - | Upper limit for Stop Loss to move to breakeven, where <code>0</code> is the base order bought price, <code>1</code> is 1st step of TP, and <code>2</code> is 2st step of TP |
|**stop_loss_timeout_enabled** | `boolean` | No | `false`<br> `true` |  Set timeout settings for Stop Loss order.<br>Default: `false`|
|**stop_loss_timeout_in_seconds** | `integer` | No |  | Value timeout in seconds<br>This parameter is required when `stop_loss_timeout_enabled` is set to `true` |
|**risk_reduction_percentage** | `string` | Yes | - | Percentage of losses  that allows reducing the base order and Safety Orders proportionally to losses |
|**safety_order_step_percentage** | `number` | Yes |  |    Price deviation in percentage to open Safety Trades |
|**safety_order_volume_type** | `string` | No | - | The volume type of the Safety Order for this DCA Bot |
|**safety_order_volume** | `number` | Yes | - | The volume of the Safety Order for this DCA Bot |
|**safety_strategy_list** | `array[json]` | No | | Array of strategies specifically for the execution of your safety orders in this DCA Bot |
|**max_safety_orders** | `integer` | Yes | Minimum: `0`<br>Maximum: `200` | The maximum total number of Safety Orders allowed per deal opened by this DCA Bot|
|**active_safety_orders_count** | `integer` | Yes |  | The number of active Safety Orders the DCA Bot is allowed to place at one time |
|**martingale_volume_coefficient** | `number` | Yes | Minimum:`0,1`<br> Maximum:`10` | Coefficient for increasing safety order volume in Martingale strategy |
|**martingale_step_coefficient** | `number` | Yes | Minimum:`0,1`<br>Maximum:`10` | Coefficient for increasing safety order volume in Martingale strategy |
|**min_volume_btc_24h** | `number` | No |  | The minimum trading volume in BTC over the last 24 hours required to open a deal |
|**min_price** | `number` | No |  | The minimum price to open a new deal for this DCA Bot |
|**max_price** | `number` | No |  | The maximum price to open a new deal for this DCA Bot |
|**deal_start_delay_seconds** | `integer` | No |  | Delay in seconds before a next deal starts |
|**cooldown** | `number` | No | Minimum: `0`; Maximum: `2592000` | The time in seconds that the DCA bot will wait after closing a deal before accepting a signal to start a new deal for the same asset pair |
|**disable_after_deals_count** | `integer` | No |  | The number of opening deals after that DCA bot will disabled |
|**allowed_deals_on_same_pair** | `integer` | No |  |  Allow to set up a specific number of deals on the same pair.<br> It works only for bot where <code>type</code> is <code>Bot::MultiBot</code>|
|**min_price_percentage** | `number` | No | - |  Min price percent. Must be greater then -95 and lower then 1000|
|**max_price_percentage** | `number` | No | - | Max price percent. Must be greater then -95 and lower then 1000 |
|**close_deals_timeout** | `integer` | No | Minimum: `60` | The time in seconds after which the deals will close automatically |

<br>
<br>

### Additional information<br>
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
</p>

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

<br>
<br>

### Response Parameters<br>

If successful, the response includes a update copy of [DCA Bot](./README.md) entity.

<br>
<br>

### Example Request<br>

```json
POST /ver1/bots/create_bot
```

```json
Body:

{
   "account_id": 32833909,
   "name": "name DCA Bot",
   "pairs": "BNFCR_1INCHUSDT",
   "strategy_list": [
      {
         "options": {},
         "strategy": "nonstop"
      }
   ],
   "base_order_volume": "100.0",
   "max_safety_orders": 4,
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
   "close_deals_timeout": "60",
   "active_safety_orders_count": 1,
   "safety_order_volume": "30.0",
   "safety_order_step_percentage": "1.0",
   "take_profit_type": "total",
   "min_profit_type": null,
   "martingale_volume_coefficient": "2",
   "martingale_step_coefficient": "4.0"
}
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
{
    "id": 15564828,
    "account_id": 32833909,
    "is_enabled": false,
    "max_safety_orders": 4,
    "active_safety_orders_count": 1,
    "pairs": [
        "BNFCR_1INCHUSDT"
    ],
    "strategy_list": [
        {
            "strategy": "nonstop",
            "options": {}
        }
    ],
    "close_strategy_list": [],
    "safety_strategy_list": [],
    "max_active_deals": 1,
    "active_deals_count": 0,
    "deletable?": true,
    "created_at": "2024-10-24T19:57:43.635Z",
    "updated_at": "2024-10-24T19:57:43.635Z",
    "trailing_enabled": null,
    "tsl_enabled": false,
    "deal_start_delay_seconds": null,
    "stop_loss_timeout_enabled": false,
    "stop_loss_timeout_in_seconds": 0,
    "disable_after_deals_count": null,
    "deals_counter": null,
    "allowed_deals_on_same_pair": null,
    "easy_form_supported": false,
    "close_deals_timeout": null,
    "url_secret": "7xxxx00exx4",
    "take_profit_steps": [],
    "name": "My test",
    "take_profit": "2.0",
    "min_profit_percentage": null,
    "base_order_volume": "15.0",
    "safety_order_volume": "30.0",
    "safety_order_step_percentage": "1.0",
    "take_profit_type": "total",
    "min_profit_type": null,
    "type": "Bot::SingleBot",
    "martingale_volume_coefficient": "2.0",
    "martingale_step_coefficient": "4.0",
    "stop_loss_percentage": "0.0",
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
    "account_name": "My Binance",
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
        "name": [
            "is missing"
        ]
    }
}
```

</details>

<details>
<summary>Status: 404 Not Found</summary><br>

```json
{
    "error": "not_found",
    "error_description": "Not Found"
}
```
<details>
