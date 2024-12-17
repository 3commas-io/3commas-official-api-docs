import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Description:** Creates a new additional safety manual trade entry

**Permission:** BOTS_WRITE
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "green" }}> POST </mark></code>

<code>`/ver1/deals/{deal_id}/add_funds`</code>

</blockquote>

### Path Parameter

   deal_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID Deal entity

### Body Parameters

   quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Specifies the amount for the manual safety trade

   is_market&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Indicates the type of order: <code>true</code> for a market order, <code>false</code> for a limit order

   response_type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Defines the response format: <code>empty</code>;<code>deal</code>;<code>market_order</code><code>deal</code> is using only for 1 pair bot.Default: <code>empty</code>

   rate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Sets the rate for the safety order. Required if a limit order is used

### Response Parameters

Response format depends on choosing <code>response_type</code>:
<Tabs>
  <TabItem value="empty" label="empty" default>
    None
  </TabItem>
  <TabItem value="market_order" label="market_order">

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
    
    
       created_at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
       ISO 8601 datetime string of when this Trade entity was created
    
    
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
    
  </TabItem>
  <TabItem value="deal" label="deal">
    If successful, the response includes an updated copy of the [Deals](./README.md) entity.
  </TabItem>
</Tabs>

### Example Request

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

### Example Response and errors

<details>
<summary>Status: 201 Created</summary>

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
<summary>Status: 400 Bad request</summary>
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
