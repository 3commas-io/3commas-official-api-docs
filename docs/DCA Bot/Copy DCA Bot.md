## Copy DCA Bot<br>
<br>

**Description:** Copies the bot from or to another linked exchange account connected to 3Commas<br>

**Permission:** BOTS_WRITE<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:green"><strong> POST </strong></mark></code>

<code>/ver1/bots/{bot_id}/copy_and_create</code>

</blockquote>

<br>

### Path Parameter<br>
<p>
   <strong>bot_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this DCA Bot entity you want to copy
</p>
<br>

### Body Parameters<br>
<p>
   <strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   The name for new DCA Bot specified by the user
</p>
<p>
   <strong>secret</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
     A unique code used for copying this bot, retrieved from the <code>url_secret</code> parameter
</p>
<p>
   <strong>amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code><br>
   Maximum amount allocated for bot usage. Calculated based on the current rate
</p>
<br>

### Response Parameters<br>
<p>
   <strong>bot_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code><br>
   Unique 3Commas ID for this DCA Bot entity
</p>
<p>
   <strong>bot_required_amount</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The minimum amount of funds required to launch this bot
</p>
<br>

### Example Request<br>

```json
POST /ver1/bots/12345678/copy_and_create
```

```json
Body:

{
   "name": "Name DCA Bot",
   "secret": "ab7b22d2f1"
}
```
<br>

### Example Response and Errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
{
    "bot_id": 23456789,
    "bot_required_amount": 240
}

```
</details>

<details>
<summary>Status: 400 Bad Request</summary><br>

```json
{
    "error": "record_invalid",
    "error_description": "Invalid parameters",
    "error_attributes": {
        "name": [
            "is missing"
        ]
    }
}
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
