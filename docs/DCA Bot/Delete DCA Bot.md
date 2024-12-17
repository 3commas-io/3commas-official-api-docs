**Description:** Deletes an existing DCA Bot using its ID

**Permission:** BOTS_WRITE
**Security** SIGNED

<blockquote>

<code><mark style={{ color: "green" }}> POST </mark></code>

<code>`/ver1/bots/{bot_id}/delete`</code>

</blockquote>

### Path Parameter

   bot_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID for this DCA Bot entity

### Response Parameters

```
NONE
```

### Example Request

```json
POST /ver1/bots/12345678/delete
```

### Example response and errors

<details>
<summary>Status: 201 Created</summary>

```json
true
```

</details>

<details>
<summary>Status: 403 Forbidden</summary>

```json
{
    "error": "Forbidden"
}
```

</details>
<details>
<summary>Status: 404 Not Found</summary>

```
{
    "error": "not_found",
    "error_description": "Not Found"
}
```

</details>
