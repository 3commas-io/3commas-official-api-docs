## Add Manual Safety Trade<br>

**Description:** [TBD] <br>

**Permission:** BOTS_WRITE<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:gree"> <strong>POST</strong><br>

<mark style="color:gree"> <strong>/ver1/deals/{deal_id}/add_funds</strong>

----------

<br>
<br>

### Path Parameter<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**deal_id**  | `integer`| Yes |  | Unique 3Commas ID Deal entity |


### Body Parameters<br>

| Name | Type | Mandatory | Values | Description |
| ------------ | ------------ | -----------| -------- | ------------ |
| **quantity** | `number` | Yes |   | Specifies the amount for the manual safety trade |
| **is_market** | `boolean` | Yes | `true`<br>`false` | Indicates the type of order: `true` for a market order, `false` for a limit order |
| **response_type** | `string` | No | `empty`<br>`deal`<br>`market_order` | Defines the response format. `deal` is using only for 1 pair bot.<br>Default: `empty` |
| **rate** | `number` | Yes |   | Sets the rate for the safety order. <br> Required if a limit order is used|

<br>
<br>

### Response Parameters<br>

Response format depends on choosing `response_type`:

{% tabs %}
{% tab title="empty" %}

None

{% endtab %}

{% tab title="market_order" %}

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

{% endtab %}

{% tab title="deal" %}

If successful, the response includes an updated copy of the [Deals](./README.md) entity.


{% endtab %}

{% endtabs %}


<br>
<br>

### Example Request<br>

```json
POST /ver1/deals/2295672969/add_funds
````
 
```
Body:

{
   "quantity": 0.01,
   "is_market": false,
   "response_type": "market_order",
   "rate": 0.2970
}

```

<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
{
    "order_id": "1110817001",
    "order_type": "SELL",
    "deal_order_type": "Manual Safety",
    "cancellable": true,
    "status_string": "Active",
    "created_at": "2024-11-11T16:46:59.479Z",
    "updated_at": "2024-11-11T16:46:59.479Z",
    "quantity": "0.0",
    "quantity_remaining": "0.0",
    "total": "0.0",
    "rate": "0.297",
    "average_price": "0.0"
}
```
</details>

<details>
<summary>Status: 400 Bad request</summary><br>
```
{
    "error": "record_invalid",
    "error_description": "Invalid parameters",
    "error_attributes": {
        "rate": [
            "is missing"
        ]
    }
}
```
</details>