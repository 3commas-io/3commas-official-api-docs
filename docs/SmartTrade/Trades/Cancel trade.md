## Cancel trade

**Description:** Cancels a specific trade within a SmartTrade using its ID.

{% hint style="warning" %}
Keep in mind, to avoid canceling the SmartTrade, make sure to leave at least one step in the Take Profit trade and avoid deleting the Stop Loss trade.
{% endhint %}

Permission: SMART_TRADES_WRITE
Security: SIGNED

**DELETE**

**/v2/smart_trades/{smart_trade_id}/trades/{id}**

{% hint style="info" %}
If successful, the response includes a copy of the updated SmartTrade entity.
{% endhint %}

**Path Parameters**
| Name | Type |	Mandatory |	Values(default)	| Description|
|------|------|-----------|-----------------|------------|
|`smart-trade_id` | integer	| Yes | - | Unique 3Commas ID for this SmartTrade entity. |
|`id` | integer	| Yes | - | Unique 3Commas ID for Trade entity |

**Response Parameters**

| Name | Type |	Description|
|------|------|-----------|
| | integer	| Unique 3Commas ID for Trade entity |


**Example Request**

```json

```

**Example Response and errors**

<details>
<summary>Status: 200 OK</summary>

```json
{
    "id": 30428625,
    "version": 2,
    "account": {
        "id": 32402783,
        "type": "binance_us",
        "name": "My Binance US",
        "market": "Binance US Spot",
        "link": "/accounts/32402783"
    },
    "pair": "USDT_DOGE",
    "instant": false,
    "status": {
        "type": "waiting_targets",
        "basic_type": "waiting_targets",
        "title": "Waiting Targets"
    },
    "leverage": {
        "enabled": false
    },
    "position": {
        "type": "buy",
        "editable": true,
        "units": {
            "value": "20.0",
            "editable": false
        },
        "price": {
            "value": "0.10268",
            "value_without_commission": null,
            "editable": true
        },
        "total": {
            "value": "2.0536"
        },
        "order_type": "market",
        "status": {
            "type": "smart_sell",
            "basic_type": "smart_sell",
            "title": "Own funds"
        }
    },
    "take_profit": {
        "enabled": true,
        "price_type": "value",
        "steps": [
            {
                "id": 1008300673,
                "order_type": "limit",
                "editable": true,
                "units": {
                    "value": "7.0"
                },
                "price": {
                    "type": "last",
                    "value": "0.3",
                    "percent": null
                },
                "volume": "35.0",
                "total": "2.1",
                "trailing": {
                    "enabled": false,
                    "percent": null
                },
                "status": {
                    "type": "order_placed",
                    "basic_type": "order_placed",
                    "title": "Placed"
                },
                "data": {
                    "cancelable": true,
                    "panic_sell_available": true
                },
                "position": 1
            },
            {
                "id": 1008300674,
                "order_type": "limit",
                "editable": true,
                "units": {
                    "value": "7.0"
                },
                "price": {
                    "type": "last",
                    "value": "0.4",
                    "percent": null
                },
                "volume": "35.0",
                "total": "2.8",
                "trailing": {
                    "enabled": false,
                    "percent": null
                },
                "status": {
                    "type": "order_placed",
                    "basic_type": "order_placed",
                    "title": "Placed"
                },
                "data": {
                    "cancelable": true,
                    "panic_sell_available": true
                },
                "position": 2
            }
        ]
    },
    "stop_loss": {
        "enabled": true,
        "price_type": "value",
        "breakeven": false,
        "order_type": "market",
        "editable": true,
        "price": {
            "value": null,
            "percent": null
        },
        "conditional": {
            "price": {
                "value": "0.09754",
                "type": "last",
                "percent": null
            },
            "trailing": {
                "enabled": false,
                "percent": null
            }
        },
        "timeout": {
            "enabled": false,
            "value": null
        },
        "status": {
            "type": "to_process",
            "basic_type": "to_process",
            "title": "Pending"
        }
    },
    "reduce_funds": {
        "steps": []
    },
    "market_close": {},
    "note": "",
    "note_raw": null,
    "skip_enter_step": true,
    "data": {
        "editable": true,
        "current_price": {
            "day_change_percent": "-2.728",
            "bid": "0.10257",
            "ask": "0.1027",
            "last": "0.10268",
            "quote_volume": "136509.39725"
        },
        "target_price_type": "price",
        "orderbook_price_currency": "USDT",
        "base_order_finished": true,
        "missing_funds_to_close": "0.0",
        "liquidation_price": null,
        "average_enter_price": null,
        "average_close_price": null,
        "average_enter_price_without_commission": null,
        "average_close_price_without_commission": null,
        "panic_sell_available": true,
        "add_funds_available": true,
        "reduce_funds_available": true,
        "force_start_available": false,
        "force_process_available": true,
        "cancel_available": true,
        "finished": false,
        "base_position_step_finished": true,
        "entered_amount": "20.0",
        "entered_total": "2.0536",
        "closed_amount": "0.0",
        "closed_total": "0.0",
        "commission": 0.001,
        "created_at": "2024-08-14T19:51:43.100Z",
        "updated_at": "2024-08-14T19:51:43.892Z",
        "type": "smart_sell"
    },
    "profit": {
        "volume": "-0.0042514",
        "usd": "-0.0042514",
        "percent": "-0.21",
        "roe": null
    },
    "margin": {
        "amount": null,
        "total": null
    },
    "is_position_not_filled": false
}
```
</details>

<details>
<summary>Status: </summary>
```json
```
</details>