## Get profit details of Grid Bot<br>

**Description:** Returns profit details of existing Grid Bot using its ID<br>

<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>
<br>

-------- 

<mark style="color:blue;background-color:white"> **GET**

<mark style="color:blue;background-color:white"> **/ver1/grid_bots/{id}/profits**

-------- 

<br>
<br>


### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**id**  | `integer` | Yes |	| Unique 3Commas ID for this Grid Bot entity |

<br>

## Query parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**from**  | `string` | No | ISO 8601 format	| Filters the Grid Bots created after a specific date |
|**to**  | `string` | No | ISO 8601 format	| Filters the Grid Bots created before a specific date |

<br>
{% hint style="info" %}
If the from and to values are not set, the response will include all records ordered in descending (`DESC`) order by ID parameter
{% endhint %}
<br>
<br>

### Parameters response<br>

| Name | Type | Description|
|------|------|-----------------|
|**grid_line_id**  | `integer` | Unique 3Commas ID for this Grid line entity |
|**profit**  | `string` | Profit amount from this Grid line event in the base currency |
|**usd_profit**  | `string` | Profit amount in USD from this Grid line event |
|**created_at**  | `string<date-time>` | ISO 8601 datetime string indicating when the event was recorded |
|**grid_line[id]**  | `string` | Unique 3Commas ID for this Grid line entity |
|**grid_line[price]**  | `string` | The price value at which the asset was bought or sold when this grid line was executed |
|**grid_line[side]**  | `string` | Order side for this Grid line |
|**grid_line[order_placed]**  | `boolean` | Indicates whether the order for this Grid line has been placed |
<br>
<br>

### Example Request<br>

```json
GET /ver1/grid_bots/2338357/profits?from=2024-09-01T04:00:00.000Z&to=2024-10-11T03:59:59.000Z
``


### Example Response and errors<br>
<details>
<summary>Status: 201 Created</summary><br>

```json
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
    {
        "grid_line_id": 256439950,
        "profit": "0.2721254846234494",
        "usd_profit": "0.2721254846234494",
        "created_at": "2024-10-04T16:23:16.731Z",
        "grid_line": {
            "id": 256439950,
            "price": "0.022503",
            "side": "buy",
            "order_placed": false
        }
    },
    ...
]
```
