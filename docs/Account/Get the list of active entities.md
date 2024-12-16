## Get the list of active entities<br>
<br>

**Description:** Returns the list of active bots, deals and smarttrades using an ID account<br>

**Permission:** ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:blue"><strong> GET </strong></mark></code>

<code>/ver1/accounts/{account_id}/active_trading_entities</code>

</blockquote>

<br>

### Path Parameter<br>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Unique 3Commas ID for this exchange account entity
</p><br>

### Response Parameters<br>
<p>
   <strong>data</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
      Contains aggregated information about the active trading entities on this account
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>active_bots_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The number of all active DCA Bots on this account
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>active_deals_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The number of all active deals of DCA Bot on this account
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>active_smart_trades_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The number of all active SmartTrades on this account
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>active_orders_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The number of all active orders on this account
</p>
<p>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>active_grid_bots_count</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The number of all active Grid Bots on this account
</p><br>


### Example request<br>

```json
GET /ver1/accounts/12345678/active_trading_entities
```
<br>

### Example Response and errors<br>
<details>
<summary>Status: 200 OK</summary><br>

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