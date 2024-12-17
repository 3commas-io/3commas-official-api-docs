## Get the list of active entities

**Description:** Returns the list of active bots, deals and smarttrades using an ID account

**Permission:** ACCOUNTS_READ
**Security:** SIGNED

----------

<mark style={{ color: "blue", backgroundColor: "white" }} > **GET**</mark>

<mark style={{ color: "blue", backgroundColor: "white" }} >`/ver1/accounts/{account_id}/active_trading_entities`</mark>

----------

### Path Parameters

   account_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Unique 3Commas ID for this exchange account entity

### Response Parameters

   data&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
      Contains aggregated information about the active trading entities on this account

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active_bots_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The number of all active DCA Bots on this account

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active_deals_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The number of all active deals of DCA Bot on this account

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active_smart_trades_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The number of all active SmartTrades on this account

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active_orders_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The number of all active orders on this account

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active_grid_bots_count&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The number of all active Grid Bots on this account

### Example request

```json
GET /ver1/accounts/12345678/active_trading_entities
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

```json
{
    "data": {
        "active_bots_count": 5,
        "active_deals_count": 4,
        "active_smart_trades_count": 3,
        "active_orders_count": 2,
        "active_grid_bots_count": 0
    }
}
```

</details>
