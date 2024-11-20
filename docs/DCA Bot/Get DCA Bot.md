## Get DCA Bot<br>

**Description:** Shows information about a specific DCA Bot using its ID<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue"><strong>GET</strong><br>
<mark style="color:blue"><strong>/ver1/bots/{bot_id}/show</strong>

----------

<br>
<br>

### Path Parameter<br>

<p>
   <strong>bot_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID DCA Bot entity 
</p>
<br>

### Query Parameter<br>

<p>
   <strong>include_events</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
Indicates whether to include information about events related to the entity (<code>true</code>) or not (<code>false</code>)
</p>
<br>

### Response Parameters<br>

If successful, the response includes a copy of [DCA Bot](./README.md) entity.

<br>
<br>

### Example Request<br>

```json
GET /ver1/bots/12345678/show?include_events=true
```
<br>
<br>

### Example Response and Errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```json
{
    "id": 15518453,
    "account_id": 32833909,
    "is_enabled": true,
    "max_safety_orders": 2,
    "active_safety_orders_count": 2,
    "pairs": [
        "BNFCR_BTCUSDT"
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
    "created_at": "2024-10-11T18:34:01.647Z",
    "updated_at": "2024-10-11T18:34:13.344Z",
    "trailing_enabled": false,
    "tsl_enabled": false,
    "deal_start_delay_seconds": null,
    "stop_loss_timeout_enabled": false,
    "stop_loss_timeout_in_seconds": 0,
    "disable_after_deals_count": null,
    "deals_counter": null,
    "allowed_deals_on_same_pair": null,
    "easy_form_supported": false,
    "close_deals_timeout": null,
    "url_secret": "cd7fa04987",
    "take_profit_steps": [],
    "name": "BTCUSDT/BNFCR Classic trading",
    "take_profit": "2.0",
    "min_profit_percentage": "0.0",
    "base_order_volume": "400.0",
    "safety_order_volume": "300.0",
    "safety_order_step_percentage": "1.0",
    "take_profit_type": "base",
    "min_profit_type": null,
    "type": "Bot::SingleBot",
    "martingale_volume_coefficient": "1.7",
    "martingale_step_coefficient": "4.0",
    "stop_loss_percentage": "0.0",
    "cooldown": "300",
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
    "leverage_type": "cross",
    "leverage_custom_value": "1.0",
    "start_order_type": "limit",
    "active_deals_usd_profit": "0.0",
    "reinvesting_percentage": "100.0",
    "risk_reduction_percentage": "0.0",
    "reinvested_volume_usd": null,
    "min_price_percentage": null,
    "max_price_percentage": null,
    "active_deals": []
}
```
</details>