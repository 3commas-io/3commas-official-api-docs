## Get the list of active entities<br>

**Description:** Returns the list of active bots and SmartTrades using an ID account<br>

**Permission:** ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue;background-color:white" > **GET**

<mark style="color:blue;background-color:white" > **/ver1/accounts/{account_id}/active_trading_entities**

----------

<br>
<br>

**Path Parameters**<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**account_id** | `integer` | Yes |  | Unique 3Commas ID for this exchange account entity |

<br>
<br>

**Parameters response**<br>

| Name | Type |	Description|
|------|------|------------|
|**data[active_bots_count]`**| `integer` | The number of all active DCA Bots on this account |
|**data[active_deals_count]**| `integer` | The number of all active deals of DCA Bot on this account |
|**data[active_smart_trades_count]**| `integer` | The number of all active SmartTrades on this account |
|**data[active_orders_count]**| `integer`| The number of all active orders on this account|
|**data[active_grid_bots_count]**| `integer` | The number of all active Grid Bots on this account |

<br>
<br>

**Example request**<br>

```json
/ver1/accounts/12345678/active_trading_entities
```
<br>
<br>

**Example Response and errors**<br>


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