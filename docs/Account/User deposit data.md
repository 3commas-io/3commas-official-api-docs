## User deposit data<br>

**Description:** Returns the data of deposit for a specific account using its ID<br>

{% hint style="info" %}
This endpoint works for the following exchanges: *Binance Spot*, *Binance US*, *OKX Spot*, *Binance Broker*
{% endhint %}<br>

**Permission:**  ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue;background-color:white" >**GET**

<mark style="color:blue;background-color:white" > **/ver1/accounts/{account_id}/deposit_data**

----------
<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**account_id** | `integer` | Yes |  | Unique 3Commas ID for this exchange account entity |


### Query Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**currency** | `string` | Yes |  | Currency code for what you want to get a data<br>Example: `BTC` |
|**network** | `string` | Yes |  | Name of Network for this currency |

<br>
<br>

### Response Parameters<br>

| Name | Type |	Description|
|------|------|------------|
|**address**| `string` | The cryptocurrency wallet address for deposits and withdrawals |
|**address_tag**| `string`| Tag of address for this deposits |
|**available_balance**| `string`| The available balance in this currency and account |
|**in_orders**| `string`|The amount of this currency currently locked in active orders |
|**total_balance**|`string` | The total balance in this currency and account|

<br>
<br>

### Example Request<br>

```json
/ver1/accounts/76543210/deposit_data?currency=BTC&network=BTC
```
<br>
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