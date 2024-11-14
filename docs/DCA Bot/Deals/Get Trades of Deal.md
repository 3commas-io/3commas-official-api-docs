## Get Trades of Deal<br>

**Description:** Returns all type of trades for a specific deal<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue"> <strong>GET</strong><br>
<mark style="color:blue"> <strong>/ver1/deals/{deal_id}/market_orders</strong>

----------

<br>
<br>

### Path Parameter<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**deal_id**  | `integer`| Yes |  | Unique 3Commas ID Deal entity |

<br>
<br>

### Response Parameters<br>

| Name | Type |	Description|
| ------|------|-----------|
| **order_id**  | `string`| Unique 3Commas Trade entity ID |
| **order_type**  | `string`| The side of the order to be created by this trade<br><details><summary><em>Allowed value</em></summary><li>Buy</li><li>Sell</li></details><br> |
| **deal_order_type**  | `string`| The type of the order to be created by this trade<br><details><summary><em>Allowed value</em></summary><li>Base</li><li>Take profit</li><li>Stop Loss</li><li>Safety</li></details><br> |
| **cancellable**  | `boolean`| Indicates whether this trade can be canceled |
| **status_string**  | `string`| 3Commas status for this Trade<br><details><summary><em>Allowed value</em></summary><li>Active - the trade is currently open, waiting to be filled</li><li>Filled - the trade has been fully executed</li><li>Finished - the trade process is complete</li><li>Cancelled - the trade was canceled before it could be fully executed </li></details><br> |
| **created_at**  | `string`| ISO 8601 datetime string of when this Trade entity was created |
| **updated_at**  | `string`| ISO 8601 datetime string of when this Trade entity was updated |
| **quantity**  | `string`| Total quantity of the asset in this order |
| **quantity_remaining**  | `string`| Remaining quantity of the asset left to be filled in this order |
| **total**  | `string`| Total value of the order based on `quantity` and `rate` |
| **rate**  | `string`| Price per unit of the asset in the order |
| **average_price**  | `string`| The weighted average price at which the asset was bought or sold during the execution of the trades |

<br>
<br>

### Example Request<br>

```json
GET /ver1/deals/1234567890/market_orders
```

<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```json
[
    {
        "order_id": "1110863869",
        "order_type": "SELL",
        "deal_order_type": "Manual Safety",
        "cancellable": false,
        "status_string": "Inactive",
        "created_at": "2024-11-11T17:02:50.001Z",
        "updated_at": "2024-11-11T17:02:50.166Z",
        "quantity": "0.0",
        "quantity_remaining": "0.0",
        "total": "0.0",
        "rate": "0.297",
        "average_price": "0.0"
    },
    {
        "order_id": "1110817001",
        "order_type": "SELL",
        "deal_order_type": "Manual Safety",
        "cancellable": false,
        "status_string": "Inactive",
        "created_at": "2024-11-11T16:46:59.479Z",
        "updated_at": "2024-11-11T16:46:59.643Z",
        "quantity": "0.0",
        "quantity_remaining": "0.0",
        "total": "0.0",
        "rate": "0.297",
        "average_price": "0.0"
    },
    {
        "order_id": "1110812940",
        "order_type": "SELL",
        "deal_order_type": "Manual Safety",
        "cancellable": false,
        "status_string": "Inactive",
        "created_at": "2024-11-11T16:45:38.751Z",
        "updated_at": "2024-11-11T16:45:38.892Z",
        "quantity": "0.0",
        "quantity_remaining": "0.0",
        "total": "0.0",
        "rate": "0.297",
        "average_price": "0.0"
    },
    {
        "order_id": "1110811846",
        "order_type": "SELL",
        "deal_order_type": "Manual Safety",
        "cancellable": false,
        "status_string": "Inactive",
        "created_at": "2024-11-11T16:45:21.014Z",
        "updated_at": "2024-11-11T16:45:21.156Z",
        "quantity": "0.0",
        "quantity_remaining": "0.0",
        "total": "0.0",
        "rate": "0.2971",
        "average_price": "0.0"
    },
    {
        "order_id": "1110706583",
        "order_type": "SELL",
        "deal_order_type": "Manual Safety",
        "cancellable": false,
        "status_string": "Inactive",
        "created_at": "2024-11-11T16:22:01.176Z",
        "updated_at": "2024-11-11T16:22:01.391Z",
        "quantity": "0.0",
        "quantity_remaining": "0.0",
        "total": "0.0",
        "rate": "0.0",
        "average_price": "0.0"
    },
    {
        "order_id": "1110645798",
        "order_type": "SELL",
        "deal_order_type": "Manual Safety",
        "cancellable": false,
        "status_string": "Inactive",
        "created_at": "2024-11-11T16:04:51.619Z",
        "updated_at": "2024-11-11T16:04:51.750Z",
        "quantity": "0.0",
        "quantity_remaining": "0.0",
        "total": "0.0",
        "rate": "0.0",
        "average_price": "0.0"
    },
    {
        "order_id": "1102488856",
        "order_type": "BUY",
        "deal_order_type": "Take Profit",
        "cancellable": true,
        "status_string": "Active",
        "created_at": "2024-11-08T20:39:06.340Z",
        "updated_at": "2024-11-08T21:54:34.204Z",
        "quantity": "25.9",
        "quantity_remaining": "25.9",
        "total": "0.0",
        "rate": "0.25",
        "average_price": "0.0"
    },
    {
        "order_id": "1102488858",
        "order_type": "SELL",
        "deal_order_type": "Safety",
        "cancellable": false,
        "status_string": "Filled",
        "created_at": "2024-11-08T20:39:06.443Z",
        "updated_at": "2024-11-08T21:54:33.294Z",
        "quantity": "15.0",
        "quantity_remaining": "0.0",
        "total": "3.894858",
        "rate": "0.2607",
        "average_price": "0.2596572"
    },
    {
        "order_id": "1102488849",
        "order_type": "SELL",
        "deal_order_type": "Base",
        "cancellable": false,
        "status_string": "Filled",
        "created_at": "2024-11-08T20:39:05.801Z",
        "updated_at": "2024-11-08T20:39:06.147Z",
        "quantity": "10.0",
        "quantity_remaining": "0.0",
        "total": "2.580424",
        "rate": "0.2596",
        "average_price": "0.2580424"
    }
]
```