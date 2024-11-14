## Get data on bot's profits grouped by day<br>

**Description:** Returns daily profit data for a specified DCA Bot, grouped by date and identified by its unique ID<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue"> <strong>GET</strong><br>
<mark style="color:blue"> <strong>/ver1/bots/stats</strong>

----------
<br>
<br>

### Path Parameter<br>

| Name | Type | Mandatory | Values | Description|
|----- | ------------ | ------------ | ------------ | ------------|
|**bot_id** | `integer` | Yes |  | Unique 3Commas ID DCA Bot entity |

<br>

### Query Parameter<br>

| Name | Type | Mandatory | Values | Description|
|----- | ------------ | ------------ | ------------ | ------------|
|**days** | `integer` | No |   | Specifies the number of days for which profit data is requested for this bot.<br>Default: <code>30</code> |

<br>
<br>

### Parameters response<br>

| Name | Type | Description |
|----- | ------- | ------------ |
|**s_date** | `string` | The specific date for which profit data is recorded for the this DCA Bot |
|**unix_timestamp** | `array` | [TBD] |
|**profit[btc]** | `integer` | BTC profit or loss from deals per day |
|**profits[usd]** | `string` | USD profit or loss from deals per day |

<br>
<br>

### Example Request<br>

```json
GET /ver1/bots/15565014/profit_by_day
```

<br>
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