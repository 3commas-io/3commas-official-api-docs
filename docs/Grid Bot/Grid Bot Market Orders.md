**Description:** Returns a list of market orders for a Grid Bot using its ID

**Permission:** BOTS_READ
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "blue"}}> GET </mark></code>

<code>`/ver1/grid_bots/{id}/market_orders`</code>

</blockquote>

### Path Parameter

   id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID for this Grid Bot entity

### Query Parameters

   limit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Quantity of the records you want to get in response
   Minimum: <code>1</code>, Maximum: <code>1000</code>
   Default: <code>100</code>

   offset&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Used to specify the starting point for a set of records to return in a paginated list
   Default: <code>0</code>

### Response Parameters

   grid_lines_orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
An array of grid line orders associated with this trading strategy

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;order_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ID of Trade entity

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;order_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The side of the order to be created by this trade: <code>Buy</code> or <code>Sell</code>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;status_string&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this Trade

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;created_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISO 8601 datetime string of when this Trade entity was created

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;updated_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISO 8601 datetime string of when this Trade entity was updated

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The total amount of the asset involved in the order

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity_remaining&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The amount of the asset that remains unfulfilled from the total order quantity

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The total value of the order based on the executed quantity and rate

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The rate at which the asset was bought or sold for this order

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;average_price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weighted average price of the asset during trade execution

### Example Request

```json
POST /ver1/grid_bots/2338357/market_orders
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

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
