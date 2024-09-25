## Balance history data

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
|**`account_id`**  | <mark style="color:grey;background-color:white"> integer | Yes |  | Unique 3Commas ID for this exchange account entity |
<br>

### Request Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**date_from** | `string<date-time>` | Yes |  | DateTime string specifying the start date for the required records<br> |
|**date_to** | `string<date-time>` | Yes |  | DateTime string specifying the start date for the required records<br> |


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