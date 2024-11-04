## Delete DCA Bot<br>

**Description:** Deletes an existing DCA Bot using its ID <br>

**Permission:** BOTS_WRITE<br>
**Security** SIGNED<br>
<br>

----------

<mark style="color:green;background-color:white"> **POST**

<mark style="color:green;background-color:white"> **/ver1/bots/{bot_id}/delete**

----------

<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**bot_id**  | `integer`| Yes |  | Unique 3Commas ID DCA Bot entity |

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
POST /ver1/bots/12345678/delete
```

<br>
<br>

### Example response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
true
```
</details>

<details>
<summary>Status: 403 Forbidden</summary><br>

```json
{
    "error": "Forbidden"
}
```

</details>
