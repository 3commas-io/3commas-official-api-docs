## Grid Bot Profits<br>

**Description:** Deletes a existing Grid Bot in place using its ID <br>

<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>
<br>

-------- 

<mark style="color:red;background-color:white"> **GET**

<mark style="color:red;background-color:white"> **/ver1/grid_bots/{id}/profits**

-------- 

<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**id**  | `integer` | Yes |	| Unique 3Commas ID for this Grid Bot entity |

<br>

### Body Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**from**  | `string` | No |	| Filters the Grid Bots created after a specific date. Use an ISO 8601 datetime string as the value |
|**to**  | `string` | No |	| Filters the Grid Bots created before a specific date. Use an ISO 8601 datetime string as the value |

<br>

{% hint style="info" %}
If the `from` and `to` values are not set, the response will include all records ordered in descending (`DESC`) order.
{% endhint %}

<br>
<br>

### Response Parameters<br>

| Name | Type | Description|
|------|------|-----------------|
|**grid_line_id**  | string | Unique 3Commas ID for this Grid line entity |
|**profit**  | string | Profit amount from this Grid line event in the base currency |
|**usd_profit**  | string | Profit amount in USD from this Grid line event |
|**created_at**  | string | ISO 8601 datetime string indicating when the event was recorded |
|**grid_line[id]**  | string | Unique 3Commas ID for this Grid line entity |
|**grid_line[price]**  | string | The price value at which the asset was bought or sold when this grid line was executed |
|**grid_line[side]**  | string | Order side for this Grid line |
|**grid_line[order_placed]**  | string | Indicates whether the order for this Grid line has been placed |

<br>
<br>

### Example Request<br>

```
GET /ver1/grid_bots/2338357/profits
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>
```
[
    {
        "grid_line_id": 256470631,
        "profit": "0.5387463715614246",
        "usd_profit": "0.5387463715614246",
        "created_at": "2024-10-06T11:45:47.500Z",
        "grid_line": {
            "id": 256470631,
            "price": "0.022954",
            "side": "buy",
            "order_placed": false
        }
    },
    ...
    {
        "grid_line_id": 256427676,
        "profit": "0.0673937919894358",
        "usd_profit": "0.0673937919894358",
        "created_at": "2024-10-03T20:01:44.874Z",
        "grid_line": {
            "id": 256427676,
            "price": "0.022059",
            "side": "buy",
            "order_placed": true
        }
    }
]

```
</details>

<details>
<summary>Status: 401 Unauthorized</summary><br>

```json
{
    "error": "signature_invalid",
    "error_description": "Provided signature is invalid"
}
```
</details>