**Description:** Returns profit details of existing Grid Bot using its ID

**Permission:** BOTS_READ
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "blue"}}> GET </mark></code>

<code>`/ver1/grid_bots/{id}/profits`</code>

</blockquote>

### Path Parameter

   id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID for this Grid Bot entity

### Query parameters

   from&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Filters Grid Bots created after a specific date in ISO 8601 format

   to&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Filters the Grid Bots created before a specific date in ISO 8601 format

:::info
If the from and to values are not set, the response will include all records ordered in descending (`DESC`) order by ID parameter
:::

### Parameters response

   grid_line_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Unique 3Commas ID for this Grid line entity

   profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Profit amount from this Grid line event in the base currency

   usd_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Profit amount in USD from this Grid line event

   created_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   ISO 8601 datetime string indicating when the event was recorded

   grid_line&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   [TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unique 3Commas ID for this Grid line entity

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The price value at which the asset was bought or sold when this grid line was executed

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;side&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Order side for this Grid line

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;order_placed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Indicates whether the order for this Grid line has been placed

### Example Request

```json
GET /ver1/grid_bots/2338357/profits?from=2024-09-01T04:00:00.000Z&to=2024-10-11T03:59:59.000Z
```

### Example response and errors

<details>
<summary>Status: 201 Created</summary>

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
