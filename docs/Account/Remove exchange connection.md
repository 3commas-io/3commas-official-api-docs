## Remove exchange connection<br>

**Description:** Deletes an exchange account from user<br>

**Permission:** ACCOUNTS_WRITE<br>
**Security:** SIGNED<br>
<br>
{% hint style="warning" %}
Keep in mind, that an exchange account can't delete if it has any active entities (Grid Bot, Smart Trade, Deals, Trade, Signal Bot).
{% endhint %}

<br>

----------

<mark style="color:green"><strong>POST</strong>

<mark style="color:green"><strong>/ver1/accounts/{account_id}/remove</strong>

----------
<br>

### Path Parameter<br>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Unique 3Commas ID for this exchange account entity
</p><br>


### Response Parameters<br>

```
NONE
```
<br>

### Example request<br>

```json
POST /ver1/accounts/12345678/remove
```
<br>
<br>

### Example Response and errors<br>

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