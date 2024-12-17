**Description:** Returns the amount of funds required to launch the Grid Bot and details about the current balance state.

:::info
This endpoint works only for the spot exchange.
:::

**Permission:** BOTS_READ
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "blue"}}> GET </mark></code>

<code>`/ver1/grid_bots/{id}/required_balances`</code>

</blockquote>

### Path Parameters

   id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>

### Parameters response

   missing_balance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   [TBD]

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;base&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details of the missing amount in the base currency

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The amount of the base currency that is missing

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The name or symbol of the base currency

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quote&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details of the missing amount in the quote currency

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The amount of the quote currency that is missing

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The name or symbol of the quote currency

   required_balance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   The total amount of funds required in base and quote currencies to launch the Grid Bot

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;base&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details of the required amount in the base currency

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The total amount of the base currency required

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The name or symbol of the base currency

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quote&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Details of the required amount in the quote currency

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The total amount of the quote currency required

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The name or symbol of the quote currency

   need_balancing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether additional funds are required to balance the Grid Bot (<code>true</code>) or not (<code>false</code>)

   balancing_available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether the bot can be balanced with the current available funds (<code>true</code>) or not (<code>false</code>)

   necessary_quantities&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code>
   Details of the exact amount and currency required to balance the Grid Bot

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The specific amount of the required currency needed to balance the bot

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The symbol of the currency required for balancing

### Example Request

```
GET /ver1/grid_bots/12345678/required_balances
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>
```json
{
   "missing_balance": {
      "base": {
         "quantity": "0.0",
         "currency": "BTC"
      },
      "quote": {
         "quantity": "8500.0",
         "currency": "USDT"
      }
   },
   "required_balance": {
      "base": {
         "quantity": "2.0",
         "currency": "BTC"
      },
      "quote": {
         "quantity": "18500.0",
         "currency": "USDT"
      }
   },
   "need_balancing": true,
   "balancing_available": true,
   "necessary_quantities": {
      "quantity": "8500.0",
      "currency": "USDT"
   }
}
```
</details>

<details>
<summary>Status: 404 Not Found</summary>

```json
{
    "error": "not_found",
    "error_description": "Not Found"
}
```

</details>
<details>
<summary>Status: 500 Internal Server Error</summary>

```json
{
    "error": "grid_lines_not_marked",
    "error_description": "Grid lines empty or not marked"
}
```

</details>
