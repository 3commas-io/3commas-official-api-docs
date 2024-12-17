**Description:** Returns profit data for a specific Grid Line associated with a Grid Bot, identified by its unique ID

**Permission:** BOTS_READ
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "blue"}}> GET </mark></code>

<code>`/ver1/grid_bots/{id}/profits`</code>

</blockquote>

### Path Parameter

   id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID for this Grid Bot entity

### Body Parameters

   id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Filters the Grid Bots created after a specific date. Use an ISO 8601 datetime string as the value

   id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Filters the Grid Bots created before a specific date. Use an ISO 8601 datetime string as the value

:::info
If the <code>from</code> and <code>to</code> values are not set, the response will include all records ordered in descending (<code>[DESC]</code>) order.
:::

### Response Parameters

   grid_line_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Unique 3Commas ID for this Grid line entity

   profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Profit amount from this Grid line event in the base currency

   usd_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Profit amount in USD from this Grid line event

   created_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   ISO 8601 datetime string indicating when the event was recorded

   created_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   ISO 8601 datetime string indicating when the event was recorded

   grid_line&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Details about a specific Grid line event

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas ID for this Grid line entity

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price value at which the asset was bought or sold when this grid line was executed

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;side&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Order side for this Grid line

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;order_placed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the order for this Grid line has been placed

### Example Request

```
GET /ver1/grid_bots/2338357/profits
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

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
<summary>Status: 401 Unauthorized</summary>

```json
{
    "error": "signature_invalid",
    "error_description": "Provided signature is invalid"
}
```

</details>
