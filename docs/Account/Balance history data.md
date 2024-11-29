## Balance history data<br>

**Description:** Returns the balance history for a specific account using its ID<br>

**Permission:**  ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue"><strong>GET</strong>

<mark style="color:blue"><strong>/ver1/accounts/{account_id}/balance_chart_data</strong>

----------
<br>
<br>

### Path Parameter<br>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this exchange account entity
</p>


### Request Parameters<br>
<p>
   <strong>date_from</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Specifying the start date in ISO 8601 format for the required records 
</p>
<p>
   <strong>date_to</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Specifies the end date for the required records
</p>
<br>
<br>

### Parameters response<br>
<p>
   <strong>date_to</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Timestamp (UNIX time) in seconds representing a specific date
</p>
<p>
   <strong>usd</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The value in USD for a specific date
</p>
<p>
   <strong>btc</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The value in BTC for a specific date
</p>
<p>
   <strong>btc_deposit_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The deposited amount in BTC on a specific date
</p>
<p>
   <strong>usd_deposit_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The deposited amount in USD on a specific date
</p>
<br>
<br>

### Example Request<br>

```json
 GET /ver1/accounts/12345678/balance_chart_data?date_from=2024-09-18T18:58:55.469Z
```
<br>
<br>

###  Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```json
[
    {
        "date": 1726617600,
        "usd": 28.59,
        "btc": 0.000475,
        "btc_deposit_amount": 0.0,
        "usd_deposit_amount": 0.0
    },
    ...
    {
        "date": 1727873800,
        "usd": 29.31,
        "btc": 0.000481,
        "btc_deposit_amount": 0.0,
        "usd_deposit_amount": 0.0
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
        "date_from": [
            "is invalid"
        ]
    }
}
```
</details>