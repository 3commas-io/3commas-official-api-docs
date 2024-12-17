**Description:** Returns the list of blacklist pair(s) that restricts all DCA bots from opening deals with these pairs

**Permission:** BOTS_WRITE
**Security** SIGNED

<blockquote>

<code><mark style={{ color: "blue"}}> GET </mark></code>

<code>/ver1/bots/pairs_black_list</code>

</blockquote>

### Request parameters

```
NONE
```

### Response Parameter

   pairs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code>
   Lists the pairs added to the blacklist

### Example Request

```json
GET /ver1/bots/pairs_black_list
```

### Example Response and errors

<details>
<summary>Status: 201 Created</summary>

```json
{
    "pairs": [
        "BTC_SUI",
        "BTC_RONIN",
        "1INCH_1INCH-USD-SWAP"
    ]
}
```

</details>
