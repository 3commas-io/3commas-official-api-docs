## Active trade entities

**Description:** Returns a list of active bots and SmartTrades using an ID account.

Permission: ACCOUNTS_READ

Security: SIGNED

----------

<mark style="color:blue;background-color:white" > **GET**

<mark style="color:blue;background-color:white" > **/ver1/accounts/{account_id}/active_trading_entities**

----------


**Path Parameters**

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**`account_id`**  | <mark style="color:grey;background-color:white"> integer | Yes |  |  Unique 3Commas ID for this exchange account entity |

**Parameters response**
| Name | Type |	Description|
|------|------|------------|
|**`data[active_bots_count]`**| integer | The number of all active DCA Bots on this account |
|**`data[active_deals_count] `**| integer | The number of all active deals of DCA Bot on this account |
|**`data[active_smart_trades_count] `**| integer | The number of all active SmartTrades on this account |
|**`data[active_orders_count]`**| integer| The number of all active orders on this account|
|**`data[active_grid_bots_count]`**| integer | The number of all active Grid Bots on this account |

**Example request**
```json
{{baseUrl}}/ver1/accounts/12345678/active_trading_entities
```

**Example Response and errors**

<details>

<summary>Status: 200 OK</summary>
```json
{
    "data": {
        "active_bots_count": 0,
        "active_deals_count": 0,
        "active_smart_trades_count": 3,
        "active_orders_count": 2,
        "active_grid_bots_count": 0
    }
}
```
</details>