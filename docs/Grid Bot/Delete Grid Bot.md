**Description:** Deletes an existing Grid Bot in place using its ID

**Permission:** BOTS_WRITEE
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "red" }}> DELETE </mark></code>

<code>`/ver1/grid_bots/{id}`</code>

</blockquote>

### Path Parameters

   id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID for this Grid Bot entity

### Response Parameters

```
NONE
```

### Example Request

```json
DELETE /ver1/grid_bots/2320287
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

```
NONE
```

</details>

<details>
<summary>Status: 401 Unauthorized</summary>

```json
{
    "error": "signature_invalid",
    "error_description": "Provided signature is invalid"
}
```

</details>
