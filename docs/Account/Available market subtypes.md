## Available market subtypes<br>
<br>

**Description:** Returns the available account types for connection by user for specific exchange and pair of keys<br>

**Permission:** NONE<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:blue"><strong> GET </strong></mark></code>

<code>/ver1/accounts/types_to_connect</code>

</blockquote>

<br>

### Query Parameters<br>
<p>
   <strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Name of the exchange in the 3Commas system 
</p>
<p>
   <strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Name for exchange account
</p>
<p>
   <strong>api_key</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   API-key for this exchange account
</p>
<p>
   <strong>secret</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Secret-key for this exchange account
</p><br>

{% hint style="info" %}
Use endpoint [Supported markets list](/docs/Market%20data/Supported%20markets%20list.md) and parameter <code>market_code</code>to get value for parameter <code>type</code> in 3Commas.
{% endhint %}

<br>

### Response Parameters<br>
<p>
   <strong>type</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   The exchange code available to connect
</p>
<p>
   <strong>connected</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether the exchange is currently connected (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>available</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Secret-key for this exchange account
</p>
<p>
   <strong>unified</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Shows the exchange supports an unified account. Using for Bybit exchange<br><code>true</code> is if it supports 
</p><br>


### Example Request<br>

```json
GET
/ver1/accounts/types_to_connect?type=binance&name=binance123&api_key=6q4zuON***XKi8kOMepGT***xcxkBlIACvhY***8Qr97MsAT9***p4qe9Uezqrrd&secret=7CfL1slT***8xzCsgzA***4yfNGvOav***QO
```
<br>

### Example Response and errors<br>
<details>
<summary>Status: 200 OK</summary><br>

```json
 {
        "type": "binance",
        "connected": false,
        "available": true,
        "unified": false
    },
    {
        "type": "binance_margin",
        "connected": false,
        "available": true,
        "unified": false
    },
    {
        "type": "binance_futures",
        "connected": true,
        "available": true,
        "unified": false
    },
    {
        "type": "binance_futures_coin",
        "connected": true,
        "available": true,
        "unified": false
    }
]
```
</details>

<details>
<summary>Status: 400 Bad Request</summary><br>

```json
{
    "error": "record_invalid",
    "error_description": "Invalid parameters",
    "error_attributes": {
        "type": [
            "does not have a valid value"
        ]
    }
}
```
</details>