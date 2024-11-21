## Get the list of DCA Bots<br>

**Description:** Returns a list of DCA Bots by user. Use the query parameters to filter the results<br>

**Permission:** BOTS_READ<br>
**Security** SIGNED<br>
<br>

----------

<mark style="color:blue"><strong>GET</strong>

<mark style="color:blue"><strong>/ver1/bots</strong>

----------

<br>
<br>

### Query parameters<br>

<p>
   <strong>limit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Limits the number of records returned.<br>
   Maximum: <code>100</code>, Default: <code>50</code>
</p>
<p>
   <strong>offset</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Skips the first N records in the results
</p>
<p>
   <strong>from</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Returns entities created after a specific time
</p>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Filters entities linked to the specified 3Commas exchange account
</p>
<p>
   <strong>scope</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Filters bots by their status<br>
   Default: <code>null</code>
<details>
   <summary><em>Allowed value</em></summary>
   <dl>
      <li><strong>enable</strong> - returns bots where the state is active;
      <li><strong>disabled</strong> - returns bots where the state is stopped;
      <li><strong>null</strong> - returns all bots
   </dl>
</details>
</p>
<p>
   <strong>strategy</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Filters bots by trading strategy type: <code>long</code> or <code>short</code>; 
</p>
<p>
   <strong>sort_by</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Specifies the field used to order the results: <code>created_at</code>; <code>updated_at</code>; <code>profit</code><br>
   Default: <code>created_at</code>
</p>
<p>
   <strong>order_direction</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Sets the direction of order (<code>[ASC]</code> or <code>[DESC]</code>)<br>
   Default: <code>[DESC]</code>
</p>
<p>
   <strong>quote</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Filters by quote currency
</p>
<br>

{% hint style="info" %}
Use endpoint [User connected exchanges and wallets list](Account/User%20connected%20exchanges%20and%20wallets%20list.md) to get value for parameter <code>account_id</code> in 3Commas.
{% endhint %}
<br>
<br>

### Parameters response<br>

{% hint style="info" %}
If successful, the response includes a copy of [DCA Bot](./README.md) entity.
{% endhint %}

<br>
<br>

### Example Request<br>

```json
GET /ver1/bots/12345678/show?include_events=true
```
<br>
<br>

###  Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```json
[
    {
        "id": 15565014,
        "account_id": 32199203,
        "is_enabled": true,
        "max_safety_orders": 3,
        "active_safety_orders_count": 3,
        "pairs": [
            "USDT_ETH"
        ],
        "strategy_list": [
            {
                "options": {},
                "strategy": "nonstop"
            }
        ],
        "close_strategy_list": [
            {
                "options": {
                    "time": "3m",
                    "points": "70",
                    "time_period": "7",
                    "trigger_condition": "greater"
                },
                "strategy": "rsi"
            }
        ],
        "safety_strategy_list": [],
        "max_active_deals": 1,
        "active_deals_count": 1,
        "deletable?": false,
        "created_at": "2024-10-24T21:53:26.994Z",
        "updated_at": "2024-10-30T06:11:52.685Z",
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
        "url_secret": "bfbaf59b47",
        "take_profit_steps": [],
        "name": "20 oct number 2",
        "take_profit": "0.0",
        "min_profit_percentage": "2.0",
        "base_order_volume": "50.0",
        "safety_order_volume": "15.0",
        "safety_order_step_percentage": "1.0",
        "take_profit_type": "base",
        "min_profit_type": "base_order_volume",
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
        "account_name": "Paper Account 1251857",
        "trailing_deviation": "0.2",
        "finished_deals_profit_usd": "4.12902028",
        "finished_deals_count": "4",
        "leverage_type": "not_specified",
        "leverage_custom_value": null,
        "start_order_type": "limit",
        "active_deals_usd_profit": "-7.006519044",
        "reinvesting_percentage": "100.0",
        "risk_reduction_percentage": "0.0",
        "reinvested_volume_usd": null,
        "min_price_percentage": null,
        "max_price_percentage": null
    },
    ...
]
```
</details>