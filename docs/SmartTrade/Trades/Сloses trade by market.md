## Сloses trade by market
**Description:** Closes a specific take profit trade within a SmartTrade by market using its ID.


{% hint style="warning" %}
The endpoint is available for a take profit trades with statuses to_process ,  order_placed and  trailing_activated.
{% endhint %}

**Permission:** SMART_TRADES_WRITE

**Security:** SIGNED

POST

/v2/smart_trades/{smart_trade_id}/trades/{id}/close_by_market

**Path Parameters**
| Name | Type |	Mandatory |	Values(default)	| Description|
|------|------|-----------|-----------------|------------|
|`smart-trade_id` | integer	| Yes | - | Unique 3Commas ID for this SmartTrade entity. |
|`id` | integer	| Yes | - | Unique 3Commas ID for Trade entity |


**Response Parameters**

| Name | Type |	Description|
|------|------|-----------|
| | integer	| Unique 3Commas ID for Trade entity |



**Example Response and errors**

<details>
<summary>Status: 200 OK</summary>

```json
```
</details>

<details>
<summary>Status: </summary>
```json
```
</details>




