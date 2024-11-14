## Create or update the blacklist of pair for DCA Bot<br>

**Description:** Adds specified pair(s) to the blacklist, preventing all DCA bots from opening deals with these pairs <br>

**Permission:** BOTS_WRITE<br>
**Security** SIGNED<br>
<br>

----------

<mark style="color:green;background-color:white"><strong>POST<br>

<mark style="color:green;background-color:white">**/ver1/bots/update_pairs_black_list**</strong>

----------

<br>
<br>

### Body parameters<br>

Name | Type | Mandatory | Values | Description |
----- | ------- | -------- | -------- | ------------ |
**pairs** | `string` | Yes |  | Trading pair(s) in 3Commas format |
<br>

{% hint style="info" %}
The trading pair code is used in the 3Commas format. Use the endpoint [All Market Pairs](Market%20data/2.All%20market%20pairs.md) to get the value for parameter pair in 3Commas format.
{% endhint %}

<br>
<br>

### Response Parameters<br>

Name | Type | Mandatory | Values | Description |
----- | ------- | -------- | -------- | ------------ |
**pairs** | `array` | Yes |  | The list of pairs that was added to the blacklist |

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
