**Description:** Returns profit data for the specified DCA Bot(s) over a defined number of days

**Permission:** BOTS_READ
**Security:** SIGNED

<blockquote>
   <span style={{ color: "blue"}}><code>GET</code></span>
   <code>/ver1/bots/stats_by_date</code>
</blockquote>

### Query Parameters

   account_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Filters entities linked to the specified 3Commas exchange account

   bot_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Filters entities linked to the specified ID DCA Bot entity

   date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Specific days for which profit data is requested for this bot or account

### Parameters response

   profits_in_usd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   [TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USDT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cumulative USD profit or loss from all trading activity

   usd_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   USD profit from deals for a specific day

   btc_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   BTC profit from deals for a specific day

### Example Request

```json
GET /ver1/bots/stats_by_date?date=2024-11-06T04:00:00.000Z&bot_id=15577628
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

```json
{
    "stats": {
        "USDT": "7.92064973"
    },
    "usd_profit": "7.92064973",
    "btc_profit": "0.000103814744285414700639614134423823"
}
```

</details>
