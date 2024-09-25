## Rename exchange account<br>

**Description:** Updates a name for the exchange account entity<br>

**Permission:** ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:green;background-color:white" > **POST**

<mark style="color:green;background-color:white" > **/ver1/accounts/{account_id}/rename**

----------
<br>
<br>


### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**account_id**  | `integer` | Yes |  | Unique 3Commas ID for this exchange account entity |

<br>
<br>

### Query Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**name**  | `integer` | Yes |  | New name for this exchange account |

<br>
<br>

### Parameters response**<br>


### Example request<br>

```json
/ver1/accounts/12345678/remove
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json


```
</details>
