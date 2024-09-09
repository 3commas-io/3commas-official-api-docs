## Get SmartTrade

**Description:** Shows information about a specific SmartTrade using its ID.

Permission: SMART_TRADES_READ

Security: SIGNED

--------------

 <mark style="color:blue;background-color:white"> **GET**

<mark style="color:blue;background-color:white"> **/v2/smart_trades/{id}**

----------------




**Path Parameters**

| Name | Type |	Mandatory |	Values | Description|
|------|------|-----------|-----------------|------------|
|**`id`**  | <mark style="color:grey;background-color:white">integer	| Yes |  | Unique 3Commas ID for this SmartTrade entity. |

**Parameter response**

`TBD`

--------------------

**Example request**
```json
{{baseUrl}}/v2/smart_trades/12345678
```

**Example Response and errors**


<details>

<summary>Status: 200 OK</summary>

```json
Status 200 Ok
{
    "id": 30404547,
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
        "type": "cancelled",
        "basic_type": "cancelled",
        "title": "Cancelled"
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
            "value": "0.10622",
            "value_without_commission": "0.10559",
            "editable": false
        },
        "total": {
            "value": "1.58385"
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
        "steps": []
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
        "editable": false,
        "current_price": {
            "bid": "0.10701",
            "ask": "0.10717",
            "last": "0.10704",
            "quote_volume": "173476.71714",
            "day_change_percent": "2.45"
        },
        "target_price_type": "price",
        "orderbook_price_currency": "USDT",
        "base_order_finished": true,
        "missing_funds_to_close": "0.0",
        "liquidation_price": null,
        "average_enter_price": "0.10622",
        "average_close_price": null,
        "average_enter_price_without_commission": "0.10559",
        "average_close_price_without_commission": null,
        "panic_sell_available": false,
        "add_funds_available": false,
        "reduce_funds_available": false,
        "force_start_available": false,
        "force_process_available": false,
        "cancel_available": false,
        "finished": false,
        "base_position_step_finished": true,
        "entered_amount": "14.91",
        "entered_total": "1.58385",
        "closed_amount": "0.0",
        "closed_total": "0.0",
        "commission": 0.001,
        "created_at": "2024-08-12T14:35:21.632Z",
        "updated_at": "2024-08-12T14:47:43.782Z",
        "closed_at": "2024-08-12T14:47:43.777Z",
        "type": "smart_trade"
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
    "is_position_not_filled": false
}
```

</details>

<details>

<summary>Status: 400 Not found </summary>

```json
{
    "error": "Not found",
    "error_description": "Smart Trade not found"
}
```
</details>