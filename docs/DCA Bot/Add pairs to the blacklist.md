## Add pairs to the blacklist<br>

**Description:** Adds specified pair(s) to the blacklist, preventing all DCA bots from opening deals with these pairs <br>

**Permission:** BOTS_WRITE<br>
**Security** SIGNED<br>
<br>

----------

<mark style="color:green;background-color:white"><strong>POST</strong>

<mark style="color:green;background-color:white"><strong>/ver1/bots/update_pairs_black_list</strong>

----------

<br>
<br>

### Body parameter<br>
<p>
   <strong>pairs</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Trading pair(s) in 3Commas format
</p>
<br>
<br>

{% hint style="info" %}
The trading pair code is used in the 3Commas format. Use the endpoint [All Market Pairs](Market%20data/2.All%20market%20pairs.md) to get the value for parameter pair in 3Commas format.
{% endhint %}

<br>
<br>

### Response Parameter<br>
<p>
   <strong>pairs</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
   The list of pairs that was added to the blacklist
</p>
<br>
<br>

### Example Request<br>

```json
POST /ver1/bots/update_pairs_black_list?pairs=1INCH_1INCH-USD-SWAP
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
{
    "pairs": [
        "1INCH_1INCH-USD-SWAP"
    ]
}
```
</details>
