## Delete Grid Bot<br>
<br>

**Description:** Deletes an existing Grid Bot in place using its ID<br>
<br>

**Permission:** BOTS_WRITEE<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:red"><strong> DELETE </strong></mark></code>

<code>/ver1/grid_bots/{id}</code>

</blockquote>

<br>

### Path Parameters<br>
<p>
   <strong>id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this Grid Bot entity
</p>
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