## Get stats of DCA Bot<br>

**Description:** Returns profit and locked amount data on deals for all DCA Bots or an existing bot or an existing exchange account using their ID<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue;background-color:white" > **GET**

<mark style="color:blue;background-color:white" > **/ver1/bots/stats**

----------
<br>
<br>


### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
| **account_id** | `integer` | No |   | Filters entities linked to the specified 3Commas exchange account |
| **bot_id** | `integer` | No |   | Filters entities linked to the specified DCA Bot|

<br>

{% hint style="info" %}
Use endpoint [User connected exchanges and wallets list](Account/User%20connected%20exchanges%20and%20wallets%20list.md) to get value for parameter 'account_id' in 3Commas.
{% endhint %}

<br>
<br>

### Parameters response<br>

| Name | Type | Description |
|----- | ------- | ------------ |
|**overall_stats** | `array` | Shows cumulative profit or loss by currency for all trading activity |
|**today_stats** | `array` | Shows today's profit or loss by currency |
|**profits_in_usd[overall_usd_profit]** | `string` | Cumulative USD profit or loss from all trading activity  |
|**profits_in_usd[today_usd_profit]** | `string` | USD profit or loss accumulated for the current day  |
|**profits_in_usd[active_deals_usd_profit]** | `string` |  USD profit or loss from active (unclosed) deals |
|**profits_in_usd[funds_locked_in_active_deals]** | `string` | Total funds, in USD, currently allocated to active deals |


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
