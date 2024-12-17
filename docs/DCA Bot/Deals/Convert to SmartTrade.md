**Description:** Allows to convert the deal entity into SmarTrade entity

:::warning
After this action, 3Commas will automatically set the final status to **Cancelled** for this deal.
:::

**Permission:** SMART_TRADE_WRITE
**Security** SIGNED

<blockquote>

<code><mark style={{ color: "green" }}> POST </mark></code>

<code>`/ver1/deals/{deal_id}/convert_to_smart_trade`</code>

</blockquote>

### Path Parameter

   deal_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID Deal entity

### Body Parameter

   stop_bot&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Indicates whether to disable the DCA Bot (<code>true</code>) or not (<code>false</code>)

### Response Parameters

If successful, the response includes a copy of [SmartTrade](./README.md) entity.

### Example Request

```json
POST /ver1/deals/1234567890/convert_to_smart_trade?stop_bot=false
```

### Example Response and errors

<details>
<summary>Status: 201 Created</summary>

```json
{
    "id": 31421185,
    "version": 2,
    "account": {
        "id": 32199203,
        "type": "paper_trading",
        "name": "Paper Account 1251857",
        "market": "Binance Spot account simulator",
        "link": "/accounts/32199203"
    },
    "pair": "USDT_ETH",
    "instant": false,
    "status": {
        "type": "created",
        "basic_type": "created",
        "title": "Pending"
    },
    "leverage": {
        "enabled": false
    },
    "position": {
        "type": "buy",
        "editable": true,
        "units": {
            "value": "0.054",
            "editable": false
        },
        "price": {
            "value": "3375.04",
            "value_without_commission": "3375.04",
            "editable": true
        },
        "total": {
            "value": "182.25216"
        },
        "order_type": "market",
        "status": {
            "type": "idle",
            "basic_type": "idle",
            "title": "Pending"
        }
    },
    "take_profit": {
        "enabled": true,
        "price_type": "value",
        "steps": [
            {
                "id": 1116304581,
                "order_type": "limit",
                "editable": true,
                "units": {
                    "value": null
                },
                "price": {
                    "type": "bid",
                    "value": "3412.21",
                    "percent": null
                },
                "volume": "100.0",
                "total": null,
                "trailing": {
                    "enabled": false,
                    "percent": null
                },
                "status": {
                    "type": "idle",
                    "basic_type": "idle",
                    "title": "Pending"
                },
                "data": {
                    "cancelable": true,
                    "panic_sell_available": false
                },
                "position": 1
            }
        ]
    },
    "stop_loss": {
        "enabled": true,
        "price_type": "value",
        "breakeven": false,
        "order_type": "market",
        "editable": true,
        "status": {
            "type": "idle",
            "basic_type": "idle",
            "title": "Pending"
        },
        "units": {
            "value": null
        },
        "total": {
            "value": null
        },
        "price": {
            "value": null,
            "percent": null
        },
        "conditional": {
            "price": {
                "value": "2680.7534754",
                "type": "bid",
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
        }
    },
    "reduce_funds": {
        "steps": []
    },
    "market_close": {},
    "note": "Created from deal 2297232147",
    "note_raw": "Created from deal 2297232147",
    "skip_enter_step": true,
    "data": {
        "editable": false,
        "current_price": {
            "day_change_percent": "-1.248",
            "bid": "3282.46",
            "ask": "3282.47",
            "last": "3282.46",
            "quote_volume": "3523687887.023767"
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
        "panic_sell_available": false,
        "add_funds_available": false,
        "reduce_funds_available": false,
        "force_start_available": false,
        "force_process_available": true,
        "cancel_available": false,
        "finished": false,
        "base_position_step_finished": false,
        "entered_amount": "0.0",
        "entered_total": "0.0",
        "closed_amount": "0.0",
        "closed_total": "0.0",
        "commission": 0.001,
        "created_at": "2024-11-12T21:47:55.207Z",
        "updated_at": "2024-11-12T21:47:55.284Z",
        "type": "smart_sell"
    },
    "profit": {
        "volume": null,
        "usd": null,
        "percent": "0.0",
        "roe": null
    },
    "margin": {
        "amount": null,
        "total": null
    },
    "is_position_not_filled": true
}
```

</details>
