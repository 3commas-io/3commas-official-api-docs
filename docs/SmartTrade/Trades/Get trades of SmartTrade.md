## Get trades of SmartTrade

**Description:** Shows trades of existing SmartTrade.

Permission: SMART_TRADES_READ
Security: SIGNED

**GET**

**/v2/smart_trades/{smart_trade_id}/trades**

**Path Parameters**
| Name | Type |	Mandatory |	Values(default)	| Description|
|------|------|-----------|-----------------|------------|
|`smart-trade_id` | integer	| Yes | - | Unique 3Commas ID for this SmartTrade entity. |

**Response Parameters**

**TBD** 
| Name | Type |	Description|
|------|------|-----------|
|`smart-trade_id` | integer	| Unique 3Commas ID for Trade entity |


**Example Response and errors**

<details>
<summary>Status: 200 OK</summary>

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
<summary>Status: 404 OK</summary>
```json
{
    "error": "Not found",
    "error_description": "Smart Trade not found"
}
```
</details>

