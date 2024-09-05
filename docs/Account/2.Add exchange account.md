## Add exchange account

**Description:** Adds a new exchange account. 

Permission: ACCOUNTS_WRITE

Security: SIGNED

----------

<mark style="color:green;background-color:white" > **POST**

<mark style="color:green;background-color:white" > **/ver1/accounts/new**

----------

**Parameters request**

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**`type`**  | <mark style="color:grey;background-color:white"> integer | Yes |  | Unique 3Commas ID for this SmartTrade entity |
|**`name`**  | <mark style="color:grey;background-color:white"> integer | Yes |  | Name of this exchange account. |
|**`api_key`**  | <mark style="color:grey;background-color:white"> integer | No |  | API-key from this exchange account |
|**`secret`**  | <mark style="color:grey;background-color:white"> integer | No |  | Secret-key from this exchange account |
|**`address`**  | <mark style="color:grey;background-color:white"> integer | No |  | Address of wallet. This parameter is required when `type` is set to `ethereumwallet` |
|**`customer_id`**  | <mark style="color:grey;background-color:white"> integer | No |  | This parameter is required when `type` is set to `Bitstamp` |
|**`passphrase`**  | <mark style="color:grey;background-color:white"> integer | No |  | Secret phrase from this exchange account. This parameter is required when `type` is set to `Coinbase` |
|**`types_to_create`**  | <mark style="color:grey;background-color:white"> integer | No |  | Array of related account types to be created. For example ['binance_margin'] |



**Parameters response**
| Name | Type |	Description|
|------|------|------------|
|**` `**| | |


**Example Request**
```json
{{baseUrl}}/v2/smart_trades/12345678
```
**Example Response and errors**

<details>
<summary>Status: 200 OK</summary>

```json