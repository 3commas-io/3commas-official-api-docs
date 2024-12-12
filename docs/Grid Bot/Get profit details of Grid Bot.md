## Get profit details of Grid Bot<br>
<br>

**Description:** Returns profit details of existing Grid Bot using its ID<br>

<br>

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

### Query parameters<br>
<p>
   <strong>from</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Filters Grid Bots created after a specific date in ISO 8601 format
</p>
<p>
   <strong>to</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Filters the Grid Bots created before a specific date in ISO 8601 format
</p>

<br>
{% hint style="info" %}
If the from and to values are not set, the response will include all records ordered in descending (`DESC`) order by ID parameter
{% endhint %}
<br>

### Parameters response<br>
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
   <strong>grid_line</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   [TBD]
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
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>order_placed</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the order for this Grid line has been placed
</p>
<br>

### Example Request<br>

```json
GET /ver1/grid_bots/2338357/profits?from=2024-09-01T04:00:00.000Z&to=2024-10-11T03:59:59.000Z
```
<br>

### Example response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
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
    {
        "grid_line_id": 256439950,
        "profit": "0.2721254846234494",
        "usd_profit": "0.2721254846234494",
        "created_at": "2024-10-04T16:23:16.731Z",
        "grid_line": {
            "id": 256439950,
            "price": "0.022503",
            "side": "buy",
            "order_placed": false
        }
    },
    ...
]
```
</details>
