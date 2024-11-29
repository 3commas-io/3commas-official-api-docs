## User deposit data<br>

**Description:** Returns the data of deposit for a specific account using its ID<br>

{% hint style="info" %}
This endpoint works for the following exchanges: *Binance Spot*, *Binance US*, *OKX Spot*, *Binance Broker*
{% endhint %}<br>

**Permission:**  ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue"><strong>GET</strong>

<mark style="color:blue"><strong>/ver1/accounts/{account_id}/deposit_data</strong>

----------

<br>

### Path Parameter<br>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this exchange account entity
</p><br>

### Query Parameters<br>
<p>
   <strong>currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Currency code for what you want to get a data<br>
   Example: <code>BTC</code>
</p>
<p>
   <strong>network</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Name of Network for this currency
</p><br>

### Response Parameters<br>
<p>
   <strong>address</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The cryptocurrency wallet address for deposits and withdrawals
</p>
<p>
   <strong>network</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Tag of address for this deposits
</p>
<p>
   <strong>currency</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The amount of this currency currently locked in active orders
</p>
<p>
   <strong>total_balance</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The total balance in this currency and account
</p><br>

### Example Request<br>

```json

GET /ver1/accounts/76543210/deposit_data?currency=BTC&network=BTC
```
<br>


###  Example Response and errors<br>
<details>
<summary>Status: 200 OK</summary><br>

```json
{
    "address": "1J6jZDFSeGfwfwJpS4SLqhVo7eo2DgkT9Q",
    "address_tag": "",
    "available_balance": "0.00031872",
    "in_orders": "0.0",
    "total_balance": "0.00031872"
}
```
</details><br>
<details>
<summary>Status: 400 Bad Request</summary><br>

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

</details><br>

<details>
<summary>Status: 422 Unprocessable Entity</summary><br>

```json
{
    "error_description": "{\"code\"=>-9000, \"msg\"=>\"Deposits for this network are currently closed\"}",
    "error": "unknown_market_api_error"
}
```
</details>