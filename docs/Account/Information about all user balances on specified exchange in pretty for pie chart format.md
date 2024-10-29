## Information about all user balances on specified exchange in pretty for pie chart formats<br>


**Description:** Shows information about currency balances of a specific account using its ID<br>

**Permission:** ACCOUNTS_READ<br>
**Security:** SIGNED<br>
<br>

----------

<mark style="color:green;background-color:white" > **POST**

<mark style="color:green;background-color:white" > **ver1/accounts/{account_id}/pie_chart_data**

----------
<br>
<br>

### Path Parameters<br>

| Name | Type |	Mandatory |	Values	| Description|
|------|------|-----------|-----------------|------------|
|**account_id**  | `integer` | Yes |  | Unique 3Commas ID for this exchange account entity |

<br>
<br>

### Response Parameters<br>

| Name | Type | Description|
|------|------|------------|
|**account_id**| `integer` | ID of the exchange account entity |
|**code**| `string` | The cryptocurrency code symbol |
|**coinmarketcapid**| `string`| Unique identifier of the cryptocurrency on CoinMarketCap |
|**name**| `string`| Full name of the cryptocurrency |
|**y**| `string`| [TBD:?] |
|**percentage**| `string`| The exact percentage share of this cryptocurrency in the account's portfolio |
|**amount**| `string`| The amount of cryptocurrency held in this account |
|**btc_value**| `string`| The equivalent value of this cryptocurrency in BTC |
|**usd_value**| `string`| The equivalent value of this cryptocurrency in USD |
|**usd_value[currency]**| `string`|The currency code used to display values for this cryptocurrency  |
|**usd_value[amount]**| `string`| The amount of the cryptocurrency in the primary display currency |



### Example request<br>

```json
POST /ver1/accounts/32402783/pie_chart_data
```
<br>
<br>

### Example Response and errors<br>

<details>
<summary>Status: 201 Created</summary><br>

```json
[
    {
        "code": "BTC",
        "coinmarketcapid": "1",
        "name": "Bitcoin (BTC)",
        "y": 65.1,
        "percentage": 65.1,
        "amount": 0.00031872,
        "btc_value": "0.00031872",
        "usd_value": "20.31",
        "primary_display_currency": {
            "currency": "USD",
            "amount": "20.3146900992"
        },
        "account_id": 32402783
    },
   ...
    {
        "code": "USDT",
        "coinmarketcapid": "825",
        "name": "Tether USDt (USDT)",
        "y": 0.91,
        "percentage": 0.91,
        "amount": 0.28478606,
        "btc_value": "0.00000447",
        "usd_value": "0.28",
        "primary_display_currency": {
            "currency": "USD",
            "amount": "0.28478606"
        },
        "account_id": 32402783
    },
    {
        "code": "ETH",
        "coinmarketcapid": "1027",
        "name": "Ethereum (ETH)",
        "y": 0.79,
        "percentage": 0.79,
        "amount": 9.52e-05,
        "btc_value": "0.00000388",
        "usd_value": "0.25",
        "primary_display_currency": {
            "currency": "USD",
            "amount": "0.247266593784"
        },
        "account_id": 32402783
    }
]
```
</details>
 