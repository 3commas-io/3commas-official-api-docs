## Balance history data<br>

**Description:** Returns the balance history for a specific account using its ID<br>

**Permission:**  ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue;background-color:white" >**GET**

<mark style="color:blue;background-color:white" > **/ver1/accounts/{account_id}/balance_chart_data**

----------
<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**account_id**  | `integer` | Yes |  | Unique 3Commas ID for this exchange account entity |
<br>

### Request Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**date_from** | `string<date-time>` | Yes | ISO 8601 format | Specifying the start date for the required records |
|**date_to** | `string<date-time>` | No | ISO 8601 format| Specifies the end date for the required records |


<br>
<br>

### Parameters response<br>

| Name | Type |	Description|
|------|------|------------|
|**date**| `string <date-time>` | Timestamp (UNIX time) in seconds representing a specific date |
|**usd**| `string`| The value in USD for a specific date |
|**btc**|`string` | The value in BTC for a specific date|
|**btc_deposit_amount**| `string` | The deposited amount in BTC on a specific date |
|**usd_deposit_amount**| `string` | The deposited amount in USD on a specific date |

<br>
<br>

### Example Request<br>

```json
/ver1/accounts/12345678/balance_chart_data?date_from=2024-09-18T18:58:55.469Z
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