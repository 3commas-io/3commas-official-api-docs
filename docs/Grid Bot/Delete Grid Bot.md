## Delete Grid Bot<br>

**Description:** Deletes an existing Grid Bot in place using its ID<br>
<br>

**Permission:** BOTS_WRITEE<br>
**Security:** SIGNED<br>
<br>
<br>

-------- 

<mark style="color:red;background-color:white"> **DELETE**

<mark style="color:red;background-color:white"> **/ver1/grid_bots/{id}**

-------- 

<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**id**  | `integer` | Yes |	| Unique 3Commas ID for this Grid Bot entity |

<br>
<br>

### Response Parameters<br>

```
NONE
```
<br>
<br>

### Example Request<br>

```json
DELETE /ver1/grid_bots/2320287
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>
```
NONE
```
</details>

<details>
<summary>Status: 401 Unauthorized</summary><br>

```json
{
    "error": "signature_invalid",
    "error_description": "Provided signature is invalid"
}
```
</details>