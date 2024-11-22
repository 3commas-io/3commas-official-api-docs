## Get stats of DCA Bot<br>

**Description:** Returns profit and locked amount data on deals for all DCA Bots or an existing bot or an existing exchange account using their ID<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue"><strong>GET</strong>

<mark style="color:blue"><strong>/ver1/bots/stats</strong>

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
   Filters entities linked to the specified DCA Bot
</p>
<br>

{% hint style="info" %}
Use endpoint [User connected exchanges and wallets list](Account/User%20connected%20exchanges%20and%20wallets%20list.md) to get value for parameter <code>account_id</code> in 3Commas.
{% endhint %}

<br>
<br>

### Parameters response<br>
<p>
   <strong>overall_stats</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
   Shows cumulative profit or loss by currency for all trading activity
</p>
<p>
   <strong>today_stats</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
   Shows today's profit or loss by currency
</p>
<p>
   <strong>profits_in_usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Contains detailed profit and loss data in USD
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>overall_usd_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cumulative USD profit or loss from all trading activity
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>today_usd_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USD profit or loss accumulated for the current day
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>active_deals_usd_profit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USD profit or loss from active (unclosed) deals
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>funds_locked_in_active_deals</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total funds, in USD, currently allocated to active deals
</p>
<br>
<br>

### Example request<br>

```json
GET /ver1/bots/stats
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>
```json
{
    "overall_stats": {
        "USDT": "-47.47740906"
    },
    "today_stats": {
        "USDT": "10.98885705"
    },
    "profits_in_usd": {
        "overall_usd_profit": -47.48,
        "today_usd_profit": 10.99,
        "active_deals_usd_profit": 1.366505088,
        "funds_locked_in_active_deals": 300.843218676
    }
}
```
</details>
