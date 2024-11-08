## Get profit data for bot on specific date<br>

**Description:** Returns profit data for DCA Bot(s) on a specific date<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>

<br>

----------

<mark style="color:blue;background-color:white"> **GET**

<mark style="color:blue;background-color:white"> **/ver1/bots/stats_by_date**

----------

<br>
<br>

### Query Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**bot_id**  | `integer`| No |  | Unique 3Commas ID DCA Bot entity |
| **account_id** | `integer` | No |   | Filters entities linked to the specified 3Commas exchange account |
|**date** | `string` | Yes |  | Specific day for which profit data is requested for this bot or account |

<br>
<br>

### Parameters response<br>

| Name | Type | Description |
|----- | ------- | ------------ |
|**stats[USDT]** | `string` | [TBD] |
|**usd_profit** | `string` |  USD profit from deals for a specific day |
|**btc_profit** | `string` |  BTC profit from deals for a specific day  |
<br>
<br>

### Example Request<br>

```json
GET /ver1/bots/stats_by_date?date=2024-11-06T04:00:00.000Z&bot_id=15577628
```
<br>
<br>

### Example Response and errors<br>
<details>
<summary>Status: 200 OK</summary><br>

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