## Cancel Manual Safety Trade<br>

**Description:** Cancels a specific manual safety trade within the DCA Bot using its ID<br>

{% hint style="warning" %}
After this action, 3Commas will automatically set the final status to **Cancelled** for this trade.
{% endhint %}

<br>

**Permission:** BOTS_WRITE<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:green"> <strong>POST</strong><br>
<mark style="color:green"> <strong>/ver1/deals/{deal_id}/cancel_order</strong>

----------
<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**deal_id**  | `integer`| Yes |  | Unique 3Commas ID Deal entity |

<br>

### Body Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**order_id**  | `integer`| Yes |  | Unique 3Commas Trade entity ID |

<br>
{% hint style="infor" %}

Use the [Get Trades of Deal](./DCA%20Bot/Deals/Get%20Trades%20of%20Deal.md) endpoint to retrieve the value for the order_id parameter.
{% endhint %}

<br>
<br>

### Response Parameters<br>

| Name | Type |	Description|
| ------|------|-----------|
| **order_id**  | `string`| Unique 3Commas Trade entity ID |
| **order_type**  | `string`| The side of the order to be created by this trade<br><details><summary><em>Allowed value</em></summary><li>Buy</li><li>Sell</li></details><br> |
| **deal_order_type**  | `string`| The type of the order to be created by this trade<br><details><summary><em>Allowed value</em></summary><li>Base</li><li>Take profit</li><li>Stop Loss</li><li>Safety</li><li>Manual Safety</li></details><br> |
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
POST  /ver1/deals/2345678901/cancel_order
```

<br>
<br>

###  Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
[
    {
        "order_id": "1123077930",
        "order_type": "BUY",
        "deal_order_type": "Manual Safety",
        "cancellable": true,
        "status_string": "Active",
        "created_at": "2024-11-14T14:30:09.760Z",
        "updated_at": "2024-11-14T14:30:10.641Z",
        "quantity": "0.2583",
        "quantity_remaining": "0.2583",
        "total": "0.0",
        "rate": "3016.56",
        "average_price": "0.0"
    },
    {
        "order_id": "1123077331",
        "order_type": "BUY",
        "deal_order_type": "Manual Safety",
        "cancellable": false,
        "status_string": "Cancelled",
        "created_at": "2024-11-14T14:29:49.936Z",
        "updated_at": "2024-11-14T14:30:49.015Z",
        "quantity": "0.1773",
        "quantity_remaining": "0.1773",
        "total": "0.0",
        "rate": "3116.81",
        "average_price": "0.0"
    },
    {
        "order_id": "1123069475",
        "order_type": "BUY",
        "deal_order_type": "Manual Safety",
        "cancellable": false,
        "status_string": "Cancelled",
        "created_at": "2024-11-14T14:26:41.582Z",
        "updated_at": "2024-11-14T14:27:52.706Z",
        "quantity": "0.1462",
        "quantity_remaining": "0.1462",
        "total": "0.0",
        "rate": "3150.44",
        "average_price": "0.0"
    },
    {
        "order_id": "1123065576",
        "order_type": "SELL",
        "deal_order_type": "Take Profit",
        "cancellable": true,
        "status_string": "Active",
        "created_at": "2024-11-14T14:24:05.894Z",
        "updated_at": "2024-11-14T14:24:06.919Z",
        "quantity": "0.0032",
        "quantity_remaining": "0.0032",
        "total": "0.0",
        "rate": "3310.69",
        "average_price": "0.0"
    },
    {
        "order_id": "1123065567",
        "order_type": "SELL",
        "deal_order_type": "Take Profit",
        "cancellable": true,
        "status_string": "Active",
        "created_at": "2024-11-14T14:24:05.836Z",
        "updated_at": "2024-11-14T14:24:06.819Z",
        "quantity": "0.0157",
        "quantity_remaining": "0.0157",
        "total": "0.0",
        "rate": "3278.86",
        "average_price": "0.0"
    },
    {
        "order_id": "1123065560",
        "order_type": "SELL",
        "deal_order_type": "Take Profit",
        "cancellable": true,
        "status_string": "Active",
        "created_at": "2024-11-14T14:24:05.768Z",
        "updated_at": "2024-11-14T14:24:06.602Z",
        "quantity": "0.0126",
        "quantity_remaining": "0.0126",
        "total": "0.0",
        "rate": "3247.02",
        "average_price": "0.0"
    },
    {
        "order_id": "1123065589",
        "order_type": "BUY",
        "deal_order_type": "Safety",
        "cancellable": true,
        "status_string": "Active",
        "created_at": "2024-11-14T14:24:06.095Z",
        "updated_at": "2024-11-14T14:24:06.813Z",
        "quantity": "0.0173",
        "quantity_remaining": "0.0173",
        "total": "0.0",
        "rate": "2512.33",
        "average_price": "0.0"
    },
    {
        "order_id": "1123065587",
        "order_type": "BUY",
        "deal_order_type": "Safety",
        "cancellable": true,
        "status_string": "Active",
        "created_at": "2024-11-14T14:24:06.029Z",
        "updated_at": "2024-11-14T14:24:07.024Z",
        "quantity": "0.0085",
        "quantity_remaining": "0.0085",
        "total": "0.0",
        "rate": "3021.15",
        "average_price": "0.0"
    },
    {
        "order_id": "1123065582",
        "order_type": "BUY",
        "deal_order_type": "Safety",
        "cancellable": true,
        "status_string": "Active",
        "created_at": "2024-11-14T14:24:05.971Z",
        "updated_at": "2024-11-14T14:24:07.201Z",
        "quantity": "0.0048",
        "quantity_remaining": "0.0048",
        "total": "0.0",
        "rate": "3148.36",
        "average_price": "0.0"
    },
    {
        "order_id": "1123064629",
        "order_type": "BUY",
        "deal_order_type": "Base",
        "cancellable": false,
        "status_string": "Filled",
        "created_at": "2024-11-14T14:23:24.576Z",
        "updated_at": "2024-11-14T14:24:05.525Z",
        "quantity": "0.0315",
        "quantity_remaining": "0.0",
        "total": "100.175260185",
        "rate": "3176.99",
        "average_price": "3180.16699"
    }
]
```
</details>

<details>
<summary>Status: 400 Bad Request</summary><br>

```json
{
    "error": "record_invalid",
    "error_description": "Invalid parameters",
    "error_attributes": {
        "order_id": [
            "is missing"
        ]
    }
}
```
</details>

<details>
<summary>Status: 422 Unprocessable Entity</summary><br>
```
{
    "error": "Cant be cancelled"
}
</details>