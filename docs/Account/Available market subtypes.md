## Available market subtypes<br>

**Description:** Returns the available account types for connection by user for specific exchange and pair of keys<br>

**Permission:** NONE<br>
**Security:** SIGNED<br>
<br>

{% hint style="info" %}
This endpoint supports to create SmartTrade is available for accounts where the parameter `smart_trading_supported` is `true`.
{% endhint %}

<br>
<br>

----------

<mark style="color:green;background-color:white" > **GET** 

<mark style="color:green;background-color:white" >**/ver1/accounts/types_to_connect**

----------

<br>
<br>

### Query Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**type**  | `string`| Yes |  | Name of the exchange in the 3Commas system |
|**name**  | `string`	| Yes |  | Name for exchange account |
|**api_key**  | `string`	| No |  | ID of the exchange account entity |
|**secret**  | `string`	| No |  | ID of the exchange account entity |

<br>
<br>

### Parameters response<br>

| Name | Type |	Description|
|------|------|------------|
|**type** | `string` | The exchange code available to connect |
|**connected**| `boolean`| Returns status connect of exchange<br>`true` is if connected |
|**available**| `boolean`| Shows the availability of connection to the exchange.<br>`true` is if the exchange connection is available |
|**unified**| `boolean`| Shows the exchange supports a unified account. Using for Bybit exchange<br>`true` is if it supports  |

<br>
<br>

### Example Request<br>

```json
/ver1/accounts/types_to_connect?type=binance&name=binance123&api_key=6q4zuONXKi8kOMepGTRs373K46W34wxcxkBlIACvhY8Qr97MsAT9p4qe9Uezqrrd&secret=7CfL1slTgPDfoJSPgaveIsOFxxzCsgzA23yRyCHapgJGDC4yfNGvOavW4QglsyQO
```
<br>
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