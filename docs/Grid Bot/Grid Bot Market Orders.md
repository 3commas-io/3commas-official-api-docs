## Get trades of Grid Bot<br>
<br>

**Description:** Returns a list of market orders for a Grid Bot using its ID<br>

**Permission:** BOTS_READ<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:blue"><strong> GET </strong></mark></code>

<code>/ver1/grid_bots/{id}/market_orders</code>

</blockquote>

<br>

### Path Parameter<br>
<p>
   <strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this Grid Bot entity
</p>
<br>

### Query Parameters<br>
<p>
   <strong>limit</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Quantity of the records you want to get in response<br>
   Minimum: <code>1</code>, Maximum: <code>1000</code><br>
   Default: <code>100</code>
</p>
<p>
   <strong>offset</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Used to specify the starting point for a set of records to return in a paginated list<br>
   Default: <code>0</code>
</p>
<br>

### Response Parameters<br>
<p>
   <strong>grid_lines_orders</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
An array of grid line orders associated with this trading strategy
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>order_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ID of Trade entity
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>order_type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The side of the order to be created by this trade: <code>Buy</code> or <code>Sell</code>
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>status_string</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3Commas status for this Trade
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>created_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISO 8601 datetime string of when this Trade entity was created
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>updated_at</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISO 8601 datetime string of when this Trade entity was updated
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>quantity</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The total amount of the asset involved in the order
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>quantity_remaining</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The amount of the asset that remains unfulfilled from the total order quantity
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>total</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The total value of the order based on the executed quantity and rate
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>rate</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The rate at which the asset was bought or sold for this order
</p>
<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>average_price</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Weighted average price of the asset during trade execution
</p>
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