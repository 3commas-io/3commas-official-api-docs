**Description:** Returns all type of trades for a specific deal

**Permission:** BOTS_READ
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "blue"}}> GET </mark></code>

<code>`/ver1/deals/{deal_id}/market_orders`</code>

</blockquote>

### Path Parameter

   deal_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID Deal entity

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
   Indicates whether this trade can be canceled (<code>true</code>) or not (<code>false</code>)

   status_string&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   3Commas status for this Trade
   <details>
      <summary>Allowed value</summary>
      - Active
      - Filled
      - Finished
      - Cancelled
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
GET /ver1/deals/1234567890/market_orders
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

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

</details>
