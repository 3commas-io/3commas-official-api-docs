##Market Orders of Grid Bot##

**Description:** Returns a list of market orders for a Grid Bot using its ID.

> GET
>
> /ver1/grid_bots/{id}/market_orders

**Query Parameters**
| Name | Type |	Mandatory |	Values(default)	| Description|
|------|------|-----------|-----------------|------------|
|`id`  | integer	| Yes | -	| Unique 3Commas ID for this Grid Bot entity |
|`limit`  | integer	| No |	`100` | Quantity of the records you want to get in response. Minimum: `1`, Maximum: `1000`.|
|`offset`  | integer	| No |	`0` | Used to specify the starting point for a set of records to return in a paginated list. For example, if you have a list of 100 items and want to retrieve items 21-30, you might use an offset of 20. |

**Parameters response**
TBD

-----

**Example Request**
```json
TBD
```

**Example Response**
```json
{
                  grid_lines_orders: [
                    {
                      order_id: trade.id,
                      order_type: trade.order_type,
                      status_string: trade.status_string,
                      created_at: trade.created_at,
                      updated_at: trade.updated_at,
                      quantity: trade.initial_amount,
                      quantity_remaining: trade.quantity_remaining,
                      total: trade.realised_total.to_d,
                      rate: trade.rate,
                      average_price: trade.average_price.to_d
                    }
                  ],
                  balancing_orders: [
                    {
                      order_id: trade.id,
                      order_type: trade.order_type,
                      status_string: trade.status_string,
                      created_at: trade.created_at,
                      updated_at: trade.updated_at,
                      quantity: trade.initial_amount,
                      quantity_remaining: trade.quantity_remaining,
                      total: trade.realised_total.to_d,
                      rate: trade.rate,
                      average_price: trade.average_price.to_d
                    }
                  ]
                }
```





