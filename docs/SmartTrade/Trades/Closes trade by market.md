## Closes trade by market<br>

**Description:** Closes a specific take profit trade within a SmartTrade by market using its ID<br>


{% hint style="warning" %}
The endpoint is available for a take profit trades with statuses to_process ,  order_placed and  trailing_activated.
{% endhint %}
<br>

**Permission:** SMART_TRADES_WRITE<br>
**Security:** SIGNED<br>

----------

<mark style="color:green;background-color:white" > **POST**

<mark style="color:green;background-color:white" > **/v2/smart_trades/{smart_trade_id}/trades/{id}/close_by_market**

----------

<br>
<br>


**Path Parameters**<br>
| Name | Type |	Mandatory |	Values(default)	| Description|
|------|------|-----------|-----------------|------------|
|**smart-trade_id** | `integer`	| Yes | - | Unique 3Commas ID for this SmartTrade entity. |
|**id** | `integer`| Yes | - | Unique 3Commas ID for Trade entity |

<br>
<br>

**Response Parameters**<br>

{% hint style="info" %}
If successful response, the response includes a copy of the updated SmartTrade entity. You can find a total description of all attributes on the page about [SmartTrade](./README.md). 
{% endhint %}

<br>
<br>

```json
/v2/smart_trades/12345678/trades/1047934729/close_by_market
```

**Example Response and errors**<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
{
    "id": 12345678,
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
        "editable": false,
        "units": {
            "value": "14.91",
            "editable": false
        },
        "price": {
            "value": "0.10768",
            "value_without_commission": "0.10704",
            "editable": false
        },
        "total": {
            "value": "1.6056"
        },
        "order_type": "market",
        "status": {
            "type": "finished",
            "basic_type": "finished",
            "title": "Finished"
        }
    },
    "take_profit": {
        "enabled": true,
        "price_type": "value",
        "steps": [
            {
                "id": 1047934727,
                "order_type": "market",
                "editable": true,
                "units": {
                    "value": "8.0"
                },
                "price": {
                    "type": "last",
                    "value": "0.5",
                    "percent": null
                },
                "volume": "50.0",
                "total": "4.0",
                "trailing": {
                    "enabled": false,
                    "percent": null
                },
                "status": {
                    "type": "to_process",
                    "basic_type": "to_process",
                    "title": "Pending"
                },
                "data": {
                    "cancelable": true,
                    "panic_sell_available": true
                },
                "position": 1
            },
            {
                "id": 1047934728,
                "order_type": "market",
                "editable": true,
                "units": {
                    "value": "3.0"
                },
                "price": {
                    "type": "last",
                    "value": "0.6",
                    "percent": null
                },
                "volume": "25.0",
                "total": "1.8",
                "trailing": {
                    "enabled": false,
                    "percent": null
                },
                "status": {
                    "type": "to_process",
                    "basic_type": "to_process",
                    "title": "Pending"
                },
                "data": {
                    "cancelable": true,
                    "panic_sell_available": true
                },
                "position": 2
            },
            {
                "id": 1047934729,
                "order_type": "market",
                "editable": true,
                "units": {
                    "value": "3.0"
                },
                "price": {
                    "type": "last",
                    "value": "0.55",
                    "percent": null
                },
                "volume": "25.0",
                "total": "1.65",
                "trailing": {
                    "enabled": false,
                    "percent": null
                },
                "status": {
                    "type": "panic_sell_pending",
                    "basic_type": "panic_sell_pending",
                    "title": "Panic closing"
                },
                "data": {
                    "cancelable": true,
                    "panic_sell_available": false
                },
                "position": 3
            }
        ]
    },
    "stop_loss": {
        "enabled": false
    },
    "reduce_funds": {
        "steps": []
    },
    "market_close": {},
    "note": "",
    "note_raw": null,
    "skip_enter_step": false,
    "data": {
        "editable": true,
        "current_price": {
            "bid": "0.10938",
            "ask": "0.10953",
            "last": "0.10937",
            "quote_volume": "86807.20699",
            "day_change_percent": "2.32"
        },
        "target_price_type": "price",
        "orderbook_price_currency": "USDT",
        "base_order_finished": true,
        "missing_funds_to_close": "0.0",
        "liquidation_price": null,
        "average_enter_price": "0.10768",
        "average_close_price": null,
        "average_enter_price_without_commission": "0.10704",
        "average_close_price_without_commission": null,
        "panic_sell_available": true,
        "add_funds_available": true,
        "reduce_funds_available": true,
        "force_start_available": false,
        "force_process_available": true,
        "cancel_available": true,
        "finished": false,
        "base_position_step_finished": true,
        "entered_amount": "14.91",
        "entered_total": "1.6056",
        "closed_amount": "0.0",
        "closed_total": "0.0",
        "commission": 0.001,
        "created_at": "2024-09-23T20:02:40.745Z",
        "updated_at": "2024-09-24T20:06:09.282Z",
        "type": "smart_trade"
    },
    "profit": {
        "volume": "0.0236249442",
        "usd": "0.0236249442",
        "percent": "1.47",
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
<summary>Status: 200 OK</summary><br>

```json

```

</details>




