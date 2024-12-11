## Grid Bot Profits<br>
<br>

**Description:** Returns profit data for a specific Grid Line associated with a Grid Bot, identified by its unique ID<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>
<blockquote>

<code><mark style="color:blue"><strong> GET </strong></mark></code>

<code>/ver1/grid_bots/{id}/profits</code>

</blockquote>

<br>

### Path Parameter<br>
<p>
   <strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this Grid Bot entity
</p>
<br>

### Body Parameters<br>

<p>
   <strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Filters the Grid Bots created after a specific date. Use an ISO 8601 datetime string as the value
</p>
<p>
   <strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Filters the Grid Bots created before a specific date. Use an ISO 8601 datetime string as the value
</p>
<br>

{% hint style="info" %}
If the <code>from</code> and <code>to</code> values are not set, the response will include all records ordered in descending (<code>[DESC]</code>) order.
{% endhint %}

<br>
<br>

### Response Parameters<br>
<p>
   <strong>grid_line_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Unique 3Commas ID for this Grid line entity
</p>
<p>
   <strong>profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Profit amount from this Grid line event in the base currency
</p>
<p>
   <strong>usd_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Profit amount in USD from this Grid line event
</p>
<p>
   <strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   ISO 8601 datetime string indicating when the event was recorded
</p>
<p>
   <strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   ISO 8601 datetime string indicating when the event was recorded
</p>
<p>
   <strong>grid_line</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Details about a specific Grid line event
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas ID for this Grid line entity
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price value at which the asset was bought or sold when this grid line was executed
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>side</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Order side for this Grid line
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>order_placed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the order for this Grid line has been placed
</p>
<br>

### Example Request<br>

```
GET /ver1/grid_bots/2338357/profits
```
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```
[
    {
        "grid_line_id": 256470631,
        "profit": "0.5387463715614246",
        "usd_profit": "0.5387463715614246",
        "created_at": "2024-10-06T11:45:47.500Z",
        "grid_line": {
            "id": 256470631,
            "price": "0.022954",
            "side": "buy",
            "order_placed": false
        }
    },
    ...
    {
        "grid_line_id": 256427676,
        "profit": "0.0673937919894358",
        "usd_profit": "0.0673937919894358",
        "created_at": "2024-10-03T20:01:44.874Z",
        "grid_line": {
            "id": 256427676,
            "price": "0.022059",
            "side": "buy",
            "order_placed": true
        }
    }
]

```
</details>

<details>
<summary>Status: 401 Unauthorized</summary><br>

```json
{
    "error": "signature_invalid",
    "error_description": "Provided signature is invalid"
}
```
</details>