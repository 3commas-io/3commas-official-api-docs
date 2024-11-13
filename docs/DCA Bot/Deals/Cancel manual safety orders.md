## Cancel manual safety orders<br>

**Description:** Cancels a specific safety trade within the DCA Bot using its ID<br>

{% hint style="warning" %}
After this action, 3Commas will automatically set the final status to **Cancelled** for this trade.
{% endhint %}

<br>

**Permission:** BOTS_WRITE<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:green" > <strong>POST</strong><br>
<mark style="color:green" > <strong>/ver1/deals/{deal_id}/cancel_order</strong>

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

{% hint style="info" %}
If successful, the response includes an updated copy of the [Deals](./README.md) entity.
{% endhint %}

<br>
<br>

### Example Request<br>

```json
POST  /ver1/deals/2345678901/cancel
```

<br>
<br>

###  Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
[
    {
        "order_id": "1119466516",
        "order_type": "SELL",
        "deal_order_type": "Closed at Market Price",
        "cancellable": false,
        "status_string": "Filled",
        "created_at": "2024-11-13T16:18:09.866Z",
        "updated_at": "2024-11-13T16:18:11.070Z",
        "quantity": "0.0305",
        "quantity_remaining": "0.0",
        "total": "100.73765151",
        "rate": "0.0",
        "average_price": "3302.87382"
    },
    {
        "order_id": "1119136110",
        "order_type": "SELL",
        "deal_order_type": "Take Profit",
        "cancellable": false,
        "status_string": "Cancelled",
        "created_at": "2024-11-13T15:17:27.466Z",
        "updated_at": "2024-11-13T16:18:09.346Z",
        "quantity": "0.0031",
        "quantity_remaining": "0.0031",
        "total": "0.0",
        "rate": "3424.83",
        "average_price": "0.0"
    },
    {
        "order_id": "1119136171",
        "order_type": "BUY",
        "deal_order_type": "Safety",
        "cancellable": false,
        "status_string": "Cancelled",
        "created_at": "2024-11-13T15:17:27.737Z",
        "updated_at": "2024-11-13T16:18:09.415Z",
        "quantity": "0.0167",
        "quantity_remaining": "0.0167",
        "total": "0.0",
        "rate": "2598.94",
        "average_price": "0.0"
    },
    {
        "order_id": "1119136155",
        "order_type": "BUY",
        "deal_order_type": "Safety",
        "cancellable": false,
        "status_string": "Cancelled",
        "created_at": "2024-11-13T15:17:27.664Z",
        "updated_at": "2024-11-13T16:18:09.451Z",
        "quantity": "0.0082",
        "quantity_remaining": "0.0082",
        "total": "0.0",
        "rate": "3125.31",
        "average_price": "0.0"
    },
    {
        "order_id": "1119136136",
        "order_type": "BUY",
        "deal_order_type": "Safety",
        "cancellable": false,
        "status_string": "Cancelled",
        "created_at": "2024-11-13T15:17:27.572Z",
        "updated_at": "2024-11-13T16:18:09.337Z",
        "quantity": "0.0047",
        "quantity_remaining": "0.0047",
        "total": "0.0",
        "rate": "3256.9",
        "average_price": "0.0"
    },
    {
        "order_id": "1119136092",
        "order_type": "SELL",
        "deal_order_type": "Take Profit",
        "cancellable": false,
        "status_string": "Cancelled",
        "created_at": "2024-11-13T15:17:27.397Z",
        "updated_at": "2024-11-13T16:18:09.345Z",
        "quantity": "0.0152",
        "quantity_remaining": "0.0152",
        "total": "0.0",
        "rate": "3391.9",
        "average_price": "0.0"
    },
    {
        "order_id": "1119136065",
        "order_type": "SELL",
        "deal_order_type": "Take Profit",
        "cancellable": false,
        "status_string": "Cancelled",
        "created_at": "2024-11-13T15:17:27.314Z",
        "updated_at": "2024-11-13T16:18:09.491Z",
        "quantity": "0.0122",
        "quantity_remaining": "0.0122",
        "total": "0.0",
        "rate": "3358.97",
        "average_price": "0.0"
    },
    {
        "order_id": "1119135765",
        "order_type": "BUY",
        "deal_order_type": "Base",
        "cancellable": false,
        "status_string": "Filled",
        "created_at": "2024-11-13T15:17:25.398Z",
        "updated_at": "2024-11-13T15:17:27.008Z",
        "quantity": "0.0305",
        "quantity_remaining": "0.0",
        "total": "100.33909886",
        "rate": "3287.15",
        "average_price": "3289.80652"
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