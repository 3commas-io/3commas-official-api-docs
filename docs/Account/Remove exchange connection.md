## Remove exchange connection<br>

**Description:** Deletes an exchange account from user<br>

**Permission:** ACCOUNTS_WRITE<br>
**Security:** SIGNED<br>
<br>
{% hint style="warning" %}
Keep in mind, that an exchange account can't delete if it has any active entities (Grid Bot, Smart Trade, Deals, Trade, Signal Bot).
{% endhint %}

<br>
<br>

----------

<mark style="color:green;background-color:white" > **POST**

<mark style="color:green;background-color:white" > **/ver1/accounts/{account_id}/remove**

----------
<br>
<br>

**Path Parameters**<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**`account_id`**  | <mark style="color:grey;background-color:white"> integer | Yes |  | Unique 3Commas ID for this exchange account entity |

<br>
<br>

**Parameters response**<br>

```
NONE
```

<br>
<br>


**Example request**<br>

```json
/ver1/accounts/12345678/remove
```
<br>
<br>

**Example Response and errors**<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
true
```
</details>

<details>
<summary>Status: 404 Not Found</summary><br>

```json
{
    "error": "not_found",
    "error_description": "Not Found"
}
```
</details>

<details>
<summary> Status: 422 Unprocessable Entity</summary><br>

```json
{
    "error": "account_not_deletable",
    "error_description": "There are active trading deals on this exchange. Close all trading operations and try again"
}
```

</details>