## User deposit data

**Description:** Returns the data of deposit for a specific account using its ID

:::info
This endpoint works for the following exchanges: *Binance Spot*, *Binance US*, *OKX Spot*, *Binance Broker*
:::

**Permission:**  ACCOUNTS_READ
**Security:** SIGNED

----------

<mark style={{ color: "blue"}}>GET</mark>

<mark style={{ color: "blue"}}>`/ver1/accounts/{account_id}/deposit_data`</mark>

----------

### Path Parameter

   account_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID for this exchange account entity

### Query Parameters

   currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Currency code for what you want to get a data
   Example: <code>BTC</code>

   network&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Name of Network for this currency

### Response Parameters

   address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The cryptocurrency wallet address for deposits and withdrawals

   network&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Tag of address for this deposits

   currency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The amount of this currency currently locked in active orders

   total_balance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The total balance in this currency and account

### Example Request

```json

GET /ver1/accounts/76543210/deposit_data?currency=BTC&network=BTC
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

```json
{
    "address": "1J6jZDFSeGfwfwJpS4SLqhVo7eo2DgkT9Q",
    "address_tag": "",
    "available_balance": "0.00031872",
    "in_orders": "0.0",
    "total_balance": "0.00031872"
}
```

</details>
<details>
<summary>Status: 400 Bad Request</summary>

```json
{
    "error": "record_invalid",
    "error_description": "Invalid parameters",
    "error_attributes": {
        "currency": [
            "is missing"
        ],
        "network": [
            "is missing"
        ]
    }
}
```

</details>

<details>
<summary>Status: 422 Unprocessable Entity</summary>

```json
{
    "error_description": "{\"code\"=>-9000, \"msg\"=>\"Deposits for this network are currently closed\"}",
    "error": "unknown_market_api_error"
}
```

</details>
