## Transfer coins between accounts<br>

**Description:** Transfers coins between accounts within the same exchange<br>

{% hint style="info" %}
This endpoing works only for Binance exchange
{% endhint %}

**Permission:**  ACCOUNTS_WRITE<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:green;background-color:white" >**POST**

<mark style="color:green;background-color:white" > **/ver1/accounts/transfer**

----------
<br>
<br>

### Request Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**currency** | `string` | Yes |  | Currency code (example: USDT) |
|**amount** | `number` | Yes |  |  |
|**to_account_id** | `integer` | Yes |  | Recipient account ID (possible values in /transfer_data) |
|**from_account_id** | `integer` | Yes |  | Sender account ID (possible values in /transfer_data) |

<br>
<br>

### Parameters response<br>

| Name | Type |	Description|
|------|------|------------|
|**id**| | |




