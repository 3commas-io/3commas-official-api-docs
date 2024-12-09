## Get data on bot's profits grouped by day<br>
<br>

**Description:** Returns daily profit data for a specified DCA Bot, grouped by date and identified by its unique ID<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:blue"><strong> GET </strong></mark></code>

<code>/ver1/bots/stats</code>

</blockquote>

<br>

### Path Parameter<br>
<p>
   <strong>bot_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this DCA Bot entity
</p>
<br>

### Query Parameter<br>

<p>
   <strong>days</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Specifies the number of days for which profit data is requested for this bot<br>
   Default: <code>30</code>
</p>
<br>


### Parameters response<br>
<p>
   <strong>s_date</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The specific date for which profit data is recorded for the this DCA Bot
</p>
<p>
   <strong>unix_timestamp</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
The date represented as a Unix Timestamp for which profit data is recorded
</p>
<p>
   <strong>profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   Contain profit or loss data for the specified day, broken down by currency
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>btc</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BTC profit or loss from deals per day
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USD profit or loss from deals per day
</p>
<br>

### Example Request<br>

```json
GET /ver1/bots/15565014/profit_by_day
```

<br>

###  Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

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