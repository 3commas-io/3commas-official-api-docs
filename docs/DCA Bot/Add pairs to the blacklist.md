**Description:** Adds specified pair(s) to the blacklist, preventing all DCA bots from opening deals with these pairs

**Permission:** BOTS_WRITE
**Security** SIGNED

<blockquote>

<code><mark style={{ color: "green" }}> POST </mark></code>

<code>ver1/bots/update_pairs_black_list</code>

</blockquote>

### Body parameter

   pairs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Trading pair(s) in 3Commas format

:::info
The trading pair code is used in the 3Commas format. Use the endpoint [All Market Pairs](Market%20data/2.All%20market%20pairs.md) to get the value for parameter pair in 3Commas format.
:::

### Response Parameter

   pairs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code>
   The list of pairs that was added to the blacklist

### Example Request

```json
POST /ver1/bots/update_pairs_black_list?pairs=1INCH_1INCH-USD-SWAP
```

### Example Response and errors

<details>
<summary>Status: 201 Created</summary>

```json
{
    "pairs": [
        "1INCH_1INCH-USD-SWAP"
    ]
}
```

</details>
