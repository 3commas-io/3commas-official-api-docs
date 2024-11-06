## Edit DCA Bot<br>

**Description:** Edits an existing DCA Bot using its ID<br>

**Permission:** BOTS_WRITE<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:purple;background-color:white" > **PATCH**

<mark style="color:bpurple;background-color:white" > **/ver1/bots/{bot_id}/update**

----------
<br>
<br>


### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**bot_id**  | `integer` | Yes |  | Unique 3Commas ID for this Grid Bot entity |

<br>

### Body Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
| **name** | `string` | Yes |  | Grid Bot name specified by the user |
| **pairs** | `string` | Yes |  | Trading pair in 3Commas format |
| **max_active_deals** | `integer` | No | Minimum:`1`<br>Maximum:`199` | The maximum number of active deals available for this DCA Bot. Default: `1` |
| **base_order_volime** | `number` | Yes |  |  |
| **base_order_volime_type** | `string` | Yes |  |  |
| **take_profit** | `number` | Yes |  |  |
| **take_profit_steps** | `array` | No |  | if format JSON |
| **safety_order_volume** | `number` | Yes |  | if format JSON |
| **safety_order_volume_type** | `string` | No |  |  |
| **martingale_volume_coefficient** | `number` | Yes |  |  |
| **martingale_step_coefficient** | `number` | Yes |  |  |
| **max_safety_orders** | `integer` | Yes |  |  |
| **active_safety_orders_count** | `integer` | No |  |  |
| **stop_loss_percentage** | `number` | No |  |  |
| **sl_to_breakeven_enabled** | `boolean` | No |  |  |
| **sl_to_breakeven_data** | `json` | No |  |  |
| **cooldown** | `number` | No |  |  |
| **trailing_enabled** | `boolean` | No |  |  |
| **trailing_deviation** | `number` | No |  |  |
| **btc_prive_limit** | `number` | No |  |  |
| **safety_order_step_percentage** | `number` | Yes |  | if format JSON |
| **take_profit_type** | `string` | Yes | `total`<br>`base` |   |
| **stratege_list** | `array` | Yes |  |   |
| **leverage_type** | `string` | No | `custom`<br>`cross`<br>`not_specified`<br>`isolated` |   |
| **leverage_custom_value** | `number` | No |  |   |
| **min_price** | `number` | No |  |   |
| **max_price** | `number` | No |  |   |
| **stop_loss_timeout_enabled** | `boolean` | No |  |   |
| **stop_loss_timeout_in_seconds** | `integer` | No |  |   |
| **min_volume_btc_24h** | `number` | No |  |   |
| **tsl_enabled** | `boolean` | No |  |   |
| **deal_start_delay_seconds** | `integer` | No | `quete_currency`<br>`base_currency` |   |
| **profit_currency** | `string` | No | `quete_currency`<br>`base_currency` |   |
| **start_order_type** | `string` | No | `limit`<br>`market` |   |
| **stop_loss_type** | `string` | No | `stop_loss`<br>`stop_loss_and_disable_bot` |   |
| **disable_after_deals_count** | `integer` | No |  |   |
| **allowed_deals_on_same_pair** | `integer` | No |  |   |
| **close_deals_timeout** | `integer` | No | Minimum: `60`  | The time after which the deals will close automatically (format: sec)  |
| **min_profit_percentage** | `number` | No |  |  |
| **min_profit_type** | `string` | No |  |  |
| **close_strategy_list** | `array` | No |  |  if format JSON |
| **risk_reduction_percentage** | `number` | No |  |  |
| **reinvesting_percentage** | `number` | No |  |  |

### Parameters response<br>

{% hint style="info" %}
If successful, the response includes a copy of [DCA Bot](./README.md) entity.
{% endhint %}

<br>
<br>

### Example Request<br>

```json

```

<br>
<br>

### Example response and errors<br>

<details>
<summary>Status: 400 Bad Request</summary><br>

```json
{
    "error": "record_invalid",
    "error_description": "Invalid parameters",
    "error_attributes": {
        "name": [
            "is missing"
        ],
        "pairs": [
            "is missing"
        ],
        "base_order_volume": [
            "is missing"
        ],
        "take_profit": [
            "is missing"
        ],
        "safety_order_volume": [
            "is missing"
        ],
        "martingale_volume_coefficient": [
            "is missing"
        ],
        "martingale_step_coefficient": [
            "is missing"
        ],
        "max_safety_orders": [
            "is missing"
        ],
        "active_safety_orders_count": [
            "is missing"
        ],
        "safety_order_step_percentage": [
            "is missing"
        ],
        "take_profit_type": [
            "is missing"
        ],
        "strategy_list": [
            "is missing"
        ]
    }
}
```
400
Bad Request