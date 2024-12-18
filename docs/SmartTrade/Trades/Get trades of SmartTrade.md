## Get trades of SmartTrade<br>
<br>

**Description:** Shows trades of existing SmartTrade<br>

**Permission:** SMART_TRADES_READ<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:blue"><strong> GET </strong></mark></code>

<code>/v2/smart_trades/{smart_trade_id}/trades</code>

</blockquote>

<br>

### Path Parameters<br>
<p>
   <strong>smart-trade_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this SmartTrade entity
</p>
<br>

### Response Parameters<br>
<p>
   <strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Unique 3Commas Trade entity ID
</p>
<p>
   <strong>average_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   The weighted average price at which the asset was bought or sold during the execution of the trades
</p>
<p>
   <strong>follow_price_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The type of price to follow for this trade; <code>bid</code>, <code>ask</code>, or <code>last</code>)
</p>
<p>
   <strong>initial_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The initial amount for this trade
</p>
<p>
   <strong>initial_total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The initial total for this trade
</p>
<p>
   <strong>initial_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The initial price for this trade
</p>
<p>
   <strong>order_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   The limit price for this trade
</p>
<p>
   <strong>order_side</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The side of the order to be created by this trade
</p>
<p>
   <strong>order_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The type of trade used to open the position: <code>market</code>, <code>limit</code>, <code>conditional</code>
</p>
<p>
   <strong>pair</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Trading pair in 3Commas format for this trade
</p>
<p>
   <strong>position_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   The percentage share of the step in the Take Profit process. 
   This field cannot be <code>null</code> when the trade_purpose is set to <code>take_profit</code>
</p>
<p>
   <strong>realised_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   Indicates the realized amount from the trade
</p>
<p>
   <strong>realised_total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
    The total amount realized from the trade
</p>
<p>
   <strong>realised_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   The percentage of the total trade amount that has been realized
</p>
<p>
   <strong>realised_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
    The price at which the trade was realized
</p>
<p>
   <strong>status</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   3Commas status for this Trade
</p>
<p>
   <strong>take_profit_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   The percentage price level for Take Profit for this Trade
</p>
<p>
   <strong>trade_purpose</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The type of trade.<br>
   <details><summary>Show allowed values</summary>
   <li>position</li><br>
   <li>take_profit</li><br>
   <li>stop_loss</li><br>
   <li>reduce_funds</li><br>
   </details>
</p>
<p>
   <strong>trail_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   The percentage deviation used for trailing the price in this trade
</p>
<p>
   <strong>trail_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   Represents the price deviation calculated by the system for this trade
</p>
<p>
   <strong>trailing_enabled</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether the trailing settings for this trade can be edited
</p>
<p>
   <strong>trailing_last_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   Represents the last price used for trailing
</p>
<p>
   <strong>trailing_last_price_updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   Indicates the timestamp of the last update to the trailing price
</p>
<p>
   <strong>trigger_condition</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   Indicates the condition under which the trigger is activated
   <details>
   <summary>Show allowed values</summary>
   <li>greater</li>
   <li>less</li>
   <li>greater_or_equal</li>
   <li>less_or_equal</li>
   </details>
</p>
<p>
   <strong>trigger_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   The price at which the trigger is activated
</p>
<p>
   <strong>trigger_price_percentage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   The percentage associated with the trigger price
</p>
<p>
   <strong>trigger_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   Specifies the type of trigger used for the trade
</p>
<p>
   <strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   ISO 8601 datetime string of when this Trade entity was created
</p>
<p>
   <strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   ISO 8601 datetime string of when this Trade entity was updated
</p>
<p>
   <strong>cancelable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
    Indicates whether this trade can be canceled (<code>true</code>) or (<code>false</code>)
</p>
<p>
   <strong>force_processable</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether this trade can be closed by market (<code>true</code>) or (<code>false</code>)
</p>
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

