## Get the blacklist of pairs<br>

**Description:** Returns the list of blacklist pair(s) that restricts all DCA bots from opening deals with these pairs<br>

**Permission:** BOTS_WRITE<br>
**Security** SIGNED<br>
<br>

----------

<mark style="color:blue"><strong>GET<br>

<mark style="color:blue">/ver1/bots/pairs_black_list</strong>

----------

<br>

### Request parameters<br>

```
NONE
```
<br>

### Response Parameter<br>

<p>
   <strong>pairs</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
   Lists the pairs added to the blacklist
</p>
<br>

### Example Request<br>

```json
GET /ver1/bots/pairs_black_list
```
<br>

### Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

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
