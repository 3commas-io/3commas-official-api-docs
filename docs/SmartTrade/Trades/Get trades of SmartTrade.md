## Get trades of SmartTrade<br>

**Description:** Shows trades of existing SmartTrade<br>

**Permission:** SMART_TRADES_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue;background-color:white" > **GET**

<mark style="color:blue;background-color:white" > **/v2/smart_trades/{smart_trade_id}/trades**

----------

<br>
<br>


### Path Parameters<br>
| Name | Type |	Mandatory |	Values| Description|
|------|------|-----------|-----------------|------------|
|**smart-trade_id**| `integer` | Yes |  | Unique 3Commas ID for this SmartTrade entity |

<br>
<br>

### Response Parameters<br>

| Name | Type |	Description|
|------|------|------------|
| **id** | `integer`| Unique 3Commas Trade entity ID |
| **average_price** | `null` or `string` | The weighted average price at which the asset was bought or sold during the execution of the trades|
| **follow_price_type** | `string`  | The type of price to follow for this trade (f.e. `bid`, `ask`, or `last`) |
| **initial_amount** | `string`|The initial amount for this trade  |
| **initial_total** | `string`| The initial total for this trade |
| **initial_price** | `number`| The initial price for this trade |
| **order_price** | `null` or `string` | The limit price for this trade |
| **order_side**  | `string`  | The side of the order to be created by this trade |
| **order_type** | `string` | The type of trade used to open the position (e.g., `market`, `limit`, `conditional`) 
| **pair** | `string` | Trading pair in 3Commas format for this trade |
| **position_percentage** | `null` or `string`|Доля в процентах шага по TP. заполняется поле только в случае  "trade_purpose": "take_profit"|
| **realised_amount** |  `string` or `null` | Indicates the realized amount from the trade |
| **realised_total** | `string` or `null` | Indicates the total realized amount from the trade |
| **realised_percentage** | `number`| Indicates the realized percentage of the total trade amount  |
| **realised_price** | `number` or `null` | Indicates the realized price of the trade |
| **status** | `string` | 3Commas status for this Trade | 
| **take_profit_percentage**  | `string` or `null` | The percentage price level for Take Profit for this Trade |
| **trade_purpose** | `string`| The type of trade.<br><details> <summary>Show allowed values</summary>**position**<br> **take_profit** <br>**stop_loss** <br>**reduce_funds**<br></details><br> |
| **trail_percentage** | `string` or `null` | Indicates the percentage deviation from the price for this trade |
| **trail_value** | `string` or `null` | Indicates the deviation from the price for this trade (сами высчитываем) по этому трейду |
| **trailing_enabled** | `boolean`| Indicates whether the trailing settings for this trade can be edited |
| **trailing_last_price** | `string` or `null` | Indicates the last price used for trailing |
| **trailing_last_price_updated_at** | `number` or `null` |Indicates the timestamp of the last update to the trailing price |
| **trigger_condition** | `number` or `null` | Indicates the condition under which the trigger is activated<br> <details><summary>Show allowed values</summary><br>* greater<br>-less<br>-greater_or_equal <br>-less_or_equal<br>
</details><br> |
| **trigger_price** | `string` or `null` | Indicates the price at which the trigger is activated |
| **trigger_price_percentage** | `string` or `null` | Indicates the percentage for the trigger price |
| **trigger_type** | `string` | Indicates the type of trigger for the trade |
| **created_at**| `string <date-time>`| ISO 8601 datetime string of when this Trade entity was created |
| **updated_at**| `string <date-time>`| ISO 8601 datetime string of when this Trade entity was updated |
| **cancelable** | `boolean`| Indicates whether this trade can be canceled |
| **force_processable** | `boolean`| Indicates whether this Trade can be close by market |

<br>
<br>


### Example Request<br>

```json
GET /v2/smart_trades/30848974/trades
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary><br>

```json
[
    {
        "id": 1006258046,
        "average_price": "0.107068273092369477911646586345381526",
        "follow_price_type": "ask",
        "initial_amount": "15.0",
        "initial_total": "1.5996",
        "order_price": "0.10664",
        "order_side": "buy",
        "order_type": "limit",
        "pair": "USDT_DOGE",
        "position_percentage": null,
        "realised_amount": "14.94",
        "realised_total": "1.5996",
        "status": "finished",
        "take_profit_percentage": null,
        "trade_purpose": "position",
        "trail_percentage": null,
        "trail_value": null,
        "trailing_enabled": false,
        "trailing_last_price": null,
        "trailing_last_price_updated_at": null,
        "trigger_condition": null,
        "trigger_price": null,
        "trigger_price_percentage": null,
        "trigger_type": "none",
        "created_at": "2024-08-12T16:24:38.384Z",
        "updated_at": "2024-08-12T16:56:10.437Z",
        "realised_percentage": "100.0",
        "initial_price": "0.10664",
        "realised_price": "0.10706",
        "cancelable": false,
        "force_processable": false
    },
    { ...
    },
    {
        "id": 1006258056,
        "average_price": null,
        "follow_price_type": "last",
        "initial_amount": "14.0",
        "initial_total": "1.4182",
        "order_price": null,
        "order_side": "sell",
        "order_type": "market",
        "pair": "USDT_DOGE",
        "position_percentage": "100.0",
        "realised_amount": "0.0",
        "realised_total": null,
        "status": "to_process",
        "take_profit_percentage": null,
        "trade_purpose": "stop_loss",
        "trail_percentage": null,
        "trail_value": null,
        "trailing_enabled": false,
        "trailing_last_price": null,
        "trailing_last_price_updated_at": null,
        "trigger_condition": "less_or_equal",
        "trigger_price": "0.1013",
        "trigger_price_percentage": null,
        "trigger_type": "conditional",
        "created_at": "2024-08-12T16:24:38.461Z",
        "updated_at": "2024-08-12T16:56:10.850Z",
        "realised_percentage": "0.0",
        "initial_price": "0.1013",
        "realised_price": null,
        "cancelable": true,
        "force_processable": true
    }
]
```
</details>

<details>
<summary>Status: 404 Not Found</summary><br>

```json
{
    "error": "Not found",
    "error_description": "Smart Trade not found"
}
```
</details>

