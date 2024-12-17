**Description:** Copies the bot from or to another linked exchange account connected to 3Commas

**Permission:** BOTS_WRITE
**Security:** SIGNED

<blockquote>

<code><mark style={{ color: "green" }}> POST </mark></code>

<code>`/ver1/bots/{bot_id}/copy_and_create`</code>

</blockquote>

### Path Parameter

   bot_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID for this DCA Bot entity you want to copy

### Body Parameters

   name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   The name for new DCA Bot specified by the user

   secret&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
     A unique code used for copying this bot, retrieved from the <code>url_secret</code> parameter

   amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>number</code>
   Maximum amount allocated for bot usage. Calculated based on the current rate

### Response Parameters

   bot_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>
   Unique 3Commas ID for this DCA Bot entity

   bot_required_amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The minimum amount of funds required to launch this bot

### Example Request

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

### Example Response and Errors

<details>
<summary>Status: 201 Created</summary>

```json
{
    "bot_id": 23456789,
    "bot_required_amount": 240
}

```

</details>

<details>
<summary>Status: 400 Bad Request</summary>

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
<summary>Status: 401 Unauthorized</summary>

```json
{
    "error": "signature_invalid",
    "error_description": "Provided signature is invalid"
}
```

</details>
