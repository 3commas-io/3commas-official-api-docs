**Description:** Returns profit and locked amount data on deals for all DCA Bots or an existing bot or an existing exchange account using their ID

**Permission:** BOTS_READ
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "blue"}}> GET </mark></code>

<code>/ver1/bots/stats</code>

</blockquote>

### Query Parameters

   account_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Filters entities linked to the specified 3Commas exchange account

   bot_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Filters entities linked to the specified DCA Bot

:::info
Use endpoint [User connected exchanges and wallets list](Account/User%20connected%20exchanges%20and%20wallets%20list.md) to get value for parameter <code>account_id</code> in 3Commas.
:::

### Parameters response

   overall_stats&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code>
   Shows cumulative profit or loss by currency for all trading activity

   today_stats&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code>
   Shows today's profit or loss by currency

   profits_in_usd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Contains detailed profit and loss data in USD

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;overall_usd_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cumulative USD profit or loss from all trading activity

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;today_usd_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USD profit or loss accumulated for the current day

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active_deals_usd_profit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USD profit or loss from active (unclosed) deals

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;funds_locked_in_active_deals&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total funds, in USD, currently allocated to active deals

### Example request

```json
GET /ver1/bots/stats
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>
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
