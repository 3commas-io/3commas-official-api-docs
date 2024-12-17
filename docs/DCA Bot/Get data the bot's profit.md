**Description:** Returns daily profit data for a specified DCA Bot, grouped by date and identified by its unique ID

**Permission:** BOTS_READ
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "blue"}}> GET </mark></code>

<code>/ver1/bots/stats</code>

</blockquote>

### Path Parameter

   bot_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID for this DCA Bot entity

### Query Parameter

   days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Specifies the number of days for which profit data is requested for this bot
   Default: <code>30</code>

### Parameters response

   s_date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The specific date for which profit data is recorded for the this DCA Bot

   unix_timestamp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
The date represented as a Unix Timestamp for which profit data is recorded

   profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Contain profit or loss data for the specified day, broken down by currency

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;btc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC profit or loss from deals per day

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;usd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USD profit or loss from deals per day

### Example Request

```json
GET /ver1/bots/15565014/profit_by_day
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

```json
{
    "data": [
        {
            "s_date": "2024-10-28",
            "unix_timestamp": 1730073600,
            "profit": {
                "btc": "0.00002960",
                "usd": "2.05"
            }
        },
        {
            "s_date": "2024-10-29",
            "unix_timestamp": 1730160000,
            "profit": {
                "btc": "0.00001436",
                "usd": "1.02"
            }
        },
        {
            "s_date": "2024-10-30",
            "unix_timestamp": 1730246400,
            "profit": {
                "btc": "0.00001456",
                "usd": "1.06"
            }
        },
        {
            "s_date": "2024-11-06",
            "unix_timestamp": 1730851200,
            "profit": {
                "btc": "0.00002720",
                "usd": "2.05"
            }
        },
        {
            "s_date": "2024-11-07",
            "unix_timestamp": 1730937600,
            "profit": {
                "btc": "0.00002823",
                "usd": "2.13"
            }
        }
    ]
}
```

</details>
