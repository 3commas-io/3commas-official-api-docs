## Information about account leverage<br>

**Description:** Returns a list of leverages that the exchange market is using<br>

**Permission:** ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:blue;background-color:white" > **GET**

<mark style="color:blue;background-color:white" > **/ver1/accounts/{account_id}/leverage_data**

----------
<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**account_id**  | `integer` | Yes |  | Unique 3Commas ID for this exchange account entity |

<br>

### Query Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
| **page**  | `integer`	| No |  | Page number for pagination.<br>Default: `1`  |

<br>
<br>

### Parameters response<br>

| Name | Type |	Description|
|------|------|------------|
|**code**| `string` |  |
|**name**| `boolean`|  |
|**can_set_leverage_value**| `boolean` |  |
|**max_leverage**| `string` or `null` |  |
|**available_leverage_values**| `array` |  |
|**valid[min]**| `string` or `null` |  |
|**valid[max]**| `string` or `null` |  |

<br>
<br>
**Example request**<br>

```json
GET /ver1/accounts/32833910/leverage_data?pair=USDC_DOGE
```
<br>
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