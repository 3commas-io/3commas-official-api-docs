## Information about account leverage<br>
<br>

**Description:** Returns a list of leverages that the exchange is using<br>

**Permission:** ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

<blockquote>

<code><mark style="color:blue"><strong> GET </strong></mark></code>

<code>/ver1/accounts/{account_id}/leverage_data</code>

</blockquote>

<br>

### Path Parameter<br>
<p>
   <strong>account_id</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Unique 3Commas ID for this exchange account entity
</p><br>

### Query Parameter<br>
<p>
   <strong>page</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style="color:orange">required</mark><br>
   Page number for pagination<br>
   Default: <code>1</code>
</p><br>
<br>

### Parameters response<br>
<p>
   <strong>code</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Unique code identifying the leverage type
</p>
<p>
   <strong>name</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code><br>
   Display name for the leverage type
</p>
<p>
   <strong>can_set_leverage_value</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code><br>
   Indicates whether the leverage value can be set by the user (<code>true</code>) or not (<code>false</code>)
</p>
<p>
   <strong>max_leverage</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   Maximum allowable leverage value for this type, or null if there is no limit
</p>
<p>
   <strong>available_leverage_values</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>array</code><br>
   List of specific leverage values available for this type
</p>
<p>
   <strong>valid</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>object</code><br>
   [TBD]
</p>
<p>
   <strong>min</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   Minimum allowable leverage value
</p>
<p>
   <strong>max</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code> or <code>null</code><br>
   Maximum allowable leverage value
</p>
<br>

### Example request<br>

```json
GET /ver1/accounts/32833910/leverage_data?pair=USDC_DOGE
```
<br>

### Example Response and errors<br>

<details>
<summary>Status: 200 OK</summary><br>

```json
[
    {
        "code": "none",
        "name": "Not specified",
        "can_set_leverage_value": false,
        "max_leverage": null,
        "available_leverage_values": [],
        "valid": {}
    },
    {
        "code": "cross",
        "name": "Cross",
        "can_set_leverage_value": true,
        "available_leverage_values": [],
        "max_leverage": null,
        "valid": {
            "min": "1.0",
            "max": null
        }
    },
    {
        "code": "isolated",
        "name": "Isolated",
        "can_set_leverage_value": true,
        "available_leverage_values": [],
        "max_leverage": null,
        "valid": {
            "min": "1.0",
            "max": null
        }
    }
]
```
</details>