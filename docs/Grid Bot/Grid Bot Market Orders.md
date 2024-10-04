## Get trades of Grid Bot<br>

**Description:** Returns a list of market orders for a Grid Bot using its ID<br>

<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>
<br>

-------- 

<mark style="color:blue;background-color:white"> **GET**

<mark style="color:blue;background-color:white"> **/ver1/grid_bots/{id}/market_orders**

-------- 

<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values | Description|
|------|------|-----------|-----------------|------------|
|**id**  | `integer`	| Yes |  | Unique 3Commas ID for this Grid Bot entity |

<br>

### Body Parameters<br>

| Name | Type |	Mandatory |	Values(default)	| Description|
|------|------|-----------|-----------------|------------|
|**limit**  | `integer`	| No | Minimum: `1`, Maximum: `1000` | Quantity of the records you want to get in response.<br>Default: `100` |
|**offset**  | `integer`	| No | 	| Used to specify the starting point for a set of records to return in a paginated list.<br>Default: `0` |

<br>
<br>

### Response Parameters<br>

| Name | Type |	Description|
|------|------|------------|
| **grid_lines_orders[order_id]** | `integer`| ID of this trade entity |
| **grid_lines_orders[order_type]** | `string`| The side of the order to be created by this trade|
|**grid_lines_orders[status_string]** | `integer`| 3Commas status for this Trade |
| **grid_lines_orders[created_at]** | `string <date-time>`| ISO 8601 datetime string of when this Trade entity was created |
| **grid_lines_orders[updated_at]** | `string <date-time>`| ISO 8601 datetime string of when this Trade entity was updated |
| **grid_lines_orders[quantity]** | `integer`| The total amount of the asset involved in the order |
| **grid_lines_orders[quantity_remaining]** | `integer`| The amount of the asset that remains unfulfilled from the total order quantity |
| **grid_lines_orders[total]** | `integer`| The total value of the order based on the executed quantity and rate |
| **grid_lines_orders[rate]** | `integer`| The rate at which the asset was bought or sold for this order  |
| **grid_lines_orders[average_price]** | `string`| Weighted average price of the asset during trade execution |


<br>
<br>

### Example Request<br>

```json
POST /ver1/grid_bots/2338357/market_orders
```
<br>
<br>

###  Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```json
{
    "grid_lines_orders": [
        {
            "order_id": 1060886383,
            "order_type": "BUY",
            "status_string": "Inactive",
            "created_at": "2024-10-03T19:53:50.598Z",
            "updated_at": "2024-10-03T19:53:51.202Z",
            "quantity": "1227.0",
            "quantity_remaining": "1227.0",
            "total": "0.0",
            "rate": "0.016287",
            "average_price": "0.0"
        },
        {
            "order_id": 1060886382,
            "order_type": "BUY",
            "status_string": "Inactive",
            "created_at": "2024-10-03T19:53:50.505Z",
            "updated_at": "2024-10-03T19:53:51.111Z",
            "quantity": "1223.0",
            "quantity_remaining": "1223.0",
            "total": "0.0",
            "rate": "0.016352",
            "average_price": "0.0"
        },
        ...
    ],
    "balancing_orders": [
        {
            "order_id": 1060886271,
            "order_type": "BUY",
            "status_string": "Filled",
            "created_at": "2024-10-03T19:53:39.784Z",
            "update_at": "2024-10-03T19:53:41.227Z",
            "quantity": "4495.0",
            "quantity_remaining": "0.0",
            "total": "98.77216807",
            "rate": "0.021973786",
            "average_price": "0.021973786"
        }
    ]
}
```
</details>