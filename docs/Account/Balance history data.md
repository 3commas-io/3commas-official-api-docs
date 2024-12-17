## Balance history data

**Description:** Returns the balance history for a specific account using its ID

**Permission:**  ACCOUNTS_READ
**Security:** SIGNED

----------

<mark style={{ color: "blue"}}>GET</mark>

<mark style={{ color: "blue"}}>`/ver1/accounts/{account_id}/balance_chart_data`</mark>

----------

### Path Parameter

   account_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID for this exchange account entity

### Request Parameters

   date_from&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Specifying the start date in ISO 8601 format for the required records

   date_to&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Specifies the end date for the required records

### Parameters response

   date_to&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   Timestamp (UNIX time) in seconds representing a specific date

   usd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The value in USD for a specific date

   btc&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The value in BTC for a specific date

   btc_deposit_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The deposited amount in BTC on a specific date

   usd_deposit_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The deposited amount in USD on a specific date

### Example Request

```json
 GET /ver1/accounts/12345678/balance_chart_data?date_from=2024-09-18T18:58:55.469Z
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

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
<summary>Status: 400 Bad Request</summary>
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
