## Available market subtypes

**Description:** Returns the available account types for connection by user for specific exchange and pair of keys

**Permission:** NONE
**Security:** SIGNED

----------

<mark style={{ color: "blue"}}>GET</mark>

<mark style={{ color: "blue"}}>/ver1/accounts/types_to_connect </mark>

----------

### Query Parameters

   type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Name of the exchange in the 3Commas system

   name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Name for exchange account

   api_key&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   API-key for this exchange account

   secret&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark style={{color: "orange"}}>required</mark>
   Secret-key for this exchange account

:::info
Use endpoint [Supported markets list](/docs/Market%20data/Supported%20markets%20list.md) and parameter <code>market_code</code>to get value for parameter <code>type</code> in 3Commas.
:::

### Parameters Response

   type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>string</code>
   The exchange code available to connect

   connected&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Indicates whether the exchange is currently connected (<code>true</code>) or not (<code>false</code>)

   available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Secret-key for this exchange account

   unified&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code>boolean</code>
   Shows the exchange supports an unified account. Using for Bybit exchange<code>true</code> is if it supports

### Example Request

```json
GET
/ver1/accounts/types_to_connect?type=binance&name=binance123&api_key=6q4zuON***XKi8kOMepGT***xcxkBlIACvhY***8Qr97MsAT9***p4qe9Uezqrrd&secret=7CfL1slT***8xzCsgzA***4yfNGvOav***QO
```

### Example Response and errors

<details>
<summary>Status: 200 OK</summary>

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
<summary>Status: 400 Bad Request</summary>

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
