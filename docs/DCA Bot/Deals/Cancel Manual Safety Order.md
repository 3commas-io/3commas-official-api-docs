**Description:** Cancels a specific manual safety trade within the DCA Bot using its ID

:::warning
After this action, 3Commas will automatically set the final status to **Cancelled** for this trade.
:::

**Permission:** BOTS_WRITE
**Security:** SIGNED

<blockquote>
<span style={{ color: "green" }}>POST</span>
<code>`/ver1/deals/{deal_id}/cancel_order`</code>
</blockquote>

### Path Parameter

   deal_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID Deal entity

### Body Parameter

   order_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas Trade entity ID

:::warning
Use the [Get Trades of Deal](./DCA%20Bot/Deals/Get%20Trades%20of%20Deal.md) endpoint to retrieve the value for the order_id parameter.
:::

### Response Parameters

   order_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Unique 3Commas Trade entity ID

    order_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    The side of the order to be created by this trade
    <details>
        <summary>Allowed value</summary>
        - Buy
        - Sell
    </details>


    deal_order_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    The type of the order to be created by this trade
    <details>
        <summary>Allowed value</summary>
        - Base
        - Take profit
        - Stop Loss
        - Safety
        - Manual Safety
    </details>

   cancellable&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether this trade can be canceled

    status_string&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
    3Commas status for this Trade
    <details>
        <summary>Allowed value</summary>
        - Active - the trade is currently open, waiting to be filled
        - Filled - the trade has been fully executed
        - Finished - the trade process is complete
        - Cancelled - the trade was canceled before it could be fully executed
    </details>

   created_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   ISO 8601 datetime string of when this Trade entity was created

   updated_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   ISO 8601 datetime string of when this Trade entity was updated

   quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Total quantity of the asset in this order

   quantity_remaining&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Remaining quantity of the asset left to be filled in this order

   total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Total value of the order based on <code>quantity</code> and <code>rate</code>

   rate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Price per unit of the asset in the order

   average_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The weighted average price at which the asset was bought or sold during the execution of the trades

### Example Request

```json
POST  /ver1/deals/2345678901/cancel_order
```

### Example Response and errors

<details>
<summary>Status: 201 Created</summary>

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
<summary>Status: 400 Bad Request</summary>

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
<summary>Status: 422 Unprocessable Entity</summary>
```
{
    "error": "Cant be cancelled"
}
```
</details>
