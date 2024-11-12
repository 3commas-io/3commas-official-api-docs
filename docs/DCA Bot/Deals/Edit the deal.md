## Edit the deal of DCA Bot<br>

**Description:** Edits an existing deal of DCA Bot using its ID<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>

<br>

----------

<mark style="color:purple"><strong>PATCH</strong></mark>

<mark style="color:purple"><strong>/ver1/deals/{deal_id}/update_deal</strong></mark>

----------

<br>
<br>

### Path Parameter<br>

| Name | Type |	Mandatory |	Values	| Description |
| ------|------|-----------|-----------------|------------ |
| **deal_id**| `integer`| Yes |  | Unique 3Commas ID Deal entity |

<br>

### Body parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
| ------|------|-----------|-----------------|------------|
| **take_profit** | number | No |   | Percentage value for the bot’s Take Profit.<br>If multiple steps are specified in `take_profit_steps settings`, this parameter should be set to `0` |
| **take_profit_steps** | array[json] | No |   | Contains multiple steps with conditions for Taking Profit in this deal |
| **profit_currency** | string | No | `quite_currency`<br>`base_currency` | Profit currency used for calculating the profit from the trades executed by this DCA Bot |
| **take_profit_type** | string | No |  `base`<br>`total`| Take Profit order type for this DCA Bot.<br><details> <summary>_Allowed value_</summary> <dl><li>base - from base order;<li>total - from total volume;</dl></details>|
| **trailing_enabled** | boolean | No | `true`<br>`false` | Indicates whether trailing is enabled for Take Profit  |
| **trailing_deviation** | number | No |   | Percentage value of the trailing price, in percent. This parameter is required when `trailing_enabled` is set to `true` |
| **sl_to_breakeven_enabled** | boolean | No | `true`<br>`false` | Enables the Move to Breakeven feature for this DCA Bot.To use this feature, you must have at least two Take Profit steps |
| **sl_to_breakeven_data** | json | No |   | The upper limit to which the stop loss will move.<br>To activate, you need at least two separate targets of Take Profit<br> Example: <code>{upper_breakeven_limit: 1}</code> |
| **max_safety_orders** | integer | No |  Minimum: `0`<br>Maximum: `200` | The maximum total number of Safety Orders allowed for this deal |
|**active_safety_orders_count** | integer | No |   | The number of Safety Orders is allowed to place in advance on the exchange's order book  |
| **stop_loss_percentage** | number | No |   | The percentage by which the price needs to move in the opposite direction of your Take Profit target to trigger the Stop Loss, at which point the bot will execute a Market Order.  |
|**stop_loss_timeout_enabled** | boolean | No | `true`<br>`false` | Set timeout settings for Stop Loss order |
|**stop_loss_timeout_in_seconds** | integer | No |   | Value timeout (format: `s`) <br>This parameter is required when `stop_loss_timeout_enabled` is set to `true` |
| **tsl_enabled** | boolean | No | `true`<br>`false`  | Indicates whether trailing is enabled for Stop Loss |
| **stop_loss_type** | string | No | `stop_loss`<br>`stop_loss_and_disable_bot` | The type of action the bot should perform after closing a deal due to the Stop Loss setting |
| **close_timeout** | integer | No | Minimum: `60`  | The time after which the deal will close automatically (format: `sec`) |
| **note** | string | No |   | Optional user-defined note for this Deal  |
| **min_profit_percentage** | number | No |   | The minimum profit percentage which need to reach  for this DCA Bot to complete a deal  |

<br>

{% hint style="info" %}
<strong>Take Profit steps</strong>
<p>
You should allocate 100% of your position volume across different targets. In total, the maximum number of targets is 4.</p>

<p>One target is one step. Each step is represented as an object with properties:<br>
<strong>id</strong>; <strong>amount_percentage</strong>; <strong>profit_percentage</strong>
</p>
<p>
Below is an example demonstrating how to fill this parameter with several steps of Take Profit:</p>

```json
[
   {
      "id": 1,
      "amount_percentage": 10,
      "profit_percentage": 10
   },
   {
      "id": 2,
      "amount_percentage": 20,
      "profit_percentage": 15
   },
   {
      "id": 3,
      "amount_percentage": 30,
      "profit_percentage": 20
   },
   {
      "id": 4,
      "amount_percentage": 40,
      "profit_percentage": 23
   }
]

```
{% endhint %}

<br>
<br>

### Response Parameters<br>

{% hint style="info" %}
If successful, the response includes an updated copy of [Deals](./README.md) entity.
{% endhint %}

<br>
<br>

### Example Request<br>

```json
TBD 
```

<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```json
TBD
```