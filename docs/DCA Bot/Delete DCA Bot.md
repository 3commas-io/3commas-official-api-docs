## Delete DCA Bot<br>

**Description:** Deletes an existing DCA Bot using its ID <br>

**Permission:** BOTS_WRITE<br>
**Security** SIGNED<br>
<br>

----------

<mark style="color:green"><strong>POST</strong>

<mark style="color:green"><strong>/ver1/bots/{bot_id}/delete</strong>

----------

<br>
<br>

### Path Parameter<br>
<p>
   <strong>bot_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this DCA Bot entity
</p>
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
<details>
<summary>Status: 404 Not Found</summary><br>

```
{
    "error": "not_found",
    "error_description": "Not Found"
}
```
</details>