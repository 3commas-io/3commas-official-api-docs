## Closes trade by market<br>

**Description:** Closes a specific take profit trade within a SmartTrade by market using its ID<br>


{% hint style="warning" %}
The endpoint is available for a take profit trades with statuses to_process ,  order_placed and  trailing_activated.
{% endhint %}
<br>

**Permission:** SMART_TRADES_WRITE<br>
**Security:** SIGNED<br>

----------

<mark style="color:green;background-color:white" > **POST**

<mark style="color:green;background-color:white" > **/v2/smart_trades/{smart_trade_id}/trades/{id}/close_by_market**

----------

<br>
<br>


**Path Parameters**<br>
| Name | Type |	Mandatory |	Values(default)	| Description|
|------|------|-----------|-----------------|------------|
|`smart-trade_id` | integer	| Yes | - | Unique 3Commas ID for this SmartTrade entity. |
|`id` | integer	| Yes | - | Unique 3Commas ID for Trade entity |

<br>
<br>

**Response Parameters**<br>

| Name | Type |	Description|
|------|------|-----------|
| | integer	| Unique 3Commas ID for Trade entity |

<br>
<br>


**Example Response and errors**<br>

<details>
<summary>Status: 200 OK</summary><br>

```json

```

</details>

<details>
<summary>Status: </summary><br>

```json

```

</details>




