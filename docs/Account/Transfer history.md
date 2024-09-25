## Transfers history<br>

**Description:** Returns the transfer history for a specific account using its ID<br>

{% hint style="info" %}
This endpoing works only for Binance exchange
{% endhint %}

**Permission:**  ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue;background-color:white" >**GET**

<mark style="color:blue;background-color:white" > **/ver1/accounts/transfer**

----------
<br>
<br>

### Request Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**account_id** | `integer` | Yes |  | Unique 3Commas ID for this exchange account entity |
|**currency** | `string` | Yes |  | Currency code for what you want to get a history<br>Example: `USDT` |
|**start_time** | `string` | Yes |  | DateTime string specifying the start date for the required records<br>Example: `1665560898` |
|**page** | `string` | Yes |  | Page number for pagination<br>Default: `1` |
|**per_page** | `string` | Yes |  | Quantity of records on one page<br>Default: `10` |

<br>
<br>

### Parameters response<br>

| Name | Type |	Description|
|------|------|------------|
|**id**| | |

<br>
<br>

### Example Request<br>

```json

```
<br>
<br>

###  Example Response and errors<br>

<details>
<summary>Status: K</summary><br>

```json

```
</details>