## Remove exchange connection

**Description:** Deletes an exchange account from user

**Permission:** ACCOUNTS_WRITE
**Security:** SIGNED

:::warning
Keep in mind, that an exchange account can't delete if it has any active entities (Grid Bot, Smart Trade, Deals, Trade, Signal Bot).
:::

----------

<mark style={{ color: "green" }}>POST</mark>

<mark style={{ color: "green" }}>`/ver1/accounts/{account_id}/remove`</mark>

----------

### Path Parameter

   account_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Unique 3Commas ID for this exchange account entity

### Response Parameters

```
NONE
```

### Example request

```json
POST /ver1/accounts/12345678/remove
```

### Example Response and errors

<details>
<summary>Status: 201 Created</summary>

```json
true
```

</details>

<details>
<summary>Status: 404 Not Found</summary>

```json
{
    "error": "not_found",
    "error_description": "Not Found"
}
```

</details>

<details>
<summary> Status: 422 Unprocessable Entity</summary>

```json
{
    "error": "account_not_deletable",
    "error_description": "There are active trading deals on this exchange. Close all trading operations and try again"
}
```

</details>
