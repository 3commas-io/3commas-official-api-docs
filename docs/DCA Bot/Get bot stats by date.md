## Get profit data for bot on specific date<br>

**Description:** Returns profit data for the specified DCA Bot(s) over a defined number of days<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue"> <strong>GET</strong>

<mark style="color:blue"> <strong>/ver1/bots/stats_by_date</strong>

----------

<br>
<br>

### Query Parameters<br>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Filters entities linked to the specified 3Commas exchange account
</p>
<p>
   <strong>bot_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Filters entities linked to the specified ID DCA Bot entity
</p>
<p>
   <strong>date</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Specific days for which profit data is requested for this bot or account
</p>
<br>
<br>

### Parameters response<br>
<p>
   <strong>profits_in_usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   [TBD]
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>USDT</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cumulative USD profit or loss from all trading activity
</p>
<p>
   <strong>usd_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   USD profit from deals for a specific day
</p>
<p>
   <strong>btc_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   BTC profit from deals for a specific day
</p>
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