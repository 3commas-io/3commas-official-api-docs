## Information about account leverage

**Description:** Returns a list of leverages that the exchange market is using

**Permission:** ACCOUNTS_READ
**Security:** SIGNED

----------

<mark style={{ color: "blue", backgroundColor: "white" }} > **GET**</mark>

<mark style={{ color: "blue", backgroundColor: "white" }} >`/ver1/accounts/{account_id}/leverage_data`</mark>

----------

### Path Parameter

   account_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Unique 3Commas ID for this exchange account entity

### Query Parameter

   page&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>integer</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Page number for pagination
   Default: <code>1</code>

### Parameters response

| Name | Type | Description|
|------|------|------------|
|**code**| `string` | Unique code identifying the leverage type |
|**name**| `boolean`| Display name for the leverage type |
|**can_set_leverage_value**| `boolean` | Indicates whether the leverage value can be set by the user |
|**max_leverage**| `string` or `null` | Maximum allowable leverage value for this type, or null if there is no limit |
|**available_leverage_values**| `array` | List of specific leverage values available for this type, if any |
|**valid[min]**| `string` or `null` | Minimum allowable leverage value |
|**valid[max]**| `string` or `null` | Maximum allowable leverage value |

### Example request

```json
GET /ver1/accounts/32833910/leverage_data?pair=USDC_DOGE
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

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
